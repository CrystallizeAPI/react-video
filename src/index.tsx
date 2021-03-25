import React, { useState, useEffect, useRef, FC, HTMLAttributes } from 'react';
import { Image, CrystallizeImageVariant } from '@crystallize/react-image';

import { supportsDash, getDash } from './dash';
import { getHls } from './hls';

declare global {
  interface navigator {
    connection: any;
  }
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  playlists: string[];
  thumbnails?: CrystallizeImageVariant[];
  thumbnailProps?: object;
  videoProps?: HTMLAttributes<HTMLVideoElement>;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
  playButtonText?: string;
}

/**
 * Fallback function to get a video poster from the list of
 * variants
 */
function getPoster(thumbnails?: any[]): string | undefined {
  if (thumbnails && thumbnails.length > 0) {
    const allVariants = thumbnails[0].variants as CrystallizeImageVariant[];
    const variantsNoFancyStuff = allVariants.filter(
      v => !v.url.endsWith('.webp') && !v.url.endsWith('.avif')
    );

    return (
      variantsNoFancyStuff
        .filter(v => v.width > 500)
        .sort((a, b) => a.width - b.width)[0].url || variantsNoFancyStuff[0].url
    );
  }
  return undefined;
}

export const Video: FC<Props> = ({
  playlists,
  thumbnails,
  thumbnailProps,
  videoProps,
  autoPlay,
  loop = false,
  muted = false,
  controls = true,
  poster,
  playButtonText = 'Play video',
  className,
}) => {
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [playVideo, setPlayVideo] = useState(false);
  const [initiated, setInitiated] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const connection = (navigator as any).connection;

  /**
   * Determine if we should auto play the video.
   * We allow for auto play unless the user has opted
   * in for saving data
   */
  useEffect(() => {
    if (autoPlay) {
      if (!connection || !connection.saveData) {
        setPlayVideo(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!playVideo) {
      return;
    }

    if (initiated) {
      return;
    }

    const video = ref.current;
    if (!video) {
      throw new Error(
        'Cannot initialize video. Unable to find the video HTML node'
      );
    }

    // Hide the thumbnail when the video has started
    video.addEventListener('playing', () => setShowThumbnail(false), {
      once: true,
    });

    const startWithHighQualityVideo = (function () {
      try {
        return connection.downlink >= 5 && !connection.saveData;
      } catch (e) {
        return false;
      }
    })();

    if (supportsDash()) {
      getDash().then(dashjs => {
        const src = playlists.find(p => p.endsWith('.mpd'));
        if (!src) {
          throw new Error('Cannot find a valid Dash source for video');
        }

        const player = dashjs.MediaPlayer().create();

        player.initialize();

        player.updateSettings({
          debug: {
            logLevel:
              dashjs.Debug.LOG_LEVEL_NONE /* turns off console logging */,
          },
          streaming: {
            scheduleWhilePaused: false /* stops the player from loading segments while paused */,
            fastSwitchEnabled: true /* enables buffer replacement when switching bitrates for faster switching */,
            abr: {
              usePixelRatioInLimitBitrateByPortal: true /* Respect retina screens */,
              initialBitrate: {
                audio: -1,
                video: startWithHighQualityVideo ? 5000 : -1
              }
            }
          },
        });
        player.setAutoPlay(true);
        player.attachView(video);
        player.attachSource(src);

        setInitiated(true);
      });
    } else {
      const src = playlists.find(p => p.endsWith('.m3u8'));
      if (!src) {
        throw new Error('Cannot find a valid HLS source for video');
      }

      /**
       * iOS has native support for HLS, and we can use
       * the m3u8 source directly, without the use of hls.js
       */
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.autoplay = true;
        video.src = src;

        setInitiated(true);
      } else {
        getHls().then(hls => {
          hls.loadSource(src);
          hls.attachMedia(video);

          setInitiated(true);
        });
      }
    }
  }, [playVideo]);

  function onPlayClick(event: any) {
    event.preventDefault();
    setPlayVideo(true);
  }

  const thumbnailStyle = {
    zIndex: showThumbnail ? 2 : 1,
    opacity: showThumbnail ? 1 : 0,
  };

  const posterUrl = poster || getPoster(thumbnails);

  return (
    <div
      className={`react-video${className ? ` ${className}` : ''}`}
      style={{ position: 'relative' }}
    >
      {thumbnails && thumbnails.length > 0 ? (
        <Image
          {...thumbnails[0]}
          className="react-video__thumbnail"
          {...thumbnailProps}
          style={thumbnailStyle}
        />
      ) : (
        <div
          className="react-video__thumbnail-placeholder"
          style={thumbnailStyle}
        />
      )}
      {!playVideo && (
        <button className="react-video__play-btn" onClick={onPlayClick}>
          {playButtonText}
          <svg viewBox="0 0 100 100" className="react-video__play-icon">
            <path d="M78.158 51.843L25.842 82.048c-1.418.819-3.191-.205-3.191-1.843v-60.41c0-1.638 1.773-2.661 3.191-1.843l52.317 30.205c1.418.819 1.418 2.867-.001 3.686z" />
          </svg>
        </button>
      )}
      <video
        className="react-video__video"
        ref={ref}
        controls={controls}
        playsInline
        muted={muted}
        loop={loop}
        poster={posterUrl}
        style={{ opacity: initiated ? 1 : 0, zIndex: showThumbnail ? 1 : 2 }}
        {...videoProps}
      />
    </div>
  );
};

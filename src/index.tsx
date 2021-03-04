import React, { useState, useEffect, useRef, FC, HTMLAttributes } from 'react';
import { Image, CrystallizeImageVariant } from '@crystallize/react-image';

import { supportsDash, getDash } from './dash';
import { getHls } from './hls';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  playlists: string[];
  title?: string;
  thumbnails?: CrystallizeImageVariant[];
  thumbnailProps?: object;
  videoProps: HTMLAttributes<HTMLVideoElement>;
  autoPlay?: boolean;
}

export const Video: FC<Props> = ({
  playlists,
  thumbnails,
  thumbnailProps,
  videoProps,
  autoPlay,
  className,
}) => {
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [playVideo, setPlayVideo] = useState(autoPlay);
  const [initiated, setInitiated] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

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
        'Cannot initialize video. Cannot find the video HTML node'
      );
    }

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

        // setTimeout(() => video.play(), 50);
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

  useEffect(() => {
    if (initiated) {
      const activeEl = document.activeElement as HTMLElement;
      if (activeEl) {
        activeEl.blur();
      }

      const timeout = setTimeout(() => setShowThumbnail(false), 500);
      return () => clearTimeout(timeout);
    }
    return;
  }, [initiated]);

  function onPlayClick(event: any) {
    event.preventDefault();
    setPlayVideo(true);
  }

  return (
    <div
      className={`react-video${className ? ` ${className}` : ''}`}
      style={{ position: 'relative' }}
    >
      {thumbnails && thumbnails.length > 0 && (
        <Image
          {...thumbnails[0]}
          className="react-video__thumbnail"
          {...thumbnailProps}
          style={{
            zIndex: showThumbnail ? 2 : 1,
            opacity: !initiated ? 1 : 0,
          }}
        />
      )}
      {showThumbnail && (
        <button className="react-video__play-btn" onClick={onPlayClick}>
          PLAY
        </button>
      )}
      <video
        className="react-video__video"
        ref={ref}
        controls
        playsInline
        muted
        style={{ opacity: initiated ? 1 : 0, zIndex: showThumbnail ? 1 : 2 }}
        {...videoProps}
      />
    </div>
  );
};
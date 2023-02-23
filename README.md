# Deprecation Notice

This package has been deprecated and is no longer maintained. It has been moved to a new repository and is now part of a larger project. Please update your dependencies to use the new package instead.

New package repository: https://github.com/CrystallizeAPI/reactjs-components

Thank you for using this package!

---

![alt text](https://raw.githubusercontent.com/CrystallizeAPI/react-image/HEAD/media/logo.png 'An illustration of an atom')

# React Video for Crystallize

A React package to output videos from Crystallize using the native video element. Use this to easily embed videos powered by the [Crystallize headless commerce service](https://crystallize.com/).

## Demo

[Demo](https://react-video.milliseconds.io/)

## Install

```
yarn add @crystallize/react-video
```

## Use

```
import { Video } from '@crystallize/react-video';
import '@crystallize/react-video/dist/styles.css';

const videoFromCrystallize = {
    playlists: [...],
    thumbnails: [...]
}

<Video
    {...videoFromCrystallize}
    thumbnmailProps={{ sizes: "(max-width: 700px) 90vw, 700px" }}
/>
```

## Supported props

```
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
```

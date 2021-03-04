![alt text](https://raw.githubusercontent.com/CrystallizeAPI/react-image/HEAD/media/logo.png 'An illustration of an atom')

# React Video for Crystallize

A React package to output videos from Crystallize using the native video element. Use this to easily embed videos powered by the [Crystallize headless commerce service](https://crystallize.com/).

## Install

```
yarn add @crystallize/react-video
```

## Use

```
import { Video } from '@crystallize/react-video';

const videoFromCrystallize = {
    playlists: [...],
    thumbnails: [...]
}

<Video
    {...videoFromCrystallize}
    thumbnmailProps={{ sizes: "(max-width: 700px) 90vw, 700px" }}
/>
```

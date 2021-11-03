import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Video, Props } from '../src';

import '../src/styles.css';

const meta: Meta = {
  title: 'Welcome',
  component: Video,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const videoModel = {
  title: 'A video of a street filled with graffiti art',
  playlists: [
    'https://media.crystallize.com/furniture/20/6/12/21/color-is-back-grafitti/cmaf/color-is-back-grafitti.mpd',
    'https://media.crystallize.com/furniture/20/6/12/21/color-is-back-grafitti/cmaf/color-is-back-grafitti.m3u8',
  ],
  thumbnails: [
    {
      url: 'https://media.crystallize.com/furniture/21/3/5/1/color-is-back.jpg',
      variants: [
        {
          url:
            'https://media.crystallize.com/furniture/21/3/5/1/@100/color-is-back.webp',
          width: 100,
        },
        {
          url:
            'https://media.crystallize.com/furniture/21/3/5/1/@100/color-is-back.jpeg',
          width: 100,
        },
        {
          url:
            'https://media.crystallize.com/furniture/21/3/5/1/@200/color-is-back.webp',
          width: 200,
        },
        {
          url:
            'https://media.crystallize.com/furniture/21/3/5/1/@200/color-is-back.jpeg',
          width: 200,
        },
        {
          url:
            'https://media.crystallize.com/furniture/21/3/5/1/@500/color-is-back.webp',
          width: 500,
        },
        {
          url:
            'https://media.crystallize.com/furniture/21/3/5/1/@500/color-is-back.jpeg',
          width: 500,
        },
        {
          url:
            'https://media.crystallize.com/furniture/21/3/5/1/@768/color-is-back.webp',
          width: 768,
        },
        {
          url:
            'https://media.crystallize.com/furniture/21/3/5/1/@768/color-is-back.jpeg',
          width: 768,
        },
      ],
    },
  ],
};

const Template: Story<Props> = args => (
  <div style={{ maxWidth: 800, margin: 30 }}>
    <Video {...args} />
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  ...videoModel,
};

export const WithoutThumbnail = Template.bind({});
WithoutThumbnail.args = {
  playlists: videoModel.playlists,
};

export const LoopAndNoControls = Template.bind({});
LoopAndNoControls.args = {
  ...videoModel,
  autoPlay: true,
  loop: true,
  controls: false,
};

export const WithNaiveReactImageProps = Template.bind({});
WithNaiveReactImageProps.args = {
  ...videoModel,
  thumbnails: [
    {
      url: 'https://media.crystallize.com/furniture/21/3/5/1/color-is-back.jpg',
      _availableSizes: [100, 200, 500, 768],
      _availableFormats: ['webp', 'jpeg'],
    },
  ],
};

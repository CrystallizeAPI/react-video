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
    'https://media.crystallize.com/crystallize_marketing/22/9/8/5/this-is-crystallize/cmaf/this-is-crystallize.mpd',
    'https://media.crystallize.com/crystallize_marketing/22/9/8/5/this-is-crystallize/cmaf/this-is-crystallize.m3u8',
  ],
  thumbnails: [
    {
      url:
        'https://media.crystallize.com/crystallize_marketing/22/9/19/1/crystallize-product-storytelling.jpg',
      altText: null,
      key:
        'crystallize_marketing/22/9/19/1/crystallize-product-storytelling.jpg',
      variants: [
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@100/crystallize-product-storytelling.avif',
          width: 100,
          key:
            'crystallize_marketing/22/9/19/1/@100/crystallize-product-storytelling.avif',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@100/crystallize-product-storytelling.webp',
          width: 100,
          key:
            'crystallize_marketing/22/9/19/1/@100/crystallize-product-storytelling.webp',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@100/crystallize-product-storytelling.jpeg',
          width: 100,
          key:
            'crystallize_marketing/22/9/19/1/@100/crystallize-product-storytelling.jpeg',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@200/crystallize-product-storytelling.avif',
          width: 200,
          key:
            'crystallize_marketing/22/9/19/1/@200/crystallize-product-storytelling.avif',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@200/crystallize-product-storytelling.webp',
          width: 200,
          key:
            'crystallize_marketing/22/9/19/1/@200/crystallize-product-storytelling.webp',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@200/crystallize-product-storytelling.jpeg',
          width: 200,
          key:
            'crystallize_marketing/22/9/19/1/@200/crystallize-product-storytelling.jpeg',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@500/crystallize-product-storytelling.avif',
          width: 500,
          key:
            'crystallize_marketing/22/9/19/1/@500/crystallize-product-storytelling.avif',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@500/crystallize-product-storytelling.webp',
          width: 500,
          key:
            'crystallize_marketing/22/9/19/1/@500/crystallize-product-storytelling.webp',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@500/crystallize-product-storytelling.jpeg',
          width: 500,
          key:
            'crystallize_marketing/22/9/19/1/@500/crystallize-product-storytelling.jpeg',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@768/crystallize-product-storytelling.avif',
          width: 768,
          key:
            'crystallize_marketing/22/9/19/1/@768/crystallize-product-storytelling.avif',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@768/crystallize-product-storytelling.webp',
          width: 768,
          key:
            'crystallize_marketing/22/9/19/1/@768/crystallize-product-storytelling.webp',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@768/crystallize-product-storytelling.jpeg',
          width: 768,
          key:
            'crystallize_marketing/22/9/19/1/@768/crystallize-product-storytelling.jpeg',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@1024/crystallize-product-storytelling.avif',
          width: 1024,
          key:
            'crystallize_marketing/22/9/19/1/@1024/crystallize-product-storytelling.avif',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@1024/crystallize-product-storytelling.webp',
          width: 1024,
          key:
            'crystallize_marketing/22/9/19/1/@1024/crystallize-product-storytelling.webp',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@1024/crystallize-product-storytelling.jpeg',
          width: 1024,
          key:
            'crystallize_marketing/22/9/19/1/@1024/crystallize-product-storytelling.jpeg',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@1366/crystallize-product-storytelling.avif',
          width: 1366,
          key:
            'crystallize_marketing/22/9/19/1/@1366/crystallize-product-storytelling.avif',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@1366/crystallize-product-storytelling.webp',
          width: 1366,
          key:
            'crystallize_marketing/22/9/19/1/@1366/crystallize-product-storytelling.webp',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@1366/crystallize-product-storytelling.jpeg',
          width: 1366,
          key:
            'crystallize_marketing/22/9/19/1/@1366/crystallize-product-storytelling.jpeg',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@1600/crystallize-product-storytelling.avif',
          width: 1600,
          key:
            'crystallize_marketing/22/9/19/1/@1600/crystallize-product-storytelling.avif',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@1600/crystallize-product-storytelling.webp',
          width: 1600,
          key:
            'crystallize_marketing/22/9/19/1/@1600/crystallize-product-storytelling.webp',
        },
        {
          url:
            'https://media.crystallize.com/crystallize_marketing/22/9/19/1/@1600/crystallize-product-storytelling.jpeg',
          width: 1600,
          key:
            'crystallize_marketing/22/9/19/1/@1600/crystallize-product-storytelling.jpeg',
        },
      ],
    },
  ],
};

const Template: Story<Props> = (args) => (
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

export const WithNativeReactImageProps = Template.bind({});
WithNativeReactImageProps.args = {
  ...videoModel,
  thumbnails: [
    {
      url:
        'https://media.crystallize.com/crystallize_marketing/22/9/19/1/crystallize-product-storytelling.jpg',
      _availableSizes: [100, 200, 500, 768],
      _availableFormats: ['webp', 'jpeg'],
    },
  ],
};

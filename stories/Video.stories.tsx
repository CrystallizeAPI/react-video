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

const thumbnails = [
  {
    url:
      'https://media.crystallize.com/hkn-demo/21/3/3/3/playground-feedback.png',
    altText: 'Screenshot of GraphQL playground',
    key: 'hkn-demo/21/3/3/3/playground-feedback.png',
    variants: [
      {
        url:
          'https://media.crystallize.com/hkn-demo/21/3/3/3/@100/playground-feedback.webp',
        width: 100,
        height: 50,
        key: 'hkn-demo/21/3/3/3/@100/playground-feedback.webp',
      },
      {
        url:
          'https://media.crystallize.com/hkn-demo/21/3/3/3/@100/playground-feedback.png',
        width: 100,
        height: 50,
        key: 'hkn-demo/21/3/3/3/@100/playground-feedback.png',
      },
      {
        url:
          'https://media.crystallize.com/hkn-demo/21/3/3/3/@200/playground-feedback.webp',
        width: 200,
        height: 100,
        key: 'hkn-demo/21/3/3/3/@200/playground-feedback.webp',
      },
      {
        url:
          'https://media.crystallize.com/hkn-demo/21/3/3/3/@200/playground-feedback.png',
        width: 200,
        height: 100,
        key: 'hkn-demo/21/3/3/3/@200/playground-feedback.png',
      },
      {
        url:
          'https://media.crystallize.com/hkn-demo/21/3/3/3/@500/playground-feedback.webp',
        width: 500,
        height: 250,
        key: 'hkn-demo/21/3/3/3/@500/playground-feedback.webp',
      },
      {
        url:
          'https://media.crystallize.com/hkn-demo/21/3/3/3/@500/playground-feedback.png',
        width: 500,
        height: 250,
        key: 'hkn-demo/21/3/3/3/@500/playground-feedback.png',
      },
      {
        url:
          'https://media.crystallize.com/hkn-demo/21/3/3/3/@768/playground-feedback.webp',
        width: 768,
        height: 383,
        key: 'hkn-demo/21/3/3/3/@768/playground-feedback.webp',
      },
      {
        url:
          'https://media.crystallize.com/hkn-demo/21/3/3/3/@768/playground-feedback.png',
        width: 768,
        height: 383,
        key: 'hkn-demo/21/3/3/3/@768/playground-feedback.png',
      },
      {
        url:
          'https://media.crystallize.com/hkn-demo/21/3/3/3/@1024/playground-feedback.webp',
        width: 1024,
        height: 511,
        key: 'hkn-demo/21/3/3/3/@1024/playground-feedback.webp',
      },
      {
        url:
          'https://media.crystallize.com/hkn-demo/21/3/3/3/@1024/playground-feedback.png',
        width: 1024,
        height: 511,
        key: 'hkn-demo/21/3/3/3/@1024/playground-feedback.png',
      },
      {
        url:
          'https://media.crystallize.com/hkn-demo/21/3/3/3/@1366/playground-feedback.webp',
        width: 1366,
        height: 682,
        key: 'hkn-demo/21/3/3/3/@1366/playground-feedback.webp',
      },
      {
        url:
          'https://media.crystallize.com/hkn-demo/21/3/3/3/@1366/playground-feedback.png',
        width: 1366,
        height: 682,
        key: 'hkn-demo/21/3/3/3/@1366/playground-feedback.png',
      },
    ],
  },
];

const Template: Story<Props> = args => <Video {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  playlists: [
    'https://media.crystallize.com/hkn-demo/21/3/3/1/playground-feedback/cmaf/playground-feedback.mpd',
    'https://media.crystallize.com/hkn-demo/21/3/3/1/playground-feedback/cmaf/playground-feedback.m3u8',
  ],
  thumbnails,
};

export const WithoutThumbnail = Template.bind({});

WithoutThumbnail.args = {
  playlists: [
    'https://media.crystallize.com/hkn-demo/21/3/3/1/playground-feedback/cmaf/playground-feedback.mpd',
    'https://media.crystallize.com/hkn-demo/21/3/3/1/playground-feedback/cmaf/playground-feedback.m3u8',
  ],
};

export const LoopAndNoControls = Template.bind({});

LoopAndNoControls.args = {
  autoPlay: true,
  loop: true,
  controls: false,
  playlists: [
    'https://media.crystallize.com/hkn-demo/21/3/3/1/playground-feedback/cmaf/playground-feedback.mpd',
    'https://media.crystallize.com/hkn-demo/21/3/3/1/playground-feedback/cmaf/playground-feedback.m3u8',
  ],
  thumbnails,
};

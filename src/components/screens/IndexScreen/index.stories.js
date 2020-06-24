import React from 'react';
import IndexScreen from './index';

export default {
  component: IndexScreen,
  title: 'Screens/IndexScreen/index',
};

export const Basic = args => <IndexScreen {...args} />;
Basic.storyName = 'default';
Basic.args = {
  data: {
    allEditionsChapters: {
      edges: [
        {
          node: {
            fields: {
              slug: '/guide',
            },
          },
        },
        {
          node: {
            fields: {
              slug: '/en/guide',
            },
          },
        },
      ],
    },
    guides: {
      edges: [
        {
          node: {
            frontmatter: {
              description: 'This is the guide description that explains what you find in the guide',
              title: 'Guide title',
              themeColor: '#6F2CAC',
              thumbImagePath: '/guide-thumb/intro.svg',
            },
            fields: {
              guide: 'guide',
              slug: '/guide',
            },
          },
        },
      ],
    },
    chapters: {
      edges: [
        {
          node: {
            fields: {
              guide: 'guide',
            },
          },
        },
        {
          node: {
            fields: {
              guide: 'guide',
            },
          },
        },
      ],
    },
  },
};

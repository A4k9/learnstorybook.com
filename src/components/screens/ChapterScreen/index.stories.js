import React from 'react';
import Chapter from './index';

export default {
  component: Chapter,
  title: 'Screens/ChapterScreen/index',
};
export const Basic = args => <Chapter {...args} />;
Basic.storyName = 'default';
Basic.args = {
  data: {
    currentPage: {
      html: '<div>The html</div>',
      frontmatter: {
        commit: '123456789',
        title: 'Chapter Title',
        description: 'A good chapter',
      },
      fields: {
        chapter: 'chapter-1',
        framework: 'react',
        guide: 'sample-guide',
        language: 'en',
        permalink: 'https://learnstorybook.com/sample-guide',
        slug: '/chapter-slug',
      },
    },
    currentGuide: {
      frontmatter: {
        codeGithubUrl: 'https://github.com',
        languages: ['en'],
        title: 'Guide Title',
        toc: ['chapter-1', 'chapter-2'],
      },
    },
    site: {
      siteMetadata: {
        githubUrl: 'https://github.com',
        contributeUrl: 'https://github.com',
        permalink: 'https://learnstorybook.com',
        title: 'Learn Storybook',
      },
    },
    tocPages: {
      edges: [
        {
          node: {
            frontmatter: {
              title: 'Chapter 1',
              description: 'Chapter 1 description',
            },
            fields: {
              slug: '/chapter-slug',
              chapter: 'chapter-1',
            },
          },
        },
        {
          node: {
            frontmatter: {
              title: 'Chapter 2',
              description: 'Chapter 2 description',
            },
            fields: {
              slug: '/chapter-2-slug',
              chapter: 'chapter-2',
            },
          },
        },
      ],
    },
    translationPages: {
      edges: [
        {
          node: {
            frontmatter: {
              title: 'Chapter 1',
              description: 'Chapter 1 description',
            },
            fields: {
              framework: 'react',
              slug: '/chapter-slug',
              chapter: 'chapter-1',
              language: 'en',
            },
          },
        },
        {
          node: {
            frontmatter: {
              title: 'Chapter 2',
              description: 'Chapter 2 description',
            },
            fields: {
              framework: 'react',
              slug: '/chapter-2-slug',
              chapter: 'chapter-2',
              language: 'en',
            },
          },
        },
      ],
    },
  },
};

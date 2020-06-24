import React from 'react';
import styled from 'styled-components';
import LanguageMenu from './index';

export default {
  component: LanguageMenu,
  decorators: [story => <Wrapper>{story()}</Wrapper>],
  title: 'Screens/ChapterScreen/LanguageMenu',
};
const Wrapper = styled.div`
  padding: 20px;
`;

export const Basic = args => <LanguageMenu {...args} />;
Basic.storyName = 'w/ framework, 1 translation';
Basic.args = {
  chapter: 'chapter',
  contributeUrl: '/contribute',
  firstChapter: 'get-started',
  guide: 'guide',
  language: 'en',
  translationPages: {
    edges: [
      {
        node: {
          fields: {
            framework: 'react',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
    ],
  },
};

export const WithFrameworkTwoTranslations = Basic.bind();
WithFrameworkTwoTranslations.storyName = 'w/ framework, 2 translations';
WithFrameworkTwoTranslations.args = {
  chapter: 'chapter',
  contributeUrl: '/contribute',
  firstChapter: 'get-started',
  guide: 'guide',
  language: 'en',
  translationPages: {
    edges: [
      {
        node: {
          fields: {
            framework: 'react',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
    ],
  },
};
export const WithFiveFrameworksTwoTranslations = Basic.bind();
WithFiveFrameworksTwoTranslations.storyName = 'w/ 5 framework, 2 translations';
WithFiveFrameworksTwoTranslations.args = {
  chapter: 'chapter',
  contributeUrl: '/contribute',
  firstChapter: 'get-started',
  guide: 'guide',
  language: 'en',
  framework: 'react',
  translationPages: {
    edges: [
      {
        node: {
          fields: {
            framework: 'react',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'angular',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'angular',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'vue',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'vue',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'svelte',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'svelte',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react-native',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react-native',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
    ],
  },
};
export const AllFrameworksTwoTranslations = Basic.bind();
AllFrameworksTwoTranslations.storyName = 'w all frameworks, 2 translations';
AllFrameworksTwoTranslations.args = {
  chapter: 'chapter',
  contributeUrl: '/contribute',
  firstChapter: 'get-started',
  guide: 'guide',
  language: 'en',
  framework: 'react',
  translationPages: {
    edges: [
      {
        node: {
          fields: {
            framework: 'react',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'angular',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'angular',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'vue',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'vue',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'svelte',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'svelte',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react-native',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react-native',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'ember',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'ember',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'html',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'html',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'marko',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'marko',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'mithril',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'mithril',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'riot',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'riot',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
    ],
  },
};
export const WithFiveFrameworksAllTranslations = Basic.bind();
WithFiveFrameworksAllTranslations.storyName = 'w/ 5 framework, all translations';
WithFiveFrameworksAllTranslations.args = {
  chapter: 'chapter',
  contributeUrl: '/contribute',
  firstChapter: 'get-started',
  guide: 'guide',
  language: 'en',
  framework: 'react',
  translationPages: {
    edges: [
      {
        node: {
          fields: {
            framework: 'react',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'zh-CN',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'zh-Tw',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'zh-CN',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'pt',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'nl',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'de',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'fr',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'jp',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'tr',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'gr',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'il',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'kr',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'ru',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'bg',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react',
            language: 'it',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'angular',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'angular',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'vue',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'vue',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'svelte',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'svelte',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react-native',
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            framework: 'react-native',
            language: 'es',
            slug: '/chapter',
          },
        },
      },
    ],
  },
};
export const NoFrameworkOneTranslation = Basic.bind();
NoFrameworkOneTranslation.storyName = 'no framework, 1 translation';
NoFrameworkOneTranslation.args = {
  chapter: 'chapter',
  contributeUrl: '/contribute',
  firstChapter: 'get-started',
  guide: 'guide',
  language: 'en',
  translationPages: {
    edges: [
      {
        node: {
          fields: {
            language: 'en',
            slug: '/chapter',
          },
        },
      },
    ],
  },
};
export const NoFrameworkTwoTranslations = Basic.bind();
NoFrameworkTwoTranslations.storyName = 'no framework, 2 translations';
NoFrameworkTwoTranslations.args = {
  chapter: 'chapter',
  contributeUrl: '/contribute',
  firstChapter: 'get-started',
  guide: 'guide',
  language: 'en',
  translationPages: {
    edges: [
      {
        node: {
          fields: {
            language: 'en',
            slug: '/chapter',
          },
        },
      },
      {
        node: {
          fields: {
            language: 'pt',
            slug: '/chapter',
          },
        },
      },
    ],
  },
};

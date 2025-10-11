import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Kaizen for Dev Teams',
  tagline: 'Turning chaos into clarity, one iteration at a time.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Add meta tags to the head
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: 'DF9D42DA352A684F',
      },
    },
  ],

  // Set the production url of your site here
  url: 'https://weiyang115.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/kaizen-for-dev-teams/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'weiyang115', // Usually your GitHub org/user name.
  projectName: 'kaizen-for-dev-teams', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/weiyang115/kaizen-for-dev-teams/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/weiyang115/kaizen-for-dev-teams/tree/master/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Kaizen for Dev Teams',
      logo: {
        alt: 'Kaizen for Dev Teams Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        { to: '/about', label: 'About', position: 'left' },
        {
          href: 'https://github.com/weiyang115/kaizen-for-dev-teams',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            // {
            //   label: 'Best Practices',
            //   to: '/docs/best-practices/git-workflow',
            // },
            // {
            //   label: 'Assessments',
            //   to: '/docs/assessments/joel-test-2025',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/weiyang115/kaizen-for-dev-teams/discussions',
            },
            {
              label: 'Issues',
              href: 'https://github.com/weiyang115/kaizen-for-dev-teams/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/weiyang115/kaizen-for-dev-teams',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kaizen for Dev Teams. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json', 'yaml', 'docker', 'typescript', 'javascript'],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'TOGDI4YFA8',
      // Public API key: it is safe to commit it
      apiKey: 'f65f75fc99b720afccc638e835028861',
      indexName: 'kaizen-for-dev-teams',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push
      // externalUrlRegex: 'external\\.com|domain\\.com',
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },
      // Optional: Algolia search parameters
      // searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

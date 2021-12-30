// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UCGD Core',
  tagline: 'Utah Center for Genetic Discovery Core Facility',
  url: 'https://ucgd.github.io',
  baseUrl: '/Core-Docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'UCGD', // Usually your GitHub org/user name.
  projectName: 'Core-Docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/UCGD/Core-Docs/docs/',
        },
/**
 *
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/UCGD/Core-Docs/blog/',
        },

*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'UCGD Core',
        logo: {
          alt: 'UCGD Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Homepage',
            position: 'left',
            label: 'Documentation',
          },
/** 
 * HERE TO ADD BACK THE BLOG
 * {to: '/blog', label: 'Blog', position: 'left'},
 */
          {
            href: 'https://github.com/UCGD/Core-Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'UCGD Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/Homepage',
              },
            ],
          },
          {
            title: 'UCGD Links', 
            items: [
			  {
                label: 'UCGD Homepage',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'UCGD Github page',
                href: 'https://github.com/UCGD',
              },
              {
		 		label: 'UCGD Core Homepage',
				href: 'https://cores.utah.edu/ucgd/',
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
                href: 'https://github.com/UCGD/Core-Docs',
              },
            ],
          },
        ],
        // * copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`, */
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

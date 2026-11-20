// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UCGD Core',
  tagline: 'Utah Center for Genetic Discovery Core Documentation.',
  url: 'https://ucgd.github.io',
  baseUrl: '/Core-Docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ucgd.png',
  organizationName: 'UCGD', // GitHub org
  projectName: 'Core-Docs', // GitHub repo (deployed to the gh-pages branch)

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap',
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/UCGD/Core-Docs/edit/master/',
        },
        // The template blog posts were never used; turn the blog back on here if needed.
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'UCGD Core',
        hideOnScroll: false,
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
          {to: '/estimators', label: 'Estimators', position: 'left'},
          {
            href: 'https://github.com/UCGD/Core-Docs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Overview', to: '/docs/Homepage'},
              {label: 'Getting started at CHPC', to: '/docs/CHPC_Guide/Getting_Started_at_CHPC'},
              {label: 'UCGD Pipeline', to: '/docs/UCGD-Pipeline/introduction'},
              {label: 'UCGD Cloud', to: '/docs/UCGD-Cloud/version_1'},
            ],
          },
          {
            title: 'Tools',
            items: [
              {label: 'Cost estimators', to: '/estimators'},
              {label: 'Request a UCGD project', href: 'https://mosaic.chpc.utah.edu/#/projects/new'},
              {label: 'Request a user account', href: 'https://redcap.link/ucgd_users'},
            ],
          },
          {
            title: 'UCGD',
            items: [
              {label: 'UCGD homepage', href: 'https://ucgd.genetics.utah.edu/'},
              {label: 'UCGD cores page', href: 'https://cores.utah.edu/ucgd/'},
              {label: 'UCGD on GitHub', href: 'https://github.com/UCGD'},
            ],
          },
          {
            title: 'Contribute',
            items: [
              {label: 'Documentation source', href: 'https://github.com/UCGD/Core-Docs'},
              {label: 'Report an issue', href: 'https://github.com/UCGD/Core-Docs/issues'},
            ],
          },
        ],
        copyright: `Utah Center for Genetic Discovery · University of Utah · ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

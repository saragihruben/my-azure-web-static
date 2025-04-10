const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "MyWiki",
  trailingSlash: false,
  url: "https://white-pebble-0a8b06200.6.azurestaticapps.net/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "saragihruben",
  projectName: "saragihruben.wiki",
  themeConfig: {
  
   
    navbar: {
      title: "MyWiki",
      logo: {
        alt: "SaragihRuben Logo",

        src: "img/logo.png",
      },
      hideOnScroll: true,
      items: [
        {
          type: "doc",
          label: "Documentation",
          docId: "Getting-started/introduction",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Saragih Ruben Logo",
        src: "img/logo_hi.png",
      },
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Saragih Ruben.<br /> Built with <a href="https://docusaurus.io" target="_blank">Docusaurus</a>.`,
    },
    prism: {
      theme: lightTheme,
      additionalLanguages: ["bash", "docker", "json"],
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          //sidebarPath: require.resolve("./sidebars.js"),
          //editUrl: "https://github.com/gotenberg/gotenberg.dev/edit/main/",
          //lastVersion: "current",
          //versions: {
            
          //},
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-Q1MDM8KFVG",
        },
      },
    ],
  ],
  plugins: ["@docusaurus/plugin-ideal-image"],
};

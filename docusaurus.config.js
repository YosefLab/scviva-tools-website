const math = require("remark-math").default;
const katex = require("rehype-katex").default;
const { themes: prismThemes } = require("prism-react-renderer");

module.exports = {
  title: "scVIVA-Tools",
  tagline: "Consolidated spatial transcriptomics analysis toolkit built on scvi-tools",
  url: "https://scviva-tools.org",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
  organizationName: "YosefLab",
  projectName: "scviva-tools-website",
  stylesheets: ["https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"],
  themeConfig: {
    prism: {
      defaultLanguage: "python",
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "scVIVA-Tools",
      logo: {
        alt: "scVIVA-Tools Logo",
        src: "img/logo.png",
      },
      items: [
        { to: "get_started", label: "Get Started", position: "right" },
        {
          label: "Docs",
          position: "right",
          items: [
            {
              label: "Full documentation",
              href: "https://scviva-tools.readthedocs.io/page/index.html",
              target: "_self",
            },
            {
              label: "Tutorials",
              href: "https://scviva-tools.readthedocs.io/page/tutorials/index.html",
              target: "_self",
            },
            {
              label: "User guide",
              href: "https://scviva-tools.readthedocs.io/page/user_guide/index.html",
              target: "_self",
            },
            {
              label: "API reference",
              href: "https://scviva-tools.readthedocs.io/page/api/index.html",
              target: "_self",
            },
          ],
        },
        {
          label: "About",
          position: "right",
          items: [
            { label: "Team", to: "team" },
            { label: "Press", to: "press" },
            { label: "Ecosystem", to: "ecosystem" },
          ],
        },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/YosefLab/scviva-tools/discussions",
          label: "Discussion",
          position: "right",
        },
        {
          href: "https://github.com/YosefLab/scviva-tools",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()}, Yosef Lab, Weizmann Institute of Science. Built with Docusaurus.`,
    },
  },
  plugins: ["docusaurus-plugin-sass"],
  themes: [],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/YosefLab/scviva-tools-website/edit/main/blog/",
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false }]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};

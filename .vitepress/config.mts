import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Resilient Roleplay",
  description: "By the players, for the players.",
  themeConfig: {
    logo: "logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Discord', link: 'https://discord.gg/resilientrp' },
      { text: 'Store', link: 'https://store.resilientrp.net' },
      { text: 'Apply', link: 'https://apply.resilientrp.net' },
    ],

    sidebar: [
      {
        text: 'Home',
        items: [
          { text: 'Rules', link: '/rules/home' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/resilientrp' }
    ]
  }
})

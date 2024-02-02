// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/main.css",
  ],
  alias: {
    assets: "/<rootDir>/assets"
  },
  postcss: {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}
    }
  },
})

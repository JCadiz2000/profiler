// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        style: 'background-color: #240754'
      }
    }
  }
  // ssr: false,
  // ssr: true,
  // hooks: {
  //   "prerender:routes": ({routes}) => {
  //     routes.clear()
  //   }
  // },
  // router: {
  //   options: {
  //     hashMode: true
  //   }
  // }
})

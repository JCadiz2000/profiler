import { Static } from "vue";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  devtools: { enabled: false },
  css:['~/assets/css/main.css'],
  app: {
    baseURL: '/profiler/',
    head: {
      htmlAttrs: {
        style: 'background-color: #1a053c'
      }
    }
  },
  plugins:[
    {
      src: '~/plugins/aos.client.ts',
      mode: 'client'
    }
  ],
  nitro: {
    preset:"github-pages"
  },
  ssr: true
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

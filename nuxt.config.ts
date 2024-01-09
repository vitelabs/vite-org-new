export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['iconify-icon', 'swiper-container', 'swiper-slide'].includes(tag),
    },
  },
  components: [{
    path: '~/components',
    global: true
  }],
  nitro: {
    preset: 'node-server'
  }
})

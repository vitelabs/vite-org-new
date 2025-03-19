export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  target: 'static',
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['iconify-icon', 'swiper-container', 'swiper-slide'].includes(tag),
    },
  },
  components: [{
    path: '~/components',
    global: true
  }],
})

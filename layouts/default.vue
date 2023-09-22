<script setup lang="ts">
import 'iconify-icon';

const desc = `Vite is a zero-fee, lightning-fast blockchain for the decentralized economy. Build Web3 without giving up the free and fast features of Web2.`

useHead({
  title: 'VITE',
  titleTemplate: '%s - Vite: Zero Gas Layer-1',
  meta: [
    { name: 'description', content: desc },
    { name: 'author', content: 'Vite Labs' }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'preload',
      as: 'style',
      href: 'https://fonts.googleapis.com/css?family=Manrope'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Manrope'
    },
  ],
})

const url = useRequestURL();

// SEO 
useSeoMeta({
  title: 'VITE',
  titleTemplate: '%s - Vite: Zero Gas Layer-1',
  ogTitle: '%s - Vite: Zero Gas Layer-1',
  description: desc,
  ogDescription: desc,
  ogImage: `${url.origin}/logo-large.png`,
  ogType: 'website',
  ogUrl: `${url.origin}`,
  twitterCard: 'summary',
  twitterSite: '@vitelabs',
  twitterCreator: '@vitelabs',
  twitterTitle: '%s - Vite: Zero Gas Layer-1',
  twitterDescription: desc,
  twitterImage: `${url.origin}/logo-large.png`,
})

</script>

<template>
  <main>
    <Header />

    <slot />

    <Footer /> 
  </main>
</template>

<style lang="scss">
@use "@/assets/styles/main";
</style>

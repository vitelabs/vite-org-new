<template>
  <main>
    <nuxt />
  </main>
</template>

<script setup lang="ts">
useHead({
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
</script>

<style lang="scss">
@use "@/assets/styles/main.scss";
</style>

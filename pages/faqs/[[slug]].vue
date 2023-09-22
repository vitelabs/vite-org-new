<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <ContentDoc :path="route.path"></ContentDoc>
</template>

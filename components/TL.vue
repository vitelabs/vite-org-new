<script setup lang="ts">

let showMore = ref(true);
function handleShowMore() {
  showMore.value = !showMore.value;
}

</script>

<template>
  <div class="timeline">
    <div class="timeline-body">
      <slot />
    </div>
    <div class="timeline-footer has-text-centered">
      <button v-if="showMore" @click="handleShowMore" class="button is-vite-light">
        <span>More</span>
        <span class="icon">
          <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 0.505737L9.01151 8.49422L0.999999 0.505737" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </span>
      </button>
      <button v-else @click="handleShowMore" class="button is-vite-light">
        <span>Less</span>
        <span class="icon">
          <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8.4942L8.98849 0.505716L17 8.4942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </span>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/styles/main.scss" as m;
.timeline {
  .timeline-body {
    border-left: 1px dashed m.$grey;
    margin-bottom: 20px;
  }
  h3:before {
    display: inline-block;
    content: ' ';
    height: 21px;
    width: 21px;
    background: m.$grey-dark;
    border: 4px solid m.$grey;
    border-radius: 50%;
    transform: translateX(-11px);
  }
  h3 {
    font-size: 20px;
    font-weight: m.$weight_bold;
    line-height: 20px;
    a {
      position: relative;
      top: -4px;
    }
  }
  ul {
    margin: 10px 0;
    padding-left: 38px;
    li:before {
      display: inline-block;
      height: 8px;
      width: 8px;
      content: ' ';
      background: m.$grey-dark;
      border-radius: 50%;
      transform: translate(-10px, -2px);
      margin-left: -8px;
    }
    li {
      margin-bottom: 10px;
    }
  }
}
</style>

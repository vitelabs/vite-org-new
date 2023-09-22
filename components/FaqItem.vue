<script setup lang="ts">
const isOpen = ref(false)

function toggle () {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="faq-item-block">
    <div class="question is-grid is-right-auto" @click="toggle()">
      <!-- <slot name="Q" /> -->
      <ContentSlot :use="$slots.Q" />
      <button class="button button-around is-vite-light">
        <svg v-if="!isOpen" width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 1.25L15 14.75L28.5 1.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <svg v-else width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.5 14.75L15 1.25L1.5 14.75" stroke="#CFD6DF" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
    <div class="answer" :class="{ 'is-hidden': !isOpen}">
      <!-- <slot name="A" /> -->
      <ContentSlot :use="$slots.A" />
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/styles/main.scss" as m;

.faq-item-block {
  &:not(:last-child) {
    padding-bottom: 3rem;
    border-bottom: 1px solid m.$grey;
    margin-bottom: 3rem;

    @include m.mobile {
      padding-bottom: 20px;
      margin-bottom: 20px;
    }
  }

  .question {
    cursor: pointer;
    h3 a{
      color: m.$grey-darker;
      font-size: 1.875rem;
      font-weight: 500;
      line-height: 1.4;
    }
    .is-vite-light {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      padding: 0;
      svg {
        color: m.$grey;
      }
    }

    @include m.mobile {
      h3 a {
        font-size: 18px;
        line-height: 1.5;
      }

      .is-vite-light {
        width: 30px;
        height: 30px;
        border-radius: 15px;

        svg {
          width: 18px;
          height: 18px;
        }
      }
    }
  }

  .answer {
    font-size: 1.25rem;
    line-height: 1.6;
    margin-top: 20px;
    margin-right: 90px;

    p {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    ol, ul {
      padding-left: 1.25rem;
    }
    a {
      color: m.$vite-blue;
      &:hover {
        text-decoration: underline;
      }
    }

    @include m.mobile {
      font-size: 14px;
      margin-right: 0;
    }
  }
}

</style>


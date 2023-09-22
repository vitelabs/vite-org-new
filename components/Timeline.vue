<script setup lang="ts">

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  show: {
    type: Number,
    default: 1,
    range: {
      min: 1,
      max: 3,
    },
  }
});

const data = await queryContent(props.path).findOne()

let isShowAll = ref(false);
function handleShowMore() {
  isShowAll.value = !isShowAll.value;
}

</script>

<template>
  <div class="timeline" :class="data.title?.toLowerCase()">
    <ContentRenderer :value="data">
      <div class="timeline-header is-grid">
        <img v-if="data.title === 'Completed'" src="../assets/images/icons/icon-completed.svg" alt="icon completed" />
        <img v-else-if="data.title === 'Ongoing'" src="../assets/images/icons/icon-ongoing.svg" alt="icon ongoing" />
        <img v-else src="../assets/images/icons/icon-future.svg" alt="icon future" />
        <h1 class="is-size-3 has-text-weight-bold">{{ data.title }}</h1>
      </div>
      <div class="timeline-body" :class="{'show-all': isShowAll, [`show-${props.show}`]: true}">
        <ContentRendererMarkdown :value="data" />
      </div>
    </ContentRenderer>
    <div class="timeline-footer has-text-centered">
      <button v-if="isShowAll" @click="handleShowMore" class="button is-vite-light">
        <span>Less</span>
        <span class="icon">
          <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8.4942L8.98849 0.505716L17 8.4942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </button>
      <button v-else @click="handleShowMore" class="button is-vite-light">
        <span>More</span>
        <span class="icon">
          <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 0.505737L9.01151 8.49422L0.999999 0.505737" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/styles/main.scss" as m;

.timeline {
  padding: 30px;

  @include m.mobile {
    padding: 20px 10px;
  }

  .timeline-header {
    grid-template-columns: auto 1fr;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;
    color: m.$grey-darker;
  }

  .timeline-body {
    border-left: 1px dashed m.$grey;
    margin-bottom: 20px;
    margin-left: 10px;

    &.show-1 {
      > div > * {
        display: none;
        &:nth-child(-n + 2) {
          display: block;
        }
      }
    }
    &.show-2 {
      > div > * {
        display: none;
        &:nth-child(-n + 4) {
          display: block;
        }
      }
    }
    &.show-3 {
      > div > * {
        display: none;
        &:nth-child(-n + 6) {
          display: block;
        }
      }
    }

    &.show-all {
      > div > * {
        display: block;
      }
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
        color: m.$grey-darker;
      }
    }
    ul {
      margin: 10px 0 22px;
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
        a {
          color: m.$vite-blue;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  &.ongoing {
    background: #F5FAFF;
    border-radius: 32px;
    .timeline-body {
      border-color: m.$vite-blue;
    }
    h3:before {
      background: m.$vite-blue;
      border-color: #AAE9FF;
    }
  }
  &.future {
    .timeline-body {
      border-color: #00FF95;
    }
    h3:before {
      background: #00FF95;
      border-color: #B4FFE0;
    }

  }

}
</style>

<script setup lang="ts">
useHead({
  title: "FAQs",
})

const route = useRoute()

const links = [
  {
    name: "Most Commonly Asked",
    path: "/faqs",
  },
  {
    name: "Tech Specific",
    path: "/faqs/tech",
  },
]

</script>

<template>
  <section class="container is-max-widescreen faqs">
    <h1 class="title">
      <NuxtLink to="/faqs">FQAs</NuxtLink>
    </h1>
    <div class="tabs is-large is-boxed mb-0">
      <ul>
        <li v-for="link in links" :key="link.path" :class="{ 'is-active': route.path === link.path }">
          <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="tabs-block" :class="{
      'is-top-left-radiusless': route.path === links[0].path,
      'is-top-right-radiusless': route.path === links[1].path
    }">
      <NuxtPage />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/main.scss" as *;

.faqs {
  margin-bottom: 120px;

  @include addPaddingInTouch;

  @include mobile {
    margin-bottom: 60px;
  }
}

.title {
  font-size: 72px;
  font-weight: $weight-bold;
  line-height: 1.3;
  margin: 120px 0 50px;
  a {
    color: $grey-darker;
  }

  @include mobile {
    margin: 20px 0;
    font-size: 44px;
  }
}

.tabs.is-boxed {
  position: relative;
  top: 1px;
  ul {
    border-bottom: none;
    li {
      a {
        font-size: 1.875rem;
        font-weight: $weight-bold;
        padding: 2.5rem 3.75rem 1.5rem;
      }
      &:not(.is-active) {
        a:hover {
          background: transparent;
        }
      }
    }
  }

  @include mobile {
    ul li {
      width: 178px;
      a {
        font-size: 18px;
        font-weight: 500;
        padding: 20px;
        white-space: normal;
        height: 94px;
      }
    }
  }
}

.tabs-block {
  border: 1px solid $grey;
  border-radius: 32px;
  padding: 60px;
  &.is-top-left-radiusless {
    border-top-left-radius: 0;
  }

  @include mobile {
    padding: 20px;
    border-radius: 24px;
    &.is-top-right-radiusless {
      border-top-right-radius: 6px;
    }
  }
}
</style>

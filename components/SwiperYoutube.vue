<script setup lang="ts">
import mobile from 'is-mobile';
// import function to register Swiper custom elements
import { SwiperContainer, register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

useHead({
  script: [
    {
      src: 'https://www.youtube.com/iframe_api',
      async: true,
      defer: true,
    },
  ]
})

interface Props {
  list: {
    title: string;
    desc: string;
    src: string;
  }[];
}

const props = defineProps<Props>();

const players = new Map();

function handleProgress(event: any) {
  const [swiper, idx] = event.detail;
  if (!players.get(idx)) {
    setTimeout(() => {
      try {
        players.set(idx, new window.YT.Player(swiper.slides[idx].querySelector('iframe')))
      } catch (e) {
        /* handle error */
      }
    }, 300);
  }
}

function handleChange() {
  for (const player of players.values()) {
    if (player.getPlayerState() === 1) {
      player.pauseVideo();
    }
  }
}
const swiperEl = ref<SwiperContainer | null>(null);

onMounted(() => {
  let params;
  if (mobile()) {
    params = {
      // array with CSS styles
      injectStyles: [
        `
        .swiper-button-prev,
        .swiper-button-next {
          color: #00BEFF;
          top: 22%;
          height: 24px;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 24px;
        }
        `,
      ],
    };

  } else {
    params = {
      // array with CSS styles
      injectStyles: [
        `
        .swiper-button-prev,
        .swiper-button-next {
          color: #00BEFF;
          top: 42%;
          padding: 15px 25px;
        }
        `,
      ],
    };
  }
  Object.assign(swiperEl.value!, params);

  swiperEl.value!.initialize();
}) 

</script>

<template>
  <swiper-container ref="swiperEl" navigation="true" init="false" @progress="handleProgress" @slidechange="handleChange">
    <swiper-slide v-for="item of props.list" :key="item.id">
      <iframe class="yt-iframe" width="100%" :src="item.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="yt-metadata">
        <h3>{{ item.title }}</h3>
        <p>{{  item.desc }}</p>
      </div>
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/main.scss" as *;

.yt-iframe {
  border-radius: 2rem;
  margin-bottom: 2.5rem;
  height: 630px;
}

.yt-metadata {
  h3 {
    font-size: 2rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.6;
  }
}

@include mobile {
  .yt-iframe {
    height: 160px;
    border-radius: 0;
    margin-bottom: 20px;
  }

  .yt-metadata {
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }

}
</style>

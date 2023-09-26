<script setup lang="ts">
import { SwiperContainer, register } from 'swiper/element/bundle';
import mobile from 'is-mobile';

useHead({
  title: 'Home',
})

const isMobile = mobile();

const links = await queryContent('/links').findOne()

const news = reactive<any>([]);

onMounted(async () => {
  try {
    const resp = await fetch(links.news.api);
    const data = await resp.json();
    let n = 9;
    if (isMobile) {
      n = 5;
    }

    if (data) {
      const found = data.tags?.find((x: any) => x.tag === 'news');
      if (found) {
        const list = found.list.slice(0, n).map((x: any) => {
          const d = new Date(x.createTime * 1000);
          return {
            date: d.toLocaleDateString(),
            img: x.bannerUrl.replace(/\s/ig, ''),
            url: x.skipUrl,
            title: x.title,
          }
        });
        news.push(...list);
      }
    }
  } catch (e) {
    console.log(e);
    /* handle error */
  }
})


// It's easy to use swiper element(webCompenent) directly.
// https://swiperjs.com/element
register();
const swiperEl = ref<SwiperContainer | null>(null);
const prevEl = ref<HTMLElement | null>(null);
const nextEl = ref<HTMLElement | null>(null);
const slidesPreView = ref(3);

if (isMobile) {
  slidesPreView.value = 1;
}

onMounted(() => {
  let bottom = '90px';

  if (isMobile) {
    bottom = '40px';
  }

  const params = {
    injectStyles: [`
      .swiper-wrapper {
        padding-bottom: ${bottom};
      }

      .swiper-pagination {
        bottom: 0 !important;
      }

      .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        background: #F5FAFF;
        border: 1px solid #2D4665;
      }

      .swiper-pagination-bullet-active {
        background: #fff;
        border: 1px solid #CFD6DF;
        position: relative;
        top: 5px;
        width: 30px;
        height: 30px;
      }
    `],
    pagination: {
      clickable: true,
    },
    navigation: {
      prevEl: prevEl.value!,
      nextEl: nextEl.value!,
    },
  }

  Object.assign(swiperEl.value!, params);

  swiperEl.value!.initialize();
}) 

</script>

<template>
  <div class="home-page">
    <section class="container is-max-widescreen intro">
      <div class="is-grid">
        <div class="vite-hero">
          <h1 class="title">ZERO GAS LAYER-1</h1>
          <figure class="image only-mobile">
            <img src="../assets/images/home/intro.svg" alt="ZERO GAS LAYER-1" />
          </figure>
          <p class="desc">Vite is a zero-fee, lightning-fast blockchain for the decentralized economy. Build Web3 without giving up the free and fast features of Web2.</p>
          <div class="buttons">
            <a target="_blank" :href="links.developer.viteDAO" class="button is-medium is-vite-dark">Vite DAO</a>
            <a target="_blank" :href="links.developer.vuilderDAO" class="button is-medium is-vite-light">Contribute</a>
            <a target="_blank" :href="links.whitePaper.english" class="button is-medium is-vite-light">Vite White Paper</a>
          </div>
        </div>
        <figure class="image except-mobile">
          <img src="../assets/images/home/intro.svg" alt="ZERO GAS LAYER-1" />
        </figure>
      </div>
      <div class="ellipse-left"></div>
      <div class="ellipse-right"></div>
    </section>

    <section class="container is-max-widescreen vite-hero build-with-vite">
      <h1 class="title">Build with Vite</h1>
      <p class="desc">Vite's DAG-based smart contract blockchain provides zero-fee and lightning speed transactions while maintaining compatibility with EVM.</p>

      <div class="is-grid">
        <div class="vite-card a">
          <div>
            <img src="../assets/images/home/icon-cost.svg" alt="Completely Free" />
            <h3 class="title">Completely Free</h3>
            <p class="is-size-5">Users lock $VITE to obtain Quota (network resources, for transactions with zero gas spent).</p>
          </div>
          <img class="zero" src="../assets/images/home/zero.svg" alt="Completely Free">
        </div>
        <div class="vite-card b">
          <img src="../assets/images/home/icon-lightning.svg" alt="Lightning Fast" />
          <h3 class="title">Lightning Fast</h3>
          <p class="is-size-5">Vite’s DAG ledger and consensus mechanism allow instant finality.</p>
        </div>
        <div class="vite-card c">
          <img src="../assets/images/home/icon-cross.svg" alt="Cross Chain" />
          <h3 class="title">Cross-Chain</h3>
          <p class="is-size-5">Easy asset transfer between any two chains in a trustless manner.</p>
        </div>
        <div class="vite-card d">
          <img src="../assets/images/home/icon-eco.svg" alt="Eco Friendly" />
          <h3 class="title">Eco-Friendly</h3>
          <p class="is-size-5">Extremely low carbon footprint thanks to our consensus algorithm.</p>
        </div>
        <div class="vite-card e">
          <img src="../assets/images/home/icon-solidity.svg" alt="Solidity Compatible" />
          <h3 class="title">Solidity Compatible</h3>
          <p class="is-size-5">Supports Solidity and Vite’s proprietary Solidity++, an asynchronous smart contract language.</p>
        </div>
      </div>
    </section>

    <section class="container vite-bridge">
      <div class="ellipse-top-left"></div>
      <div class="ellipse-top-right"></div>
      <div class="ellipse-bottom-left"></div>
      <div class="ellipse-bottom-right"></div>

      <div class="container is-max-widescreen vite-hero">
        <h1 class="title is-spaced">ViteBridge</h1>
        <h2 class="subtitle">Bridging Every Blockchain in a Multi-Chain Future</h2>
        <p class="desc">ViteBridge is a generic and decentralized cross-chain transfer protocol to bridge all blockchains. ViteBridge will allow unconstrained transfer of information and value between heterogeneous ecosystems, and push our industry towards more openness and interoperability.</p>
        <div class="buttons">
          <a :href="links.viteBridge.whitePaper" target="_blank" class="button is-medium is-vite-dark">ViteBridge White Paper</a>
          <a :href="links.viteBridge.tutorial" target="_blank" class="button is-medium is-vite-light">Tutorials</a>
          <a :href="links.viteBridge.tryit" target="_blank" class="button is-medium is-vite-light">Test ViteBridge</a>
        </div>
      </div>
    </section>

    <div class="container is-max-widescreen vite-bridge-img">
      <img class="except-mobile" src="../assets/images/home/vite-bridge.svg" alt="vite bridge" />
      <img class="only-mobile" src="../assets/images/home/vite-bridge-m.svg" alt="vite bridge" />
    </div>

    <section class="container is-max-widescreen is-grid vitex">
      <div class="vite-hero">
        <h1 class="title is-spaced">ViteX</h1>
        <h2 class="subtitle">High Performance Order-Book Decentralized Exchange</h2>
        <figure class="image only-mobile">
          <img srcset="
            ../assets/images/home/vitex@2x.png 2x,
            ../assets/images/home/vitex.png 1x"
            src="../assets/images/home/vitex.png" alt="Vite Decentralized Exchange">
        </figure>
        <p class="desc">ViteX is the world's first decentralized exchange built  on DAG (Directed Acyclic Graph). It is a cross-chain DEX  that offers a fast, secure and smooth trading experience with zero gas fee.Trade and earn the platform token VX  at the same time. VX stakers get to share 100% of the trading fees collected on the platform. List your trading pairs permissionlessly. No KYC. Your information only stays with you.</p>
        <div class="buttons">
          <a target="_blank" :href="links.vitex.home" class="button is-medium is-vite-dark">Trade on Vitex</a>
          <a target="_blank" :href="links.vitex.mine" class="button is-medium is-vite-dark">Mine VX</a>
          <a target="_blank" :href="links.vitex.DAO" class="button is-medium is-vite-light">ViteX DAO</a>
        </div>
      </div>
      <figure class="image except-mobile">
        <img srcset="
          ../assets/images/home/vitex@2x.png 2x,
          ../assets/images/home/vitex.png 1x"
          src="../assets/images/home/vitex.png" alt="Vite Decentralized Exchange">
      </figure>
    </section>

    <section class="container news">
      <div class="container is-max-widescreen vite-hero">
        <h1 class="title is-grid">
          <span>News & Events</span>
          <a :href="links.news.home" target="_blank" class="button is-medium is-vite-light except-mobile">View more news</a>
        </h1>
        <swiper-container
          ref="swiperEl"
          init="false"
          class="swiper"
          navigation="true"
          pagination="true"
          :slides-per-view="slidesPreView"
          :slides-per-group="slidesPreView"
          space-between="48"
        >
          <swiper-slide class="swiper-slide" v-for="item of news" :key="item.id">
            <a :href="item.url"><img :src="item.img" :alt="item.title" /></a>
            <p class="date">{{ item.date }}</p>
            <h3 class="is-size-4 has-text-weight-bold"><a :href="item.url">{{item.title}}</a></h3>
          </swiper-slide>
        </swiper-container>
      </div>
      <button ref="prevEl" class="button is-vite-light swiper-prev except-mobile">
        <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.5079 37.7343L18.8004 32.0268L24.5079 26.3028" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M44.8379 32.0268L19.5241 32.0268" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button ref="nextEl" class="button is-vite-light swiper-next except-mobile">
        <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M39.4922 26.3028L45.1997 32.0103L39.4922 37.7343" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.1622 32.0103H44.476" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <div class="only-mobile has-text-centered">
        <a :href="links.news.home" target="_blank" class="button is-medium is-vite-light">View more news</a>
      </div>
    </section>

    <section class="container is-max-widescreen vite-hero roadmap">
      <h1 class="title has-text-centered">Roadmap</h1>
      <div class="columns">
        <div class="column">
          <Timeline path="/roadmap/completed" />
        </div>
        <div class="column">
          <Timeline path="/roadmap/ongoing"/>
        </div>
        <div class="column">
          <Timeline path="/roadmap/future"/>
        </div>
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/main.scss" as *;

.intro {
  padding: 100px 0 185px;
  position: relative;
  overflow: hidden;

  .ellipse-left {
    @include ellipse;
    bottom: -590px;
    left: 0;

    background: $vite-bg-blue;
  }

  .ellipse-right {
    @include ellipse;
    bottom: -590px;
    right: 0;

    background: $vite-bg-green;
  }

  .vite-hero {
    margin-top: 110px;

    .title {
      font-size: 4.5rem;
      margin-bottom: 1.25rem;
    }

    .desc {
      font-size: 1.875rem;
      margin-bottom: 210px;
      margin-right: 240px;
    }
  }

  .is-grid {
    grid-template-columns: 1fr 286px;
  }

  @include addPaddingInTouch;

  @include mobile {
    padding: 20px 1rem 60px;

    .ellipse-left {
      bottom: -210px;
      left: -5%;
    }

    .ellipse-right {
      bottom: -210px;
      right: -5%;
    }

    .is-grid {
      grid-template-columns: none;

      .vite-hero {
        margin-top: 0;

        .title {
          font-size: 44px;
          padding-right: 1rem;
          margin-bottom: 20px;
        }

        .desc {
          margin-right: 0;
          font-size: 18px;
          margin-bottom: 20px;
        }
      }

      .image {
        width: 200px;
        margin: 0 auto 30px;
      }

    }
  }

}

.build-with-vite {
  padding: 120px 0;
  @include addPaddingInTouch;

  .vite-card {
    grid-template-rows: 114px 50px 1fr;
    
    .title {
      white-space: nowrap;
    }

    @include touch {
      .title {
        font-size: 24px;
      }
    }
  }

  .is-grid {
    margin-top: 60px;
    grid-template-areas: 
      "a a b"
      "c d e";
  }

  .a {
    grid-area: a;
    background: $vite-blue-green;
    border: none;
    h3, p {
      color: #fff;
    }
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    column-gap: 10px;
    padding-bottom: 0;
    .title {
      margin-top: 30px;
      margin-bottom: 10px;
    }
    .zero {
      margin-top: 50px;
    }
  }
  .b {
    grid-area: b;
  }
  .c {
    grid-area: c;
  }
  .d {
    grid-area: d;
  }
  .e {
    grid-area: e;
  }

  @include mobile {
    padding: 60px 1rem;

    .is-grid {
      margin-top: 20px;
      grid-template-areas: none;
      gap: 20px;
    }

    .a,
    .b,
    .c,
    .d,
    .e {
      grid-area: unset;
    }

    .a {
      grid-template-columns: unset;
      grid-template-rows: unset;
      .zero {
        margin-top: 23px;
      }
    }
  }
}

.vite-bridge {
  position: relative;
  overflow: hidden;
  padding: 120px 32px 360px;
  border-radius: 32px;

  .ellipse-top-left {
    @include ellipse;
    width: 700px;
    height: 700px;
    top: -55%;
    left: -7%;
    background: $vite-bg-green;
  }

  .ellipse-top-right {
    @include ellipse;
    width: 700px;
    height: 700px;
    top: -55%;
    right: -7%;
    background: $vite-bg-blue;
  }

  .ellipse-bottom-left {
    @include ellipse;
    width: 700px;
    height: 700px;
    bottom: -48%;
    left: -7%;

    background: $vite-bg-blue;
  }

  .ellipse-bottom-right {
    @include ellipse;
    width: 700px;
    height: 700px;
    bottom: -48%;
    right: -7%;
    background: $vite-bg-green;
  }

  .buttons {
    margin-top: 60px;
  }

  @include mobile {
    padding: 60px 1rem 360px;
    border-radius: 0;

    .ellipse-top-right,
    .ellipse-bottom-right {
      display: none;
    }
    .ellipse-top-left,
    .ellipse-bottom-left {
      width: 900px;
      height: 900px;
      left: -50%;
    }
    .ellipse-top-left {
      top: -80%;
    }

    .ellipse-bottom-left {
      bottom: -50%;
    }
    
    .buttons {
      margin-top: 0;
    }
  }
}

.vite-bridge-img {
  margin-top: -270px;
  padding: 37px 0;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #FFFFFF;
  box-shadow: 22px 23px 31px rgba(32, 32, 44, 0.08), 5px 6px 17px rgba(32, 32, 44, 0.09);
  border-radius: 32px;

  @include touch {
    margin: -340px 1rem 0;
    padding: 30px 26px;
  }
}

.vitex {
  grid-template-columns: 1fr auto;
  padding: 120px 0;
  @include addPaddingInTouch;

  .vite-hero .desc {
    margin-bottom: 60px;
    margin-right: 110px;
  }

  @include mobile {
    padding: 60px 1rem;
    grid-template-columns: unset;

    .vite-hero {
      .desc {
        margin: 0 0 20px;
      }
    }
  }
}

.news {
  position: relative;
  padding: 100px 32px;
  background: #F5FAFF;
  border-radius: 32px;

  .vite-hero .title {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 60px;
  }

  .date {
    margin: 10px 0 5px;
  }

  .swiper-prev,
  .swiper-next {
    position: absolute;
    top: 50%;
    width: 64px;
    height: 64px;
    padding: 0;
    border-radius: 50%;
  }
  .swiper-prev {
    left: 50px;
  }
  .swiper-next {
    right: 50px;
  }

  @include mobile {
    padding: 60px 1rem;
    border-radius: 0;
    .vite-hero .title {
      grid-template-columns: unset;
      margin-bottom: 20px;
    }

    .only-mobile {
      margin-top: 20px;
    }
  }
}

.roadmap {
  padding: 120px 0 108px;

  &.vite-hero .title {
    margin-bottom: 50px;
  }

  @include mobile {
    padding: 60px 1rem;

    &.vite-hero .title {
      margin-bottom: 20px;
    }
  }
}

</style>

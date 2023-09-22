<script setup lang="ts">
import * as echarts from 'echarts';

import dotGrey from '../assets/images/community/dot-grey.svg';
import dotBlue from '../assets/images/community/dot-blue.svg';

useHead({
  title: 'Community',
})

// youtube video
const showFrame = ref(false);
const video ='<iframe width="100%" height="630" src="https://www.youtube.com/embed/s_hxkBMizgM?si=z3RBASC6rWOnhqlk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'


// telegrame map
interface OB {
  [index: string]: string;
}
const LanguageWithTelegram: OB = {
  English: 'https://t.me/vite_en',
  Chinese: 'https://t.me/vite_zh',
  Russian: 'https://t.me/vite_russian',
  Japanese: 'https://t.me/vite_japanese',
  Vietnamese: 'https://t.me/vite_vietnamese',
  Arabic: 'https://t.me/vite_arabic',
  German: 'https://t.me/vite_german',
  Turkish: 'https://t.me/vite_turkish',
  Indonesian: 'https://t.me/vite_indonesian',
  Portugese: 'https://t.me/vite_portuguese',
  Filipino: 'https://t.me/vite_filipino',
  French: 'https://t.me/vite_french',
  Spanish: 'https://t.me/vitespanish',
  Hindi: 'https://t.me/vite_india',
}

interface OA {
  [index: string]: string[];
}

const LanguageWithCountry: OA = {
  Chinese: ['China'],
  Russian: [
    'Russia',
    'Belarus',
    'South Ossetia',
    'Transnistria',
  ],
  Japanese: [ 'Japan' ],
  Vietnamese: [ 'Vietnam' ],
  Arabic: [
    'Algeria',
    'Bahrain',
    'Chad',
    'Comoros',
    'Djibouti',
    'Egypt',
    'Iraq',
    'Jordan',
    'Kuwait',
    'Lebanon',
    'Libya',
    'Mauritania',
    'Morocco',
    'Oman',
    'Palestineb',
    'Qatar',
    'Saudi Arabia',
    'Somalia',
    'Sudan',
    'Syria',
    'Tunisia',
    'United Arab Emirates',
    'Yemen',
  ],
  German: [
    'Germany',
    'Liechtenstein',
  ],
  Turkish: [
    'Turkey',
    'Northern Cyprus',
    'Cyprwus',
  ],
  Indonesian: [
    'Indonesia',
  ],
  Portugese: [
    'Brazil',
    'Portugal',
    'Angola',
    'Cape Verde',
    'Guinea-Bissau',
    'Mozambique',
    'São Tomé and Príncipe',
    'East Timor',
    'Macau',
  ],
  Filipino: [
    'Philippines',
  ],
  French: [
    'Benin',
    'Burkina Faso',
    'Congo',
    'DR Congo',
    'Ivory Coast',
    'France',
    'Gabon',
    'Guinea',
    'Mali',
    'Monaco',
    'Niger',
    'Senegal',
    'Togo',
    'Belgium',
    'Burundi',
    'Cameroon',
    'Chad',
    'Central African Republic',
    'Comoros',
    'Djibouti',
    'Equatorial Guinea',
    'Haiti',
    'Luxembourg',
    'Madagascar',
    'Rwanda',
    'Seychelles',
    'Switzerland',
    'Vanuatu',
  ],
  Spanish: [
    'Mexico',
    'Colombia',
    'Spain',
    'Argentina',
    'Peru',
    'Venezuela',
    'Chile',
    'Guatemala',
    'Ecuador',
    'Bolivia',
    'Cuba',
    'Dominican Republic',
    'Honduras',
    'Paraguay',
    'El Salvador',
    'Nicaragua',
    'Costa Rica',
    'Panama',
    'Uruguay',
  ],
  Hindi: [
    'India',
  ],
}

function getTelegramLink(countryName: string) {
  const idx = Object.values(LanguageWithCountry).findIndex((item) => {
    const found = item.find(x => x == countryName);
    if (found) {
      return true;
    } else {
      return false;
    }
  });
  const language = Object.keys(LanguageWithCountry)[idx];
  const link: string = LanguageWithTelegram[language] || LanguageWithTelegram['English'];
  return {
    language,
    link,
  }
}

function handleMap(params: any) {
  const { link } = getTelegramLink(params.name);
  window.open(link, '_blank');
}

const mapEl = ref<HTMLElement | null>(null);
const worldmap = await queryContent('/worldmap').findOne();
// console.log(worldmap);
echarts.registerMap("world", {
  type: "FeatureCollection",
  features: worldmap.features,
});

onMounted(() => {
  const chart = echarts.init(mapEl.value);
  chart.setOption({
    tooltip: {
      trigger: 'item',
      backgroundColor: '#fff',
      borderWidth: 0,
      borderRadius: 29,
      padding: [15, 20],
      color: '#007AFF',
      shadowColor: 'hsla(211, 100%, 50%, 0.2)',
      shadowBlur: 10,
      formatter(params: any) {
        const { link } = getTelegramLink(params.name);
        return `<div class='is-flex' style="flex-direction: row-reverse;">
          <span style="padding-left: 10px; font-size: 18px; line-height: 24px; color: #00BEFF;">${link}</span>
            <iconify-icon style="color: #00BEFF" icon="mdi:telegram" width="24" height="24" />
          </div>`
      }
    },
    series: [
      {
        name: 'Vite Telegram Group',
        type: 'map',
        roam: false,
        map: 'world',
        // nameMap: {
        //   'China' : '中国',
        //   'United States of America': 'USA',
        // },
        itemStyle: {
          // areaColor: 'rgba(85,122,198,0.25)',
          areaColor: {
            image: dotGrey,
            repeat: 'repeat',
          },
          borderWidth: 0,
        },
        emphasis: {
          label: {
            show: false,
          },
          itemStyle: {
            areaColor: {
              image: dotBlue,
              repeat: 'repeat',
            },
          }
        },
        select: {
          disabled: true,
        }
      }
    ]
  });
});


</script>

<template>
  <div class="community-page">
    <section class="container is-max-widescreen intro">
      <div class="is-grid">
        <div class="vite-hero">
          <h1 class="title">The #ViteFleet</h1>
          <figure class="image only-mobile">
            <img src="../assets/images/community/intro.svg" alt="community" />
          </figure>
          <p class="desc">Vite's community represents more than 180 countries and regions across the globe, with more than 200,000 users and developers worldwide. Also, our Vite Wallet has more than 20,000 Daily Active Users (DAU).</p>
        </div>
        <figure class="image except-mobile">
          <img src="../assets/images/community/intro.svg" alt="community" />
        </figure>
      </div>
      <div class="ellipse-left"></div>
      <div class="ellipse-right"></div>
    </section>

    <section class="container is-max-widescreen vite-hero greetings">
      <h1 class="title">Greetings from the Global<br />#ViteFleet!</h1>
      <figure v-if="!showFrame" class="video" @click="showFrame = true">
        <img src="../assets/images/community/play-button.svg" alt="play" />
      </figure>
      <div v-html="video" v-show="showFrame"></div>
    </section>

    <section class="tg-map">
      <div class="container is-max-widescreen vite-hero">
        <a href="#tgMap">
          <h1 class="title">Join a Vite Group on Telegram</h1>
        </a>
        <div class="map" ref="mapEl" @click="handleMap"></div>
      </div>
    </section>

    <section class="container is-max-widescreen vite-hero social-media">
      <h1 class="title">Social Media</h1>
      <div class="is-grid">
        <a href="https://twitter.com/vitelabs" target="_blank">
          <div class="vite-card is-flex">
            <div class="logo">
              <iconify-icon class="icon" icon="mdi:twitter" width="48" height="48" />
            </div>
            <div class="desc">
              <h3>Twitter</h3>
              <span>twitter.com/vitelabs</span>
            </div>
          </div>
        </a>
        <a href="https://github.com/vitelabs" target="_blank">
          <div class="vite-card is-flex">
            <div class="logo">
              <iconify-icon class="icon" icon="mdi:github" width="48" height="48" />
            </div>
            <div class="desc">
              <h3>Github</h3>
              <span>github.com/vitelabs</span>
            </div>
          </div>
        </a>
        <a href="https://blockfolio.com/coin/VITE" target="_blank">
          <div class="vite-card is-flex">
            <div class="logo">
              <img class="icon" src="../assets/images/community/blockfolio.svg" />
            </div>
            <div class="desc">
              <h3>Blockfolio</h3>
              <span>blockfolio.com/coin/VITE</span>
            </div>
          </div>
        </a>
        <a href="https://discord.com/invite/CsVY76q" target="_blank">
          <div class="vite-card is-flex">
            <div class="logo">
              <iconify-icon class="icon" icon="mdi:discord" width="48" height="48" />
            </div>
            <div class="desc">
              <h3>Discord</h3>
              <span>discord.com/invite/CsVY76q</span>
            </div>
          </div>
        </a>
        <a href="https://www.reddit.com/r/vitelabs" target="_blank">
          <div class="vite-card is-flex">
            <div class="logo">
              <iconify-icon class="icon" icon="mdi:reddit" width="48" height="48" />
            </div>
            <div class="desc">
              <h3>Reddit</h3>
              <span>reddit.com/r/vitelabs</span>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/channel/UC8qft2rEzBnP9yJOGdsJBVg" target="_blank">
          <div class="vite-card is-flex">
            <div class="logo">
              <iconify-icon class="icon" icon="mdi:youtube" width="48" height="48" />
            </div>
            <div class="desc">
              <h3>Youtube</h3>
              <span>youtube.com/channel/<br />UC8qft2rEzBnP9yJOGdsJBVg</span>
            </div>
          </div>
        </a>
        <a href="https://forum.vite.net" target="_blank">
          <div class="vite-card is-flex">
            <div class="logo">
              <img class="icon" src="../assets/images/community/forum.svg" />
            </div>
            <div class="desc">
              <h3>Forum</h3>
              <span>forum.vite.net</span>
            </div>
          </div>
        </a>
        <a href="https://bitcointalk.org/index.php?topic=5056409" target="_blank">
          <div class="vite-card is-flex">
            <div class="logo">
              <iconify-icon class="icon" icon="mdi:bitcoin" width="48" height="48" />
            </div>
            <div class="desc">
              <h3>BitcoinTalk</h3>
              <span>bitcointalk.org/index.php?topic=5056409</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
@use "@/assets/styles/main.scss" as *;

.intro {
  padding-top: 100px;
  padding-bottom: 100px;
  overflow: hidden;

  .ellipse-left {
    @include ellipse;
    bottom: -100%;
    left: 0;

    background: $vite-bg-blue;
  }

  .ellipse-right {
    @include ellipse;
    bottom: -100%;
    right: 0;

    background: $vite-bg-green;
  }

  .is-grid {
    grid-template-columns: 1fr 400px;
    column-gap: 80px;
  }

  .vite-hero {
    .title {
      line-height: 1.3;
      margin-bottom: 2rem;
    }
    .desc {
      font-size: 30px;
      line-height: 1.4;
    }
  }

  @include addPaddingInTouch;

  @include mobile {
    padding-top: 20px;
    padding-bottom: 60px;

    .ellipse-left {
      bottom: -210px;
      left: -5%;
    }

    .ellipse-right {
      bottom: -210px;
      right: -5%;
    }

    .is-grid {
      grid-template-columns: unset;
    }

    .vite-hero {
      .title {
        font-size: 44px;
      }
      .image {
        margin-bottom: 20px;
      }

      .desc {
        font-size: 18px;
      }
    }

  }
}

.greetings {
  margin-top: 120px;
  margin-bottom: 120px;

  .video {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 500px;

    background-image: url("../assets/images/community/world.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 2rem;

    cursor: pointer;

    img {
      margin: auto;
    }
  }

  @include addPaddingInTouch;

  @include mobile {
    margin-top: 60px;
    margin-bottom: 60px;
    
    .video {
      margin-top: 0;
      height: 160px;
      border-radius: 16px;
    }
  }
}

.tg-map {
  background: #F5FAFF;
  margin-bottom: 120px;
  padding-top: 120px;

  .vite-hero .title {
    position: relative;
    z-index: 99;
    margin-bottom: -3rem;
  }

  .map {
    width: 100%;
    height: 700px;
    background: #F5FAFF;
  }
  .map-container {
    box-sizing: border-box;
    padding: 0 15px;
    .map__footer {
      justify-content: space-between;
      overflow-x: scroll;
      font-size:14px;
      font-family: $family-sans-serif;
      font-weight:400;
      color:rgba(145,154,163,1);
      line-height:18px;
      .map__footer-wrapper {
        margin-top: 5px;
      }
    }
  }

  @include touch {
    .vite-hero .title {
      padding-left: 1rem;
      padding-right: 1rem;
      margin-bottom: 1px;
    }
  }

  @include mobile {
    padding-top: 60px;
    margin-bottom: 60px;
    .map {
      height: 260px;
    }
  }
}

.social-media {
  margin-bottom: 120px;

  .is-grid {
    margin-top: 40px;
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
    column-gap: 32px;
  }

  .vite-card {
    .logo {
      width: 100px;
      height: 100px;
      border-radius: 100px;
      margin-right: 20px;

      background: linear-gradient(63deg, #00BEFF 32.8%, #00FF95 94.95%);

      display: flex;
      justify-content: center;

      .icon {
        width: 48px;
        height: 48px;
        margin: auto;
        color: #fff;
      }
    }

    .desc {
      margin-top: 10px;

      h3 {
        font-size: 30px;
        font-weight: 800;
        color: $grey-darker;
      }

      span {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }

  @include addPaddingInTouch;

  @include mobile {
    margin-bottom: 60px;

    .is-grid {
      margin-top: 20px;
      grid-template-columns: unset;
      gap: 20px;
    }

    .vite-card {
      padding: 20px;
      border-radius: 24px;

      .logo {
        width: 60px;
        height: 60px;
        margin-right: 10px;
      }

      .desc {
        margin-top: 0;
        margin-bottom: 0;

        h3 {
          font-size: 24px;
        }
        span {
          font: 14px;
        }
      }
    }
  }
}
</style>

<script setup lang="ts">

useHead({
  title: 'Ecosystem',
})

interface App {
  name: string;
  logo: string;
  tags: string[];

}

const projectsJSON = await queryContent('/projects').findOne();
const apps: App[] = projectsJSON.apps;
const tags: Set<string> = new Set();

for (let item of apps) {
  for (let tag of item.tags) {
    tags.add(tag);
  }
} 

const selectedTag = ref<string>('');
const selectedApps = reactive<App[]>([...apps]);

function selectTag(tag: string) {
  selectedTag.value = tag;
  // clear
  selectedApps.length = 0;
  if (tag) {
    // filter
    const s = apps.filter(app => {
      const found = app.tags.find(x => x === tag);
      if (found) {
        return true;
      } else {
        return false;
      }
    })
    selectedApps.push(...s);
  } else {
    selectedApps.push(...apps);
  }
}

</script>

<template>
  <div class="ecosystem-page">
    <section class="container is-max-widescreen intro">
      <div class="is-grid">
        <div class="vite-hero">
          <h1 class="title">Exploring<br /> Projects on Vite</h1>
          <figure class="image only-mobile">
            <img src="../assets/images/ecosystem/intro.svg" alt="ecosystem" />
          </figure>
          <p class="desc">Vite's fast and secure network and zero fee structure are extremely attractive to builders of the web3 world. Here we have featured a number of ecosystem projects on Vite. Like any living and breathing ecosystems, it is continuously changing. Vite is an open invitation to build the most vibrant decentralized economy of the future.</p>
        </div>
        <figure class="image except-mobile">
          <img src="../assets/images/ecosystem/intro.svg" alt="ecosystem" />
        </figure>
      </div>
      <div class="ellipse-left"></div>
      <div class="ellipse-right"></div>
    </section>

    <section class="container is-max-widescreen dapp">
      <h1 class="title">Community Projects</h1>
      <div class="buttons tags">
        <button class="button is-rounded is-vite-grey"
          :class="{'is-active': selectedTag == '' }"
          @click="selectTag('')">All</button>
        <button class="button is-rounded is-vite-grey"
          v-for="tag in tags" :key="tag.id"
          :class="{'is-active': selectedTag == tag }"
          @click="selectTag(tag)">{{ tag }}</button>
      </div>

      <div class="is-grid apps">
        <div class="vite-card app-card" v-for="app in selectedApps" :key="app.id">
          <a :href="app.website" target="_blank">
            <div class="app-logo">
              <figure class="image">
                <img :src="app.logo" :alt="app.name" />
              </figure>
              <span v-if="selectedTag" class="tag">{{ selectedTag }}</span>
              <span v-else class="tag">{{app.tags[0]}}</span>
            </div>
            <h3 class="app-name">{{app.name}}</h3>
            <p class="app-intro">{{app.intro}}</p>
          </a>
          <ul class="social-media is-flex">
            <li v-for="(v, k) in app.socialMedia" :key="k">
              <a :href="v" target="_blank">
                <iconify-icon class="icon" v-if="k=='twitter'" icon="mdi:twitter" width="24" height="24" />
                <iconify-icon class="icon" v-else-if="k=='discord'" icon="mdi:discord" width="24" height="24" />
                <iconify-icon class="icon" v-else-if="k=='telegram'" icon="ic:baseline-telegram" width="24" height="24" />
              </a>
            </li>
          </ul>
        </div>
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
    bottom: -85%;
    left: 0;

    background: $vite-bg-blue;
  }

  .ellipse-right {
    @include ellipse;
    bottom: -85%;
    right: 0;

    background: $vite-bg-green;
  }

  .is-grid {
    grid-template-columns: 1fr 440px;
    column-gap: 3rem;
  }

  .vite-hero {
    .desc {
      font-size: 30px;
      line-height: 1.4;
    }
  }
  
  .image {
    margin-top: 1rem;
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
        width: 288px;
        margin:0 auto 20px;
      }

      .desc {
        font-size: 18px;
      }
    }

  }
}

.dapp {
  margin-top: 120px;
  margin-bottom: 120px;

  .title {
    margin-bottom: 30px;
    font-size: 64px;
    font-weight: 800;
  }

  .tags {
    margin-bottom: 0;
    gap: 32px;
  }

  .apps {
    margin-top: 40px;

    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

    .app-card {
      padding-bottom: 24px;
      a {
        height: 340px;
      }
    }

    .app-logo {
      position: relative;
      margin-bottom: 30px;

      .image {
        width: 120px;
        height: 120px;
        img {
          border-radius: 120px;
          object-fit: cover;
          object-position: left center;
        }
      }

      .tag {
        position: absolute;
        top: 0;
        right: 0;
        padding: 6px 24px;

        background: #F5FAFF;
        
        font-size: 1rem;
        font-weight: 500;
      }
    }

    .app-name {
      margin-bottom: 10px;

      font-size: 30px;
      font-weight: 800;
      line-height: 1.3;

      color: $grey-darker;
    }

    .app-intro {
      font-size: 16px;
      font-weight: 500;

      color: $grey-dark;
    }

    .social-media{
      border-top: 1px solid #CFD6DF;
      padding-top: 20px;

      li {
        margin-right: 20px;
      }

      .icon{
        color: #00BEFF;
      }
    }

  }

  @include addPaddingInTouch;

  @include mobile {
    margin-top: 60px;
    margin-bottom: 60px;

    .title {
      font-size: 36px;
      margin-bottom: 20px;
    }

    .tags {
      gap: 10px;
      .button {
        padding: 16px 40px;
        margin: 0;
      }
    }

    .is-grid {
      grid-template-columns: unset;
      gap: 20px;
    }

    .apps {
      margin-top: 20px;;

      .app-card {
        padding: 25px 30px 20px;
        a {
          height: auto;
        }
      }

      .app-logo {
        margin-bottom: 20px;
      }

      .app-name {
        font-size: 24px;
      }

      .app-intro {
        margin-bottom: 20px;
      }
    }

  }
}
  
</style>

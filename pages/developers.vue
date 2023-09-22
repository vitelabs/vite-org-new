<script setup lang="ts">
useHead({
  title: 'Developers',
})

const links = await queryContent('/links').findOne()

const tutorList = [
  {
    title: "Vite: Solidity++ dApp Development Workshop - Solidity++",
    desc: "Full dApp development workshop series for beginners. Participants will learn to build and deploy a complete Vite-based dApp from scratch using Solidity++ and Vite.js. Minimal experience needed.",
    src: "https://www.youtube.com/embed/Y1ZvlZNK320?rel=0&showinfo=0&fs=0&modestbranding=1&iv_load_policy=3&autohide=1&enablejsapi=1",
  },
  {
    title: "Vite: Solidity++ dApp Development Workshop - Vite.js",
    desc: "Full dApp development workshop series for beginners. Participants will learn to build and deploy a complete Vite-based dApp from scratch using Solidity++ and Vite.js. Minimal experience needed.",
    src: "https://www.youtube.com/embed/ZG-AumOJP5s?rel=0&showinfo=0&fs=0&modestbranding=1&iv_load_policy=3&autohide=1&enablejsapi=1",
  },
];

</script>

<template>
  <div class="developer-page">
    <section class="container is-max-widescreen intro">
      <div class="is-grid">
        <div class="vite-hero">
          <h1 class="title">Become a Vuilder</h1>
          <figure class="image only-mobile">
            <img src="../assets/images/developers/intro.svg" alt="Vuilder DAO" />
          </figure>
          <p class="desc">All is possible when you start from ZERO (fee)
            Take advantage of Vite’s unique features and build projects and dApps that really stand out. Vite’s programming language Solidity++ is based on Solidity with asynchronous semantics built in. Ethereum builders can quickly adjust and build on Vite.</p>
        </div>
        <figure class="image except-mobile">
          <img src="../assets/images/developers/intro.svg" alt="Vuilder DAO" />
        </figure>
      </div>
      <div class="buttons">
        <a target="_blank" :href="links.docs.home" class="button is-medium is-vite-dark">Documentation</a>
        <a target="_blank" :href="links.socialMedia.github" class="button is-medium is-vite-light">GitHub</a>
        <a target="_blank" :href="links.docs.smartContract" class="button is-medium is-vite-light">Smart Contract</a>
      </div>
    </section>

    <section class="container vuilder">
      <div class="container is-max-widescreen">
        <div class="is-grid">
          <div class="vite-hero">
            <h1 class="title">Vuilder DAO</h1>
            <p class="desc">The Vuilder DAO's mission is to foster ongoing organic development on the Vite ecosystem. It achieves this purpose primarily through an Ongoing Bounties Program and a Project of the Quarter Program.</p>
            <a target="_blank" :href="links.developer.vuilderDAO" class="button is-medium is-vite-light">Join Vuilder DAO</a>
          </div>

          <figure class="image">
            <img src="../assets/images/developers/cube.svg" alt="Vuilder DAO" />
          </figure>
        </div>
      </div>
    </section>

    <section class="container is-max-widescreen hackathon">
      <div class="vite-hero">
        <a href="#hackathons"><h1 class="title">Hackathons</h1></a>
        <p class="desc">Explore open bounties <a class="is-vite-blue" target="_blank" :href="links.developer.hackathon.bounties">here</a></p>
      </div>
      <div class="is-grid">
        <a :href="links.developer.hackathon.gr12">
          <img srcset="
            ../assets/images/developers/GR12@2x.png 2x,
            ../assets/images/developers/GR12.png 1x"
            src="../assets/images/developers/GR12.png" alt="GR12">
        </a>
        <a :href="links.developer.hackathon.gr11">
          <img srcset="
            ../assets/images/developers/GR11@2x.png 2x,
            ../assets/images/developers/GR11.png 1x"
            src="../assets/images/developers/GR11.png" alt="GR11">
        </a>
        <a :href="links.developer.hackathon.gr10">
          <img srcset="
            ../assets/images/developers/GR10@2x.png 2x,
            ../assets/images/developers/GR10.png 1x"
            src="../assets/images/developers/GR10.png" alt="GR10">
        </a>
      </div>
    </section>

    <section class="tutor">
      <div class="container is-max-widescreen vite-hero">
        <h1 class="title">Tutorials</h1>
        <swiper-youtube :list="tutorList" />
      </div>
    </section>

    <section class="container join-us">
      <div class="container is-max-widescreen has-text-centered">
        <h1 class="title">Join Vite's Developer Community</h1>
        <a target="_blank" :href="links.socialMedia.discord" class="button is-medium is-vite-light">Talk Tech on Discord</a>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/main.scss" as *;

.intro {
  margin-top: 100px;
  margin-bottom: 70px;
  .is-grid {
    margin-bottom: 40px;
    grid-template-columns: 1fr 420px;
    column-gap: 3rem;
  }
  .vite-hero {
    .desc {
      font-size: 30px;
      line-height: 1.4;
    }
  }

  @include addPaddingInTouch;

  @include mobile {
    margin-top: 20px;
    margin-bottom: 60px;
    .is-grid {
      grid-template-columns: unset;
      margin-bottom: 0;
    }

    .vite-hero {
      .title {
        font-size: 44px;
      }

      .image {
        width: 210px;
        margin: 0 auto 20px;
      }

      .desc {
        font-size: 18px;
      }
    }
  }
}
.vuilder {
  border-radius: 2rem;
  background: linear-gradient(63deg, #00BEFF 32.8%, #00FF95 94.95%);
  padding: 80px 32px 40px;
  
  .is-grid {
    grid-template-columns: 1fr 360px;
    column-gap: 3rem;
  }

  .vite-hero {
    .title {
      color: #fff;
    }
    .desc {
      color: #fff;
    }
  }

  @include touch {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @include mobile {
    .is-grid {
      grid-template-columns: unset;
    }
  }
}

.hackathon {
  margin-top: 120px;
  margin-bottom: 120px;

  .vite-hero {
    margin-bottom: 40px;
  }
  
  .is-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @include addPaddingInTouch;

  @include mobile {
    margin-top: 60px;
    margin-bottom: 60px;

    .is-grid {
      grid-template-columns: unset;
      gap: 20px;
    }

    .vite-hero {
      margin-bottom: 0;
    }
  }
}

.tutor {
  background-color: #F5FAFF;
  padding-top: 120px;
  padding-bottom: 120px;

  .vite-hero .title {
    margin-bottom: 40px;
  }

  @include addPaddingInTouch;

  @include mobile {
    padding-top: 60px;
    padding-bottom: 60px;
    .vite-hero .title {
      margin-bottom: 20px;
    }
  }
}

.join-us {
  margin-top: 120px;
  margin-bottom: 120px;
  padding: 130px 32px;

  background: $grey-darker url("/assets/images/token/wave.svg") bottom no-repeat;
  border-radius: 32px;

  .title {
    color: #fff;
    font-size: 64px;
    font-weight: 800;
    margin-bottom: 40px;
  }

  @include touch {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @include mobile {
    margin-top: 60px;
    margin-bottom: 60px;
    background-image: url("/assets/images/developers/wave-m.svg");
    background-size: 100%;
    background-position: center bottom;

    .title {
      font-size: 36px;
      line-height: 1.3;
    }
  }
}
</style>

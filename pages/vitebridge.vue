<script setup lang="ts">
useHead({
  title: 'VITE bridge',
})

const links = await queryContent('/links').findOne()

</script>

<template>
  <div class="vite-bridge-page">
    <section class="intro">
      <div class="container is-max-widescreen">
        <div class="vite-hero">
          <h1 class="title">Universal Bridge for<br class="except-mobile" />a Multi-Chain Future</h1>
          <p class="desc">ViteBridge is a generic and decentralized cross-chain transfer protocol to bridge all blockchains. ViteBridge will allow unconstrained transfer of information and value between heterogeneous ecosystems, and push our industry towards more openness and interoperability.</p>
          <div class="buttons">
            <a :href="links.viteBridge.whitePaper" target="_blank" class="button is-medium is-vite-dark">ViteBridge White Paper</a>
            <a :href="links.viteBridge.tutorial" target="_blank" class="button is-medium is-vite-light">Tutorials</a>
            <a :href="links.viteBridge.tryit" target="_blank" class="button is-medium is-vite-light">Test ViteBridge</a>
          </div>
        </div>
      </div>
      <figure class="image only-mobile">
        <img src="../assets/images/home/vite-bridge-m.svg" height="550" alt="vite bridge" />
      </figure>

      <div class="ellipse-left"></div>
      <div class="ellipse-right"></div>
    </section>

    <figure class="container is-max-widescreen intro-image except-mobile">
      <img src="../assets/images/home/vite-bridge.svg" height="550" alt="vite bridge" />
    </figure>


    <section class="container features">
      <div class="container is-max-widescreen vite-hero">
        <h1 class="title">Features</h1>

        <div class="is-grid">
          <div class="vite-card">
            <img src="../assets/images/vitebridge/universality.svg" alt="Universality" />
            <h3 class="title">Universality</h3>
            <p class="desc">Works between any two chains</p>
          </div>
          <div class="vite-card">
            <img src="../assets/images/vitebridge/trustlessness.svg" alt="Trustlessness" />
            <h3 class="title">Trustlessness</h3>
            <p class="desc">Provides a bridge in a decentralized way</p>
          </div>
        </div>

      </div>
    </section>

    <section class="how-to-work">
      <div class="container is-max-widescreen">
        <div class="vite-hero">
          <h1 class="title">How ViteBridge Works</h1>
          
          <div class="vite-card is-grid">
            <figure class="image">
              <img src="../assets/images/vitebridge/no1.svg" alt="icon" />
            </figure>
            <div class="block">
              <h3 class="title">Smart Contract Wallet:</h3>
              <p class="desc">A decentralized wallet manages assets and signs transactions on the remote chain. A consensus group of nodes co-own the wallet’s private key.</p>
            </div>
          </div>

          <div class="vite-card is-grid">
            <figure class="image">
              <img src="../assets/images/vitebridge/no2.svg" alt="icon" />
            </figure>
            <div class="block">
              <h3 class="title">Relay:</h3>
              <p class="desc">Observes and reports transactions on the remote chain, forwards signatures on the Vite chain to the remote chain. The relay must bond assets on the remote chain as collateral.</p>
            </div>
          </div>

          <div class="vite-card is-grid">
            <figure class="image">
              <img src="../assets/images/vitebridge/no2.svg" alt="icon" />
            </figure>
            <div class="block">
              <h3 class="title">Mint Contract:</h3>
              <p class="desc">Responsible for minting/burning of assets that get bridged to the Vite chain.</p>
            </div>
          </div>

          <figure class="scheme">
            <img src="../assets/images/vitebridge/scheme.svg" alt="scheme" />
          </figure>

        </div>
      </div>
    </section>

    <section class="container is-max-widescreen use-case vite-hero">
      <h1 class="title">ViteBridge Use Cases</h1>
      <div class="is-grid">
        <div class="vite-card">
          <figure class="image">
            <img src="../assets/images/vitebridge/defi.svg" alt="icon" />
          </figure>
          <h3 class="title">Cross-Chain DeFi</h3>
          <p class="desc">Allow assets to move from one chain to another to participate in yield-farming opportunities offered by different ecosystems.</p>
        </div>

        <div class="vite-card">
          <figure class="image">
            <img src="../assets/images/vitebridge/trading.svg" alt="icon" />
          </figure>
          <h3 class="title">Cross-Chain Trading</h3>
          <p class="desc">Enable convenient and secure trading of digital assets issued on different blockchains.</p>
        </div>

        <div class="vite-card">
          <figure class="image">
            <img src="../assets/images/vitebridge/nft.svg" alt="icon" />
          </figure>
          <h3 class="title">Cross-Chain NFTs</h3>
          <p class="desc">Easily move digital collectibles between chains to experience different NFT DApps.</p>
        </div>
        
      </div>
    </section>
    
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/main.scss" as *;

.intro {
  position: relative;
  padding-top: 100px;
  padding-bottom: 280px;
  overflow: hidden;
  
  .vite-hero {
    margin-bottom: 90px;

    .desc {
      font-size: 30px;
      font-weight: 500;
      line-height: 1.4;
      margin-bottom: 40px;
    }
  }


  .ellipse-left {
    @include ellipse;
    bottom: -60%;
    left: 0;

    background: $vite-bg-blue;
  }

  .ellipse-right {
    @include ellipse;
    bottom: -60%;
    right: 0;

    background: $vite-bg-green;
  }

  @include addPaddingInTouch;

  @include mobile {
    padding-top: 20px;
    padding-bottom: 60px;
    margin-bottom: 60px;

    .ellipse-left {
      bottom: -210px;
      left: -5%;
    }

    .ellipse-right {
      bottom: -210px;
      right: -5%;
    }

    .image {
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid #FFFFFF;
      box-shadow: 22px 23px 31px rgba(32, 32, 44, 0.08), 5px 6px 17px rgba(32, 32, 44, 0.09);
      border-radius: 32px;
      padding: 30px;
    }

    .vite-hero {
      margin-bottom: 20px;
      .title {
        font-size: 44px;
        margin-bottom: 20px;
      }
      .desc {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }

}

.intro-image {
  margin-top: -280px;
  margin-bottom: 120px;
  padding: 53px;
  text-align: center;

  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #FFFFFF;
  box-shadow: 22px 23px 31px rgba(32, 32, 44, 0.08), 5px 6px 17px rgba(32, 32, 44, 0.09);
  border-radius: 32px;
}

.features {
  margin-bottom: 120px;
  padding: 120px 32px;

  border-radius: 32px;
  background: linear-gradient(63deg, #00BEFF 32.8%, #00FF95 94.95%);

  .vite-hero .title {
    color: #fff;
  }

  .is-grid {
    margin-top: 40px;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    
    .vite-card {
      padding: 50px 60px;
      background: #fff;
      border: none;
      gap: 0;

      img {
        margin-bottom: 40px;
      }
      
      h3 {
        color: $grey-darker;
      }

      .desc {
        margin-bottom: 0;
      }
    }
  }

  @include touch {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @include mobile {
    margin-bottom: 60px;
    padding: 60px 20px;

    .is-grid {
      margin-top: 0;
      grid-template-columns: unset;
      gap: 20px;

      .vite-card {
        padding: 20px 30px;

        img {
          height: 120px;
          margin-bottom: 30px;
        }
      }
    }
  }
}

.how-to-work {
  background: #F5FAFF;
  padding: 120px 0;

  .vite-hero h1.title {
    margin-bottom: 40px;
  }

  .vite-card {
    margin-bottom: 30px;
    padding: 40px 60px;
    background: #fff;

    .title {
      font-size: 30px;
      font-weight: 800;
      line-height: 130%;

      color: $grey-darker;

      margin-bottom: 1.5rem;
    }
    .desc {
      font-size: 20px;
      font-weight: 500;
      line-height: 160%;
      color: $grey-darker;
    }
  }

  .is-grid {
    grid-template-columns: 64px 1fr;
    column-gap: 30px;
  }

  .scheme {
    margin-top: 40px;
  }

  @include addPaddingInTouch;

  @include mobile {
    padding: 60px 1rem 40px;

    .vite-hero h1.title {
      margin-bottom: 20px;
    }

    .is-grid {
      grid-template-columns: unset;
      gap: 0;
    }

    .vite-card {
      padding: 30px;
      border-radius: 24px;
      margin-bottom: 20px;

      .image {
        height: 64px;
        width: 64px;
        margin-bottom: 15px;
      }

      .title {
        font-size: 24px;
        margin-bottom: 10px;
      }

      .desc {
        font-size: 16px;
        margin-bottom: 0;
      }
    }

    .scheme {
      margin-top: 0;
    }
  }
}

.use-case {
  margin-top: 120px;
  margin-bottom: 120px;

  .is-grid {
    margin-top: 40px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .vite-card {
    align-content: start;

    .image {
      width: 84px;
      height: 84px;
      margin-bottom: 30px;
    }

    .title {
      margin-bottom: 1.5rem;
    }

    .desc {
      margin-bottom: 0;
    }

  }

  @include addPaddingInTouch;

  @include mobile {
    margin-top: 60px;
    margin-bottom: 60px;

    .is-grid {
      margin-top: 0;
      grid-template-columns: unset;
      gap: 20px;
    }
  }

}
</style>

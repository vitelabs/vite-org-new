<script setup lang="ts">
const links = await queryContent('/links').findOne()
</script>

<template>
  <footer>
    <div class="ellipse-left"></div>
    <div class="ellipse-right"></div>

    <section class="container is-max-widescreen is-grid sitemap">
      <figure class="logo">
        <img src="../assets/images/logo/logo.svg" alt="logo" />
      </figure>

      <div class="group-links is-grid">
        <dl>
          <dt>About</dt>
          <dd><NuxtLink to="/token">VITE Coin</NuxtLink></dd>
          <dd><NuxtLink to="/faqs">FAQs</NuxtLink></dd>
          <dd><a target="_blank" :href="links.about.joinUs">Join Us</a></dd>
          <dd><a target="_blank" href="/assets/logo.zip">Brand Assets</a></dd>
          <dd><a target="_blank" href="/terms.html">Terms</a></dd>
          <dd><a target="_blank" href="/privacy.html">Privacy</a></dd>
        </dl>

        <dl>
          <dt>Developers</dt>
          <dd><a target="_blank" :href="links.docs.home">Documentation</a></dd>
          <dd><NuxtLink to="/developers#hachathons">Hackathons</NuxtLink></dd>
          <dd><a target="_blank" :href="links.developer.vuilderDAO">Vuilder DAO</a></dd>
          <dd><a target="_blank" :href="links.socialMedia.github">Github</a></dd>
        </dl>

        <dl>
          <dt>Tools</dt>
          <dd><NuxtLink to="/vitebridge">ViteBridge</NuxtLink></dd>
          <dd><a target="_blank" :href="links.vitex.home">ViteX Exchange</a></dd>
          <dd><a target="_blank" :href="links.app.home">Vite App</a></dd>
          <dd><a target="_blank" :href="links.wallet.webWallet">Web Wallet</a></dd>
          <dd><a target="_blank" :href="links.wallet.desktopWallet">Desktop Wallet</a></dd>
        </dl>

        <dl>
          <dt>Community</dt>
          <dd><NuxtLink to="/community">Join Our Community</NuxtLink></dd>
          <dd><a target="_blank" :href="links.socialMedia.forum">Vite Forum</a></dd>
        </dl>

        <dl>
          <dt>Media & News</dt>
          <dd><a target="_blank" :href="links.news.weeklyReport">Bi-weekly Reports</a></dd>
          <dd><a target="_blank" :href="links.news.ann">Announcements</a></dd>
          <dd><a target="_blank" :href="links.news.home">Latest News</a></dd>
        </dl>
      </div>
    </section>

    <section class="social-media">
      <div class="container is-max-widescreen is-flex">
        <a :href="links.socialMedia.discord" target="_blank">
          <iconify-icon icon="mdi:discord" width="24" height="24" />
        </a>
        <a :href="links.socialMedia.twitter" target="_blank">
          <iconify-icon icon="mdi:twitter" width="24" height="24" />
        </a>
        <NuxtLink to="/community#tgMap">
          <iconify-icon icon="ic:baseline-telegram" width="24" height="24" />
        </NuxtLink>
        <a :href="links.socialMedia.coinmarketcap" target="_blank">
          <iconify-icon icon="simple-icons:coinmarketcap" width="22" height="22" />
        </a>
        <a :href="links.socialMedia.github" target="_blank">
          <iconify-icon icon="mdi:github" width="24" height="24" />
        </a>
        <a :href="links.socialMedia.medium" target="_blank">
          <iconify-icon icon="mdi:medium" width="24" height="24" />
        </a>
        <a :href="links.socialMedia.instagram" target="_blank">
          <iconify-icon icon="mdi:instagram" width="24" height="24" />
        </a>
        <a :href="links.socialMedia.facebook" target="_blank">
          <iconify-icon icon="mdi:facebook" width="24" height="24" />
        </a>
        <a :href="links.socialMedia.reddit" target="_blank">
          <iconify-icon icon="mdi:reddit" width="24" height="24" />
        </a>
        <a :href="links.socialMedia.youtube" target="_blank">
          <iconify-icon icon="mdi:youtube" width="24" height="24" />
        </a>
        <a :href="links.socialMedia.forum" target="_blank">
          <iconify-icon icon="mdi:forum" width="24" height="24" />
        </a>
        <a :href="links.socialMedia.bitcointalk" target="_blank">
          <iconify-icon icon="mdi:bitcoin" width="24" height="24" />
        </a>
        <a :href="links.socialMedia.coingecko" target="_blank">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8419 0.4275C11.5885 0.4275 12.3352 0.4275 13.0818 0.4275C13.1821 0.456349 13.2802 0.497562 13.3837 0.511986C18.3616 1.24043 21.6958 3.91204 23.332 8.49181C23.7021 9.52831 23.7598 10.6678 23.9624 11.7611V12.3792C23.9336 12.5451 23.8962 12.711 23.8781 12.8779C23.3437 17.7688 20.691 21.1245 15.9542 22.874C14.8172 23.2933 13.5458 23.3737 12.3363 23.6097H11.6963C11.5213 23.5839 11.3475 23.5458 11.1726 23.5345C6.30131 23.2326 2.17457 20.2086 0.610907 15.7411C0.31012 14.8881 0.173593 13.9824 -0.0375977 13.1004C-0.0375977 12.3792 -0.0375977 11.658 -0.0375977 10.9368C-0.00559906 10.7894 0.0338658 10.6421 0.0583981 10.4938C0.743167 6.1839 3.14092 3.10736 7.26768 1.36612C8.38762 0.894234 9.64623 0.732474 10.8419 0.4275ZM2.84548 18.0913C3.03106 17.5875 3.21879 17.129 3.37024 16.6602C3.97182 14.7912 4.01769 12.8438 4.22034 10.9182C4.33447 9.83539 4.63632 8.79472 5.47788 8.0395C7.08848 6.59705 8.98386 5.87582 11.2216 6.14989C11.6536 6.20244 12.0963 6.20656 12.5315 6.18802C13.3228 6.15401 14.173 6.06026 14.6839 6.76705C15.0892 7.32755 15.6449 7.53156 16.2368 7.73453C16.8715 7.95192 17.5296 8.11265 18.1503 8.36096C18.768 8.60823 19.3994 8.86994 19.9391 9.24085C20.8596 9.87446 21.09 10.8173 20.5663 11.7868C20.2772 12.3226 19.8677 12.8129 19.441 13.2591C18.5973 14.1411 17.6682 14.9478 16.8385 15.8411C15.5606 17.2165 14.4748 18.7177 14.0119 20.5548C13.8487 21.2018 13.7527 21.8551 13.9138 22.5196C18.4672 21.9529 22.4222 17.8925 22.9789 13.257C23.5613 8.41042 20.6655 3.7678 15.951 1.98947C11.2579 0.219376 5.86507 1.7731 2.91053 5.74395C-0.0237318 9.68698 0.338918 14.8036 2.84548 18.0913ZM10.3342 11.4426C11.5193 11.455 12.5186 10.5132 12.5293 9.37479C12.54 8.24453 11.5331 7.26469 10.3672 7.27191C9.20358 7.2781 8.21909 8.20744 8.1967 9.31813C8.1743 10.4525 9.15772 11.4313 10.3342 11.4437V11.4426ZM12.1335 13.7423C12.7213 14.2812 13.4018 14.5182 14.1431 14.5315C16.2027 14.5687 18.0299 13.8794 19.7108 12.778C19.7162 12.7739 19.698 12.7356 19.6959 12.7295C17.3249 13.9051 14.8993 14.6809 12.1346 13.7434L12.1335 13.7423ZM18.7146 11.4643C18.4138 11.2294 18.2346 10.9832 18.0714 10.9934C17.8976 11.0037 17.7397 11.2551 17.5744 11.4025C17.7237 11.5591 17.855 11.8156 18.0267 11.8434C18.1888 11.8692 18.3925 11.6539 18.7146 11.4643Z" fill="currentColor"/>
            <path d="M10.4362 7.9397C11.2798 7.94279 11.9173 8.55583 11.9227 9.36772C11.928 10.1806 11.2294 10.8514 10.3987 10.8298C9.58299 10.8091 8.92831 10.1497 8.93797 9.35742C8.94763 8.55068 9.59587 7.93661 10.4362 7.9397Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </section>

    <p class="container is-max-widescreen copyright">© 2018-2023 Vite Labs Limited. All Rights Reserved.</p>

  </footer>

</template>

<style lang="scss" scoped>
@use "@/assets/styles/main" as *;
footer {
  position: relative;
  overflow: hidden;
}

.ellipse-left {
  @include ellipse;
  top: -650px;
  left: 10%;

  background: $vite-bg-green; 

  @include mobile {
    top: -200px;
    left: -6%;
  }
}

.ellipse-right {
  @include ellipse;
  top: -650px;
  right: 10%;

  background: $vite-bg-blue; 

  @include mobile {
    top: -200px;
    right: -6%;
  }
}

.sitemap {
  padding: 120px 0 87px;

  grid-template-columns: 192px auto;

  @include addPaddingInTouch;


  @include mobile {
    padding-top: 60px;
    padding-bottom: 40px;
    grid-template-columns: 1fr;
  }

  .logo {
    width: 100px;
    height: 35px;
  }
  
  .group-links {
    grid-template-columns: repeat(5, 1fr);

    @include mobile {
      grid-template-columns: 1fr 1fr;
      gap: 20px 16px;
    }

    dt {
      margin-bottom: 20px;

      font-size: 1.25rem;
      font-weight: 800;
      line-height: 1.625;
      color: $grey-darker;
    }

    dd {
      font-weight: 500;
      line-height: 1.625;
      margin-bottom: 20px;
    }

  }

}

.social-media {
  border-top: 1px solid #CFD6DF;
  border-bottom: 1px solid #CFD6DF;
  padding: 38px 0;

  @include addPaddingInTouch;

  a {
    color: $grey-darker;
    &:hover {
      color: $vite-blue;
    }
  }

  .is-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 32px 65px;

    @include mobile {
      gap: 32px 58px;
    }
  }
}

.copyright {
  padding: 40px 0 36px;
  font-weight: 500;

  @include addPaddingInTouch;

  @include mobile {
    padding-bottom: 60px;
  }
}
</style>

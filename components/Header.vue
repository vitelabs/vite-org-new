<script setup lang="ts">
const links = await queryContent('/links').findOne();

const showNavbarMenu = ref(false);

function clickBurger () {
  showNavbarMenu.value = !showNavbarMenu.value;
}

function closeNavbarMenu(e: any) {
  const cls = e.target.classList;
  if(!cls.contains('navbar-link') || cls.contains('goto')) {
    showNavbarMenu.value = false;
    toggleMenu(null);
    e.target.blur();
  }
}

const showAbout = ref(false);
const showTools = ref(false);
const showCommunity = ref(false);

function toggleMenu(target: string | null) {
  switch (target) {
    case 'about': 
      showAbout.value = !showAbout.value;
      showTools.value = false;
      showCommunity.value = false;
      break;
    case 'tools':
      showAbout.value = false;
      showTools.value = !showTools.value;
      showCommunity.value = false;
      break;
    case 'community':
      showAbout.value = false;
      showTools.value = false;
      showCommunity.value = !showCommunity.value;
      break;
    default:
      showAbout.value = false;
      showTools.value = false;
      showCommunity.value = false;
  }
}

</script>

<template>
  <header>
    <section class="container is-max-widescreen">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <NuxtLink class="navbar-item" to="/">
            <svg class="logo" viewBox="0 0 174 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6398 15.9694L8.66788 6.55601C4.12668 3.2627 -1.83235 8.15601 0.538782 13.229C6.43194 25.8355 13.5245 41.0441 16.0621 46.6666L24.7631 28.0022C26.7391 23.762 25.4322 18.7202 21.6363 15.9659L21.6398 15.9694Z" fill="url(#paint0_linear_404_399)"/>
              <path d="M52.4957 3.17631L61.4082 22.1379C63.3876 26.3469 62.0426 31.3681 58.2224 34.0325L21.7368 59.4942C19.4593 61.0839 16.5439 58.6407 17.7156 56.1318L42.4669 3.18667C44.4498 -1.05695 50.5024 -1.06386 52.4957 3.17631Z" fill="url(#paint1_linear_404_399)"/>
              <path d="M80.3157 16.3979H88.2021L95.5062 31.7621L102.682 16.3322H110.697L99.1218 41.3551C98.4562 42.7962 97.0107 43.7189 95.4161 43.7189C93.818 43.7189 92.3655 42.7893 91.7034 41.3379L80.3157 16.3979Z" fill="#20202C"/>
              <path d="M128.83 10.7167H136.155V18.1638H143.858V24.4221H136.058V34.2744C136.058 35.0761 136.259 35.8709 136.692 36.5482C137.219 37.3707 138.166 38.1966 139.84 38.1966H143.858V44.1854C143.858 44.1854 138.343 45.0389 135.132 44.1128C131.922 43.1867 128.83 40.4152 128.83 36.0022V10.7167Z" fill="#20202C"/>
              <path d="M122.317 16.3322H115.085V43.7189H122.317V16.3322Z" fill="#20202C"/>
              <path d="M118.701 12.2096C120.912 12.2096 122.705 10.4226 122.705 8.21821C122.705 6.01385 120.912 4.22685 118.701 4.22685C116.49 4.22685 114.697 6.01385 114.697 8.21821C114.697 10.4226 116.49 12.2096 118.701 12.2096Z" fill="#20202C"/>
              <path d="M166.928 34.1569L173.043 35.9711C172.308 38.4627 170.866 40.5119 168.717 42.1223C166.567 43.7327 163.895 44.5379 160.698 44.5379C156.805 44.5379 153.498 43.2281 150.781 40.6087C148.063 37.9893 146.704 34.4852 146.704 30.0895C146.704 25.6938 148.028 22.5007 150.67 19.8433C153.315 17.1893 156.438 15.8588 160.036 15.8588C164.224 15.8588 167.503 17.1029 169.871 19.5945C172.242 22.086 173.424 25.5106 173.424 29.8683C173.424 31.0813 173.313 32.1214 173.313 32.1214H153.918C153.991 33.8804 154.691 35.3456 156.012 36.5171C157.336 37.6886 158.913 38.2761 160.75 38.2761C163.874 38.2761 165.929 36.9042 166.921 34.1569H166.928ZM154.088 27.1245H166.21C166.137 25.6247 165.593 24.3599 164.584 23.3335C163.572 22.3072 162.095 21.7957 160.147 21.7957C158.383 21.7957 156.951 22.3452 155.849 23.4441C154.746 24.543 154.157 25.7698 154.084 27.1245H154.088Z" fill="#20202C"/>
              <defs>
                <linearGradient id="paint0_linear_404_399" x1="5.62077" y1="28.6346" x2="23.8401" y2="18.0798" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00BEFF"/>
                  <stop offset="1" stop-color="#00FF95"/>
                </linearGradient>
                <linearGradient id="paint1_linear_404_399" x1="9.28494" y1="43.8951" x2="59.319" y2="14.9179" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00BEFF"/>
                  <stop offset="1" stop-color="#00FF95"/>
                </linearGradient>
              </defs>
            </svg>
          </NuxtLink>

          <a role="button" class="navbar-burger" :class="{'is-active': showNavbarMenu}" aria-label="menu" aria-expanded="false" @click="clickBurger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" :class="{'is-active': showNavbarMenu}" @click="closeNavbarMenu">
          <div class="navbar-end">

            <div class="navbar-item has-dropdown is-hoverable root-item" :class="{'show': showAbout, 'hide': !showAbout }">
              <a class="navbar-link" @click="toggleMenu('about')">About</a>
              <div class="navbar-dropdown">
                <NuxtLink class="navbar-item" to="/token">About VITE</NuxtLink>
                <a class="navbar-item" target="_blank" :href="links.docs.home">Tech Docs</a>
                <a class="navbar-item" target="_blank" :href="links.tutorial.viteapp">Tutorial</a>
                <NuxtLink class="navbar-item" to="/faqs">FAQs</NuxtLink>
              </div>
            </div>

            <div class="navbar-item no-dropdown root-item">
              <NuxtLink class="navbar-link is-arrowless goto" to="/developers">
                Developers
              </NuxtLink>
            </div>

            <div class="navbar-item has-dropdown root-item is-hoverable" :class="{'show': showTools, 'hide': !showTools }">
              <a class="navbar-link" @click="toggleMenu('tools')">Tools</a>
              <div class="navbar-dropdown">
                <NuxtLink class="navbar-item" to="/vitebridge">ViteBridge</NuxtLink>
                <a class="navbar-item" target="_blank" :href="links.exchange.vitex">ViteX Exchange</a>
                <hr class="navbar-divider" />
                <p class="menu-label">Wallet</p>
                <a class="navbar-item" target="_blank" :href="links.app.home">Vite App</a>
                <a class="navbar-item" target="_blank" :href="links.wallet.webWallet">Web Wallet</a>
                <a class="navbar-item" target="_blank" :href="links.wallet.desktopWallet">Desktop Wallet</a>
                <hr class="navbar-divider" />
                <p class="menu-label">Explorer</p>
                <a class="navbar-item" target="_blank" :href="links.explorer.viteScan">ViteScan.io</a>
                <a class="navbar-item" target="_blank" :href="links.explorer.viteView">ViteView.xyz</a>
                <a class="navbar-item" target="_blank" :href="links.explorer.viteTxs">ViteTxs.de</a>
                <a class="navbar-item" target="_blank" :href="links.explorer.vitcScan">VITCScan</a>
                <a class="navbar-item" target="_blank" :href="links.explorer.vitExplorerEu">Viteexplorer.eu</a>
              </div>
            </div>

            <div class="navbar-item no-dropdown root-item">
              <NuxtLink class="navbar-link is-arrowless goto" to="/dao">
                DAO
              </NuxtLink>
            </div>

            <div class="navbar-item no-dropdown root-item">
              <NuxtLink class="navbar-link is-arrowless goto" to="/ecosystem">
                Ecosystem
              </NuxtLink>
            </div>

            <div class="navbar-item has-dropdown root-item is-hoverable" :class="{'show': showCommunity, 'hide': !showCommunity }">
              <a class="navbar-link" @click="toggleMenu('community')">Community</a>
              <div class="navbar-dropdown">
                <NuxtLink class="navbar-item" to="/community">Join Our Community</NuxtLink>
                <a class="navbar-item" target="_blank" :href="links.socialMedia.forum">Vite Forum</a>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </section>

  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/main" as *;

header {
  border-bottom: 1px solid #CFD6DF;
}

.logo {
  width: 174px;
  height: 60px;
  margin: 22px 0;

  @include touch {
    width: 120px;
    height: 42px;
    margin: 17px 4px;
  }
}

.navbar-burger {
  margin-top: 18px;
  margin-right: 16px;

  span {
    width: 22px;
    height: 1.5px;
    &:nth-child(1) {
      top: calc(50% - 7px);
    }
    &:nth-child(2) {
      top: 50%;
    }
    &:nth-child(3) {
      top: calc(50% + 7px);
    }
  }

  &.is-active{
    span {
      &:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      &:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    }
  }
}

.navbar-link {
  padding: 10px 20px;
}

.navbar-link:not(.is-arrowless)::after {
  border-width: 2px;
  border-radius: 1px;

  @include touch {
    width: 0.7em;
    height: 0.7em;
  }
}

.navbar-menu.is-active {
  padding: 0 1rem 1rem;

  .navbar-item {
    font-size: 1rem;
  }

  .menu-label {
    font-size: 1rem;
    margin: 0;
    padding: 10px 40px;
  }

  .root-item:not(:last-child) {
    .navbar-dropdown {
      border-bottom: 1px solid $grey;
      margin-bottom: 10px;
      padding-bottom: 10px;
    }
  }

  .root-item .navbar-link::after {
    transition: all .3s;
  }

  .root-item.show {
    .navbar-link::after {
      transform: rotate(135deg);
    }

    .navbar-dropdown {
      display: block;
    }
  }

  .root-item.hide {

    .navbar-dropdown {
      display: none;
    }

  }

  .navbar-dropdown {
    padding: 0;

    .navbar-item {
      padding: 10px 40px;
    }
  }
}

.no-dropdown{
  padding: 0;
  a {
    height: 100%;
  }
}

.navbar-menu:not(.is-active) .navbar-dropdown {
  border-radius: 12px;
  border: 1px solid $grey;
  box-shadow: 0px 37px 15px rgba(32, 32, 45, 0.01), 0px 21px 12px rgba(32, 32, 45, 0.05), 0px 9px 9px rgba(32, 32, 45, 0.09), 0px 2px 5px rgba(32, 32, 45, 0.1), 0px 0px 0px rgba(32, 32, 45, 0.1);
  padding: 10px;

  a.navbar-item {
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 6px;
    &:hover {
      background-color: $grey-darker;
      color: #fff;
    }
  }
  .navbar-divider {
    height: 1px;
    background-color: $grey;
    margin: 14px 0;
  }
  .menu-label{
    font-size: 16px;
    color: $grey;
    margin:0 10px 5px;
    text-transform: capitalize;
  }
}
</style>

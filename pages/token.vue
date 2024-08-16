<script setup lang="ts">
// import * as echarts from 'echarts';
import mobile from 'is-mobile';

// FIXME: there is a import issue.
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import { LegendComponent } from 'echarts/components';

useHead({
  title: 'VITE coin',
})

const isMobile = mobile();

echarts.use([
  CanvasRenderer,
  PieChart,
  LegendComponent
]);

const pieChartEl = ref<HTMLElement | null>(null);

onMounted(() => {
  const chart = echarts.init(pieChartEl.value);
  let itemGap = 40;
  let radius = ['32%', '80%'];
  let bottom = 50;
  let fontSize = '36px';
  let labelLength = 50;
  if (isMobile) {
    itemGap = 16;
    radius = ['20%', '50%'];
    bottom = 20;
    fontSize = '18px';
    labelLength = 20;
  }
  chart.setOption({
    legend: {
      show: true,
      bottom: '0%',
      icon: 'circle',
      itemHeight: 32,
      itemGap: itemGap,
      textStyle: {
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '1.5',
      }
    },
    series: [{
      type: 'pie',
      radius: radius,
      labelLine: {
        length: labelLength,
      },
      top: 15,
      bottom: bottom,
      label: {
        formatter: '{d}%',
        fontSize: fontSize,
        fontWight: '600',
        fontFamily: 'Manrope, system-ui',
      },
      labelLayout: function (params: any) {
        const isLeft = params.labelRect.x < chart.getWidth() / 2;
        const points = params.labelLinePoints;
        // Update the end point.
        points[2][0] = isLeft
          ? params.labelRect.x
          : params.labelRect.x + params.labelRect.width;

        return {
          verticalAlign : "bottom",
          labelLinePoints: points
        };
      },
      data: [{
        value: 40,
        name: 'Private Sale',
        label: {
          color: '#2D4665',
        },
        itemStyle: {
          color: '#2D4665',
        },
      }, {
          value: 20,
          name: 'Team Lock',
          label: {
            color: '#19709A',
          },
          itemStyle: {
            color: '#19709A',
          },
        }, {
          value: 25,
          name: 'Ecosystem Fund',
          label: {
            color: '#00D6D8',
          },
          itemStyle: {
            color: '#00D6D8',
          },
        }, {
          value: 10,
          name: 'Marketing',
          label: {
            color: '#00FF95',
          },
          itemStyle: {
            color: '#00FF95',
          },
        }, {
          value: 5,
          name: 'Airdrop',
          label: {
            color: '#00BEFF',
          },
          itemStyle: {
            color: '#00BEFF',

          },
        }],
    }],
  })
});

const isMore = ref(true);

if (isMobile) {
  isMore.value = false;
}

function showMore(val: boolean) {
  isMore.value = val;
} 

const links = await queryContent('/links').findOne()
</script>

<template>
  <div class="token-page">
    <section class="container is-max-widescreen intro">
      <div class="vite-hero">
        <h1 class="title">VITE: Powering the Fast and Fee-less Network</h1>

        <figure class="image only-mobile">
          <img src="../assets/images/token/intro.svg" alt="VITE TOKEN" />
        </figure>

        <div class="is-grid">
          <div class="desc only-mobile" v-show="!isMore">
            <p>
              VITE is the native currency of the Vite network. It is used to secure the network in a Hierarchical Delegated Proof of Stake system.
            </p>
            <a class="more" @click="showMore(true)">
              <span>More</span>
              <iconify-icon icon="mdi:arrow-right" width="24" height="24" />
            </a>
          </div>
          <div class="desc" v-show="isMore">
            <p>VITE is the native currency of the Vite network. It is used to secure the network in a Hierarchical Delegated Proof of Stake system. VITE is also used to obtain computational power in the form of Quota. This process is called locking. Quota is then consumed to pay for transactions on the network. The VITE locked for Quota can be unlocked and redeemed at no loss to the user, making Vite a truly zero-fee layer1 chain.</p>
            <p>For trading purposes, VITE is now convertible to <a class="is-vite-blue" href="https://etherscan.io/token/0xadd5e881984783dd432f80381fb52f45b53f3e70" target="_blank">VITE ERC-20 token</a> and <a class="is-vite-blue" href="https://bscscan.com/token/0x2794dad4077602ed25a88d03781528d1637898b4" target="_blank">VITE BEP-20 token</a>. Users can easily deposit or withdraw between the native Vite chain and Ethereum or BSC. Here are our contract audit reports for <a class="is-vite-blue" href="https://vite.org/audit/Audit-Report-VITE-ERC20-v1.0.pdf" target="_blank">VITE ERC-20</a> and <a class="is-vite-blue" href="https://vite.org/audit/Audit-Report-VITE-BEP20-v1.0.pdf" target="_blank">VITE BEP-20</a>.</p>

            <a class="less only-mobile" @click="showMore(false)">
              <span>Less</span>
              <iconify-icon icon="mdi:arrow-up" width="24" height="24" />
            </a>
          </div>

          <figure class="image except-mobile">
            <img src="../assets/images/token/intro.svg" alt="VITE TOKEN" />
          </figure>
        </div>
        <div class="buttons">
          <a class="button is-medium is-vite-dark" href="https://vitescan.io/token/tti_5649544520544f4b454e6e40" target="_blank">Native VITE</a>
          <a class="button is-medium is-vite-light" href="https://etherscan.io/token/0xadd5e881984783dd432f80381fb52f45b53f3e70" target="_blank">BEP-20 VITE Contract</a>
          <a class="button is-medium is-vite-light" href="https://bscscan.com/token/0x2794dad4077602ed25a88d03781528d1637898b4" target="_blank">ERC-20 VITE Contract </a>
        </div>
      </div>

      <div class="ellipse-left only-mobile"></div>
      <div class="ellipse-right only-mobile"></div>
    </section>

    <section class="container token-distribution">
      <div class="container is-max-widescreen vite-hero">
        <h1 class="title">Token Distribution</h1>
        <div class="is-grid">
          <a class="vite-box is-vite-blue">
            <p>Coin:</p>
            <strong>VITE</strong>
          </a>
          <a class="vite-box is-vite-blue">
            <p>Issuance Date:</p>
            <strong>June 15, 2018</strong>
          </a>
          <a class="vite-box is-vite-blue">
            <p>Initial Total Supply:</p>
            <strong>1,000,000,000</strong>
          </a>
        </div>
      </div>
    </section>

    <section class="container is-max-widescreen">
      <div class="pie-chart" ref="pieChartEl"></div>
    </section>

    <section class="container is-max-widescreen use-case">
      <div class="ellipse">
        <div class="ellipse-left"></div>
        <div class="ellipse-right"></div>
      </div>
      <div class="vite-hero">
        <h1 class="title">Use Case</h1>
        <div class="is-grid">
          <div class="vite-card">
            <section>
              <h3 class="title">Get Quota</h3>
              <p class="desc mb-6">In the Vite network, users can lock VITE to obtain Quota. Quota is then consumed to pay for transactions. The consumed Quota will replenish over time as long as VITE remains locked in the system. The locked VITE can be redeemed at no loss.</p>
            </section>
            <a class="is-vite-blue-darker" href="#">
              <span class="icon-text">
                <span class="is-size-5 has-text-weight-bold">Learn How</span>
                <span class="icon">
                  <iconify-icon icon="mdi:arrow-right" width="24" height="24" />
                </span>
              </span>
            </a>
          </div>
          <div class="vite-card">
            <section>
              <h3 class="title">Stake as Mining</h3>
              <p class="desc pb-2 mb-5">On the ViteX exchange, users can mine platform token VX by staking VITE. Staked VITE coins can be retrieved in three days and is locked for seven days before coins credited to each user's account. Please note that there are no rewards during the retrieval time mentioned above.</p>
            </section>
            <a class="is-vite-blue-darker" href="#">
              <span class="icon-text">
                <span class="is-size-5 has-text-weight-bold">Learn About Staking Rules</span>
                <span class="icon">
                  <iconify-icon icon="mdi:arrow-right" width="24" height="24" />
                </span>
              </span>
            </a>
          </div>
          <div class="vite-card">
            <section>
              <h3 class="title">Vote for an SBP</h3>
              <p class="desc">The super nodes in the Vite network are called Snapshot Block Producers, aka SBPs. Users can use the unlocked VITE to vote for the SBPs. Some, not all, SBPs share their block rewards with the voters.</p>
            </section>
            <a class="is-vite-blue-darker" href="#">
              <span class="icon-text">
                <span class="is-size-5 has-text-weight-bold">See Tutorial</span>
                <span class="icon">
                  <iconify-icon icon="mdi:arrow-right" width="24" height="24" />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="how-to-get">
      <div class="container is-max-widescreen vite-hero">
        <h1 class="title">How to Get VITE Coin</h1>
        <div class="vite-card is-grid">
          <figure class="image">
            <img src="../assets/images/icons/icon-checkmark.svg" alt="icon checkmark" />
          </figure>
          <div class="block">
            <h3 class="title">Purchase in the following exchanges:</h3>
            <div class="is-flex exchange">
              <a :href="links.exchange.binance" target="_blank" class="button">
                <img src="../assets/images/exchange/binance.svg" class="binance" alt="Binance">
              </a>
              <a :href="links.exchange.binanceUS" target="_blank" class="button">
                <img src="../assets/images/exchange/binance_us.svg" class="binance" alt="Binance US">
              </a>
              <a :href="links.exchange.vitex" target="_blank" class="button">
                <img src="../assets/images/exchange/vitex.svg" class="vitex" alt="VITE X">
              </a>
              <a :href="links.exchange.bittrex" target="_blank" class="button">
                <img src="../assets/images/exchange/bittrex.svg" class="bittrex" alt="bittrex">
              </a>
              <a :href="links.exchange.coinex" target="_blank" class="button">
                <img src="../assets/images/exchange/coinex.svg" class="coinex" alt="CoinEx">
              </a>
              <a :href="links.exchange.wazirx" target="_blank" class="button">
                <img src="../assets/images/exchange/wazirx.svg" class="wazirx" alt="wazirx">
              </a>
              <a :href="links.exchange.bitrue" target="_blank" class="button">
                <img src="../assets/images/exchange/bitrue.png" class="bitrue" alt="Bitrue">
              </a>
              <a :href="links.exchange.uniswap" target="_blank" class="button">
                <img src="../assets/images/exchange/uniswap.svg" class="uniswap" alt="uniswap">
              </a>
              <a :href="links.exchange.sushiswap" target="_blank" class="button">
                <img src="../assets/images/exchange/sushiswap.png" class="sushiswap" alt="Sushi Swap">
              </a>
              <a :href="links.exchange.oneinch" target="_blank" class="button">
                <img src="../assets/images/exchange/1inch.svg" class="oneinch" alt="1 inch">
              </a>
              <a :href="links.exchange.pancakeswap" target="_blank" class="button">
                <img src="../assets/images/exchange/pancakeswap.svg" class="pancakeswap" alt="Pancake Swap">
              </a>
            </div>
          </div>
        </div>

        <div class="vite-card is-grid">
          <figure class="image">
            <img src="../assets/images/icons/icon-checkmark.svg" alt="icon checkmark" />
          </figure>
          <div class="block">
            <h3 class="title">Run a full node and share the daily Full Node Rewards</h3>
            <p class="desc">Run a full node and share the daily Full Node Rewards.</p>
            <div class="buttons">
              <a :href="links.docs.sbp" target="_blank" class="button is-medium is-vite-light">Learn More</a>
            </div>
          </div>
        </div>

        <div class="vite-card is-grid">
          <figure class="image">
            <img src="../assets/images/icons/icon-checkmark.svg" alt="icon checkmark" />
          </figure>
          <div class="block">
            <h3 class="title">Become a Snapshot Block Producer (SBP)</h3>
            <p class="desc">Stake 1 million VITE to become an SBP and earn SBP Rewards.</p>
            <div class="buttons">
              <a :href="links.docs.fullnode" class="button is-medium is-vite-light">Learn More</a>
            </div>
          </div>
        </div>

        <div class="vite-card is-grid">
          <figure class="image">
            <img src="../assets/images/icons/icon-checkmark.svg" alt="icon checkmark" />
          </figure>
          <div class="block">
            <h3 class="title">Vote for SBP</h3>
            <p class="desc">VITE holders can vote for an SBP and enjoy voting rewards. View the latest SBP list distributing voting rewards on our Vite forum or contact our community managers for more information.</p>
            <div class="buttons">
              <a :href="links.tutorial.vote" class="button is-medium is-vite-light">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container is-max-widescreen partners vite-hero">
      <h1 class="title">Partners</h1>
      <div class="is-flex list">
        <a :href="links.partners.alchemy" target="_blank" class="button">
          <img src="../assets/images/partners/alchemy.svg" class="alchemy" alt="alchemy">
        </a>
        <a :href="links.partners.ankr" target="_blank" class="button">
          <img src="../assets/images/partners/ankr.svg" class="ankr" alt="ankr">
        </a>
        <a :href="links.partners.btcCom" target="_blank" class="button">
          <img src="../assets/images/partners/btc.com.svg" class="btc-com" alt="btc.com">
        </a>
        <a :href="links.partners.harmony" target="_blank" class="button">
          <img src="../assets/images/partners/harmony.svg" class="harmony" alt="harmony">
        </a>
        <a :href="links.partners.hashfin" target="_blank" class="button">
          <img src="../assets/images/partners/hashfin.svg" class="hashfin" alt="hashfin">
        </a>
        <a :href="links.partners.okx" target="_blank" class="button">
          <img src="../assets/images/partners/okx.svg" class="okx" alt="okx">
        </a>
        <a :href="links.partners.chainlink" target="_blank" class="button">
          <img src="../assets/images/partners/chainlink.svg" class="chainlink" alt="chainlink">
        </a>
        <a :href="links.partners.hashquark" target="_blank" class="button">
          <img src="../assets/images/partners/hashquark.svg" class="hashquark" alt="hashquark">
        </a>
        <a :href="links.partners.f2pool" target="_blank" class="button">
          <img src="../assets/images/partners/f2pool.svg" class="f2pool" alt="f2pool">
        </a>
        <a :href="links.partners.infstones" target="_blank" class="button">
          <img src="../assets/images/partners/infstones.svg" class="infstones" alt="infstones">
        </a>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/main.scss" as *;

.intro {
  padding: 100px 0 120px;

  .vite-hero {
    .title {
      font-size: 4.5rem;
      margin-bottom: 1.25rem;
    }
    .desc{
      margin-top: 1px;
      p:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
    .buttons {
      margin-top: 40px;
    }
  }

  .is-grid {
    grid-template-columns: 1fr 448px;
  }

  @include addPaddingInTouch;

  @include mobile {
    position: relative;
    overflow: hidden;
    padding: 20px 1rem 60px;

    .is-grid {
      grid-template-columns: unset;
    }

    .vite-hero {
      .title {
        font-size: 44px;
        padding-right: 0;
        margin-bottom: 20px;
      }

      .image {
        margin-bottom: 20px;
      }

      .desc {
        margin-right: 0;
        font-size: 18px;
        margin-bottom: 20px;
      }

      .buttons {
        margin-top: 0;
      }
      
      .more,
      .less {
        display: flex;
        align-items: center;
        font-weight: 800;
        span {
        margin-right: 6px;
}
      }

    }

    .ellipse-left {
      @include ellipse;
      bottom: -210px;
      left: -5%;

      background: $vite-bg-blue;
    }

    .ellipse-right {
      @include ellipse;
      bottom: -210px;
      right: -5%;

      background: $vite-bg-green;
    }

  }

}

.token-distribution {
  background: $grey-darker url("/assets/images/token/wave.svg") bottom no-repeat;
  border-radius: 32px;
  margin-bottom: 120px;
  
  padding: 60px 32px 80px;

  .is-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .vite-hero {
    .title {
      color: #fff;
      margin-bottom: 100px;
    }

    .vite-box {
      border: none;
    }

    .is-vite-blue {
      color: $grey-dark;
      background: #fff;
      font-size: 1.25rem;
      strong {
        font-size: 1.875rem;
        color: $grey-darker;
      }
      &:hover {
        color: #fff;
        text-decoration: none;
        strong {
          color: #fff;
        }
      }
    }
  }

  @include mobile {
    background: $grey-darker url("/assets/images/token/wave-m.svg") no-repeat;
    background-position: center bottom;
    background-size: 100%;
    margin: 60px 1rem 0;
    padding: 40px 30px 60px;

    .is-grid {
      grid-template-columns: unset;
      gap: 20px;
    }
    
    .vite-hero {

      .title {
        margin-bottom: 20px;
      }

      .vite-box {
        padding: 20px 24px;

        p {
          font-size: 16px;
        }

        strong {
          font-size: 24px;
        }
      }
    }
  }

}

.pie-chart {
  width: 100%;
  height: 700px;

  @include mobile {
    height: 400px;
  }
}

.use-case {
  position: relative;
  margin-top: 120px;
  margin-bottom: 120px;

  .ellipse {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: -1;
  }

  .ellipse-left {
    @include ellipse;
    top: -634px;
    left: 0;

    background: $vite-bg-green;
  }

  .ellipse-right {
    @include ellipse;
    top: -634px;
    right: 0;

    background: $vite-bg-blue;

  }

  .vite-hero {
    padding-top: 120px;

    @include addPaddingInTouch;
  }

  .is-grid {
    margin-top: 50px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @include mobile {
    margin-top: 60px;
    margin-bottom: 60px;

    .ellipse-left {
      top: -160px;
      left: -10px
    }
    .ellipse-right {
      top: -160px;
      right: -10px;
    }

    .is-grid {
      margin-top: 20px;
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .vite-hero {
      padding-top: 60px;
      
      .vite-card {
        h3 {
          font-size: 24px;
        }
        p {
          font-size: 16px;
        }
      }
    }
  }
}

.how-to-get{
  background-color: #F5FAFF;
  padding-top: 120px;
  padding-bottom: 90px;

  @include addPaddingInTouch;

  .vite-hero .title {
    margin-bottom: 50px;
  }

  .vite-card {
    grid-template-columns: 64px 1fr;

    background-color: #fff;
    padding: 40px 60px;
    margin-bottom: 30px;

    .title {
      line-height: 1.3;
      margin-bottom: 1.5rem;
      color: $grey-darker;
    }
    .desc {
      font-size: 1.25rem;
      margin-bottom: 30px;
      color: $grey-darker;
    }

  }

  .exchange {
    flex-wrap: wrap;
    gap: 20px;

    .button {
      height: 78px;
      padding: 0 24px;

      .binance,
      .pancakeswap {
        height: 30px;
      }
      .vitex {
        height: 51px;
      }
      .sushiswap,
      .bittrex {
        height: 32px;
      }
      .uniswap,
      .coinex {
        height: 36px;
      }
      .wazirx {
        height: 34px;
      }
      .bitrue {
        height: 38px;
      }
      .oneinch {
        height: 49px;
      }
    }
  }

  @include mobile {
    padding: 40px 1rem 20px;

    .vite-hero .title {
      margin-bottom: 20px;
    }

    .vite-card {
      grid-template-columns: unset;
      gap: 20px;

      margin-bottom: 20px;
      padding: 30px;

      .image {
        width: 64px;
        height: 64px;
      }
    }

    .exchange {
      .button {
        height: 50px;
        padding: 0 12px;

        .binance,
        .pancakeswap {
          height: 20px;
        }
        .vitex {
          height: 34px;
        }
        .sushiswap,
        .bittrex {
          height: 21px;
        }
        .uniswap,
        .coinex {
          height: 24px;
        }
        .wazirx {
          height: 23px;
        }
        .bitrue {
          height: 25px;
        }
        .oneinch {
          height: 33px;
        }
      }
    }

  }

}

.partners {
  margin-top: 120px;
  margin-bottom: 120px;

  @include addPaddingInTouch;

  .list {
    margin-top: 50px;
    flex-wrap: wrap;
    gap: 20px;
    .button {
      height: 78px;
      padding: 0 24px;

    }
  }

  @include mobile {
    margin: 60px 0;

    .list {
      margin-top: 20px;
      gap: 10px;
      .button {
        height: 50px;
        padding: 0 12px;
        img {
          height: 28px;
          &.btc-com {
            height: 20px;
          }
          &.infstones {
            height: 100px;
          }
        }
      }
    }
  }
}
</style>

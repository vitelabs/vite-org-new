<script setup lang="ts">
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import { LegendComponent } from 'echarts/components';
import mobile from 'is-mobile';

useHead({
  title: 'DAO',
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
  let itemGap = 50;
  let radius = ['24%', '62%'];
  let fontSize = '34px';
  let labelLength = 20;
  let seriesTop = '15';
  let seriesLeft = '40%';
  let seriesBottom = '50';
  if (isMobile) {
    itemGap = 16;
    radius = ['20%', '50%'];
    seriesTop = '0';
    seriesLeft = '0';
    seriesBottom = '50';
    fontSize = '18px';
  }
  chart.setOption({
    legend: {
      show: true,
      left: '0',
      right: '0',
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
      top: seriesTop,
      left: seriesLeft,
      bottom: seriesBottom,
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
        value: 50,
        name: 'VITE holder',
        label: {
          color: '#2D4665',
        },
        itemStyle: {
          color: '#2D4665',
        },
      }, {
          value: 20,
          name: 'DAO vote rewards',
          label: {
            color: '#19709A',
          },
          itemStyle: {
            color: '#19709A',
          },
        }, {
          value: 10,
          name: 'VX holder',
          label: {
            color: '#208CB7',
          },
          itemStyle: {
            color: '#208CB7',
          },
        }, {
          value: 10,
          name: 'Staking VITE',
          label: {
            color: '#00D6D8',
          },
          itemStyle: {
            color: '#00D6D8',
          },
        }, {
          value: 5,
          name: 'Team and LP',
          label: {
            color: '#00FF95',
          },
          itemStyle: {
            color: '#00FF95',

          },
        }, {
          value: 5,
          name: 'TOP community projects',
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

const links = await queryContent('/links').findOne()
</script>

<template>
  <div class="dao-page">
    <section class="container is-max-widescreen intro">
      <div class="is-grid">
        <div class="vite-hero">
          <h1 class="title">Vite DAO</h1>
          <figure class="image only-mobile">
            <img src="../assets/images/dao/intro.svg" alt="DAO" />
          </figure>
          <p class="desc">VDAO democratizes governance and fosters inclusivity in the Vite ecosystem by involving the
            entire community in decision-making, ensuring diverse perspectives are reflected. It drives community
            engagement, innovation, resilience, and sustainable growth.
          </p>
        </div>
        <figure class="image except-mobile">
          <img src="../assets/images/dao/intro.svg" alt="DAO" />
        </figure>
      </div>
      <div class="buttons">
        <a target="_blank" :href="links.dao.home" class="button is-medium is-vite-dark">Governing now</a>
        <a target="_blank" :href="links.dao.more" class="button is-medium is-vite-light">More</a>
      </div>
      <div class="ellipse-left"></div>
      <div class="ellipse-right"></div>
    </section>

    <section class="container is-max-widescreen vite-hero why-vdao">
      <h1 class="title">Why VDAO</h1>
      <p class="desc">The decision to introduce VDAO stems from several key factors</p>

      <div class="is-grid">
        <div class="vite-card">
          <h3 class="title has-text-white is-flex is-align-items-center">
            <img src="../assets/images/dao/thumb.svg" alt="Inclusivity" />
            <span>Inclusivity</span>
          </h3>
          <p class="is-size-5 has-text-white">VDAO ensures all Vite community members, regardless of token holdings, have a say in governance, fostering ownership, responsibility, and consensus-driven decisions.</p>
        </div>
        <div class="vite-card">
          <h3 class="title has-text-white is-flex">
            <img src="../assets/images/dao/bulb.svg" alt="Democratization of Governance" />
            <span>Democratization of Governance</span>
          </h3>
          <p class="is-size-5 has-text-white">By expanding participation beyond VITE holders, VDAO democratizes governance, allowing all community members to contribute ideas, vote, and shape the ecosystem.</p>
        </div>
        <div class="vite-card">
          <h3 class="title has-text-white is-flex">
            <img src="../assets/images/dao/user.svg" alt="Amplified Community Voice" />
            <span>Amplified Community Voice</span>
          </h3>
          <p class="is-size-5 has-text-white">VDAO amplifies the community's voice, ensuring diverse perspectives shape decisions. This leads to proposals that reflect the collective interests and values of the entire Vite community, promoting equitable and transparent governance.</p>
        </div>
        <div class="vite-card">
          <h3 class="title has-text-white is-flex">
            <img src="../assets/images/dao/chart.svg" alt="Driving Innovation and Growth" />
            <span>Driving Innovation and Growth</span>
          </h3>
          <p class="is-size-5 has-text-white">By harnessing the community's collective intelligence and creativity, VDAO drives innovation and growth in the Vite ecosystem. Community-driven initiatives align with user needs, resulting in impactful solutions.</p>
        </div>
      </div>
    </section>
    
    <section class="container is-max-widescreen vite-hero vdao-distribution">
      <h1 class="title">VDAO Distribution</h1>
      <div class="desc-container">
        <div class="key-info">
          <p>
            <strong>Total Supply:</strong> 2,174,226,156
          </p>
          <p>
            <strong>Network:</strong> VITE Chain / BSC
          </p>
        </div>
        <p class="desc">A specialized governance token for VITE DAO ensures VDAO holders have exclusive voting rights and participation privileges, distinct from VITE and VX tokens, promoting streamlined and focused community governance.</p>
      </div>
      <div class="is-grid">
        <div class="pie-chart" ref="pieChartEl"></div>
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

.why-vdao {
  padding: 95px 0 120px;
  @include addPaddingInTouch;

  .is-grid {
    margin-top: 40px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @include mobile {
    padding: 60px 1rem;

    .is-grid {
      margin-top: 20px;
      gap: 20px;
      grid-template-columns: 1fr;
    }
  }

  .vite-card {
    grid-template-rows: 81px 1fr;
    row-gap: 40px;
    background: linear-gradient(57.42deg, $vite-blue 39.1%, $vite-green 107.82%);
    border: none;
    border-radius: 15px;
    padding: 20px;

    .title {
      margin-bottom: 0;
      column-gap: 20px;
      font-size: 40px;
      line-height: 1.325;
    }

    @include touch {
      .title {
        font-size: 24px;
      }
    }
  }
}

.vdao-distribution {
  position: relative;
  margin-bottom: 60px;

  @include addPaddingInTouch;

  h1.title {
    margin-bottom: -50px;

    @include mobile {
      margin-bottom: 1rem;
    }
  }

  .desc-container {
    position: absolute;
    top: 140px;
    left: 0;
    width: 38%;
    
    .key-info {
      line-height: 2;
    }
    
    .desc {
      margin-top: 50px;
    }
    
    @include mobile {
      position: static;
      width: 100%;
      
      .desc {
        margin-top: 30px;
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
  
}

</style>
<!-- client/src/components/InteractiveMap.vue -->
<template>
    <v-container>
      <h2 class="section-title">Interactive UK Shipping Map</h2>
      <div class="map-container">
        <svg
          id="map"
          ref="map"
          viewBox="0 0 600 600"
          style="width: 100%; height: auto;"
          @click="animateRegion"
        >
          <!-- Replace these paths with a real SVG map of the UK -->
          <g>
            <path
              id="southwest"
              d="M100,150 L200,150 L200,250 L100,250 Z"
              class="map-region"
            ></path>
            <path
              id="northwest"
              d="M200,100 L300,100 L300,200 L200,200 Z"
              class="map-region"
            ></path>
            <path
              id="northeast"
              d="M300,50 L400,50 L400,150 L300,150 Z"
              class="map-region"
            ></path>
          </g>
        </svg>
      </div>
    </v-container>
  </template>
  
  <script>
  import gsap from 'gsap';
  
  export default {
    name: 'InteractiveMap',
    methods: {
      animateRegion(event) {
        // Animate clicked region using GSAP
        const targetRegion = event.target;
        if (targetRegion && targetRegion.classList.contains('map-region')) {
          gsap.to(targetRegion, {
            scale: 1.2,
            fill: '#42a5f5',
            transformOrigin: 'center center',
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
            onComplete: () => {
              gsap.to(targetRegion, { scale: 1, fill: '#1976d2', duration: 0.5 });
            },
          });
        }
      },
    },
    mounted() {
      // GSAP hover animations for map regions
      gsap.utils.toArray('.map-region').forEach((region) => {
        gsap.fromTo(
          region,
          { fill: '#1976d2' },
          {
            fill: '#42a5f5',
            duration: 0.3,
            ease: 'power1.inOut',
            paused: true,
            onReverseComplete: () => (region.style.fill = '#1976d2'),
          }
        );
  
        region.addEventListener('mouseenter', () => {
          gsap.to(region, { fill: '#42a5f5', duration: 0.3 });
        });
        region.addEventListener('mouseleave', () => {
          gsap.to(region, { fill: '#1976d2', duration: 0.3 });
        });
      });
    },
  };
  </script>
  
  <style scoped>
  .map-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .map-region {
    fill: #1976d2;
    cursor: pointer;
    stroke: #fff;
    stroke-width: 2;
    transition: fill 0.3s ease;
  }
  
  .section-title {
    text-align: center;
    margin: 30px 0;
  }
  </style>
  
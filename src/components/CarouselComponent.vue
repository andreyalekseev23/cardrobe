<template>
  <VueSlickCarousel class="slider" v-bind="settings">
      <div class="slider__slide" v-for="(slide, index) of slides" :key="index">
        <img :src="slide" alt="" class="slider__img">
      </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "CarouselComponent",
  components: {
    VueSlickCarousel
  },
  props: {
    slides: Array,
  },
  data () {
    return {
      settings: {
        dots: true,
        arrows: false,
        swipe: true,
        autoplay: true
      }
    }
  }
}
</script>

<style scoped lang="scss">

.slider {
  max-width: 1200px;
  width: 100%;

  &__slide {
    width: 100%;
    height: 400px;
    display: flex!important;
    justify-content: center;
  }
  &__img {
    width: auto;
    height: 100%;
  }
  &__arrow {
    width: 40px;
    height: 40px;
    display: flex!important;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border: 2px solid #282828;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    z-index: 1;
  }
  &__prev {
    left: -20px;
    right: auto;
  }
  &__next {
    right: -20x;
    left: auto;
  }
}
</style>
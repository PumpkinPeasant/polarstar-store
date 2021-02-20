<template>
  <div>
    <carousel>
      <carouselslide v-for="(slide,index) in slides" :key="slide" :index="index">
        <v-img :src="slide"></v-img>
      </carouselslide>
    </carousel>
  </div>
</template>


<script>
import carousel from '@/components/mainPage/Carousel';
import carouselslide from '@/components/mainPage/CarouselSlide';

export default {
name: "MainSection",
  components: {
    carousel,
    carouselslide
  },
  data () {
    return {
     slides: [
       '@/assets/images/mainPage/navlights1.png',
       '@/assets/images/mainPage/navlights2.png',
       '@/assets/images/mainPage/navlights3.png',
     ],
      visibleSlide: 0,
    }
  },
}
</script>

<style scoped>

</style>

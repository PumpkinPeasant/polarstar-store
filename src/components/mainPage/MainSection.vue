<template>
  <div class="carousel">
    <carousel
    @nextSlide="nextSlide"
    @prevSlide="prevSlide"
    >
      <carouselslide v-for="(slide,index) in slides"
                     :key="slide.img"
                     :index="index"
                     :visibleSlide="visibleSlide"
      >
        <h1 class="slide__title">{{slide.title}}</h1>
        <p class="slide__model">Модель <span class="slide__model__name">{{slide.model}}</span></p>
        <img class="slide__img" :src="getImgUrl(slide.img)" :alt="slide"/>
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
       {title: 'Навигационные огни',model:'Tricolor RB 2NM',img:'navlights1.png',},
       {title: 'Палубные светильники',model:'Bunk Side LED Duo-Light',img:'navlights2.png',},
       {title: 'Поисковые прожекторы',model:'SL40 R5 Xenon',img:'navlights3.png',},
     ],
      visibleSlide: 0,
    }
  },
  computed:{
    slidesLength(){
      return this.slides.length
    }
  },
  methods:{
    getImgUrl(pic) {
      return require('../../assets/images/mainPage/'+pic)
    },
    nextSlide(){
      if(this.visibleSlide >= this.slidesLength - 1){
        this.visibleSlide = 0
      }
      else{
        this.visibleSlide++
      }
    },
    prevSlide(){
      if(this.visibleSlide <= 0){
        this.visibleSlide = this.slidesLength - 1
      }
      else{
        this.visibleSlide--
      }
    }
  }
}
</script>

<style scoped>
h1{
  color:#F2F2F2;
  font-family: Jost,sans-serif;
  font-weight: normal;
  font-size: 96px;
  letter-spacing: -0.03em;;
}
p{
  color:#F2F2F2;
}
.carousel{
  border: 2px solid #18ffff;
  background-color: white;
  overflow: hidden;
}
.slide__model{
  font-family: Montserrat,sans-serif;

}
.slide__img{
  max-width: 800px;
  max-height: 500px;
}
.slide__title{

}
.slide__model__name{
  color:#5BC0BE;
}
</style>

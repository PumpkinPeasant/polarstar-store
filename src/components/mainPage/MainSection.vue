<template>
    <section class="carousel">
      <div class="container">

        <carousel class="main__slide"
        @nextSlide="nextSlide"
        @prevSlide="prevSlide"
        @changeSlide="changeSlide"
        :visibleSlide="visibleSlide"
        >
        <carouselslide  class="slide" v-for="(slide,index) in slides"
                       :key="slide.img"
                       :index="index"
                       :visibleSlide="visibleSlide"
        >
         

            <h1 class="slide__title">{{slide.title}}</h1>
            <div class="slide__text">

              <div class="slide__block"> 
                <p class="slide__model">Модель <span class="slide__model__name">{{slide.model}}</span></p>

                <div class="slide__inner">
                  <div class="slide__round">
                    <div class="slide__round__param">{{slide.param1}}</div>
                    <div class="slide__round__param">{{slide.param2}}</div>
                    <div class="slide__round__param">{{slide.param3}}</div>
                    <div class="slide__round__param">{{slide.param4}}</div>
                  </div>

            
                  <p class="slide__description">{{slide.description}}</p>
                  <button class="slide__catalog__btn" @click="$router.push('/catalog')">В каталог</button>
                </div>
               </div>

              <img class="slide__img" :src="getImgUrl(slide.img)" :alt="slide"/>
           </div>
            <!--<div class="main__section_wave">
              <img :src="getImgUrl(slide.wave)" alt="">
             </div>-->

          </carouselslide>
        </carousel>

       </div>
        
    </section>

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
       {title: 'Навигационные огни',model:'Tricolor RB 2NM',param1:'6nm',param2:'IP67',param3:'360°',param4:'24V',
         description:'В настоящее время в качестве навигационных огней используются электрические фонари, снабженные линзами Френеля и ' +
             'светофильтрами.',img:'navlights1.png',wave:'wave1.svg'},
       {title: 'Палубные светильники',model:'Bunk Side LED Duo-Light',param1:'80Lm',param2:'IP56',param3:'120°',param4:'30V',
         description:'Палубный светильник для морских и речных судов это влагозащищенное осветительное оборудование из ' +
             'коррозионностойких материалов со степенью защиты не ниже IP56. ',img:'navlights2.png',wave:'wave2.svg'},
       {title: 'Поисковые прожекторы',model:'SL40 R5 Xenon',param1:'9.2км',param2:'IP56',param3:'-40°',param4:'230V',
         description:'Поисковый прожектор это специализированное оборудование, предназначенное для своевременного обнаружения опасностей ' +
             'при морской навигации. ',img:'navlights3.png',wave:'wave3.svg'},
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
    },
    changeSlide(checkedRadioNum){
      this.visibleSlide = checkedRadioNum
    }
  }
}
</script>

<style scoped>

.main__slide {
 position: relative;
}

.carousel {
  background-color: white;
  overflow: hidden;
}


.slide {
  padding-top: 40px;
   outline: 2px solid red;
}


h1{
  color:#F2F2F2;
  font-family: Jost,sans-serif;
  font-weight: normal;
  font-size: 64px;
  letter-spacing: -0.03em;
  line-height:  60px;
  margin-bottom: 48px;
  outline: 2px solid black;
}

.slide__text{
   display: flex;
   outline: 8px solid green;
}

p{
  color:#F2F2F2;
  font-size: 23px;
}



.slide__model {
  font-family: Montserrat, sans-serif;
  font-weight: 100;
  font-size: 25px;

  outline: 2px solid black;
}

.slide__model  span {
  font-size: 20px;
}

.slide__block {
  
  outline: 5px solid yellow;
}

.slide__img{
  display: block;
  margin-left: 60px;
  max-width: 560px;
  max-height: 500px;
}


.slide__inner {
  width:360px;
   outline: 5px solid rgb(83, 10, 151);
}

  /***** slide__round  *****/

.slide__round {
  margin-bottom: 40px;
  outline: 2px solid black;
}

.slide__model__name{
  color:#5BC0BE;
  font-size: 30px;
  font-weight: bold;
}

.slide__round__param {
 
  color:#F2F2F2;
  font-family: Montserrat,sans-serif;
  font-size: 14px;
  font-weight: bold;
  width: 50px;
  height: 50px;
  border: 1px solid #5BC0BE;
  border-radius: 50%;
  line-height:  50px;
  text-align: center;
  display: inline-block;
  box-shadow: 0 0 5px rgba(112,234,231,0.7);
}

.slide__round__param + .slide__round__param {
   margin-left: 20px;
}

.slide__description {
  font-size: 18px;
  font-weight: 200;
  outline: 2px solid black;
  margin-bottom: 40px;
}

.slide__catalog__btn{
  background-color: #F2F2F2;
  font-family: Montserrat,sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #0B132B;
  padding: 10px 35px;
  border-radius: 7px;
  box-shadow: 0 0 9px rgba(112,234,231,0.7);
}
</style>

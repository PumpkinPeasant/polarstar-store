<template>
    <section class="mainSection">

      <carousel class="visibleSlide"
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
            <h1 class="slideTitle">{{slide.title}}</h1>
            <div class="slideContent">
              <div class="slideSideInformation">
                <p class="productModel">Модель <span class="slide__model__name">{{slide.model}}</span></p>
                  <div class="productRoundParameters">
                    <div class="productParameter">{{slide.param1}}</div>
                    <div class="productParameter">{{slide.param2}}</div>
                    <div class="productParameter">{{slide.param3}}</div>
                    <div class="productParameter">{{slide.param4}}</div>
                  </div>
                  <p class="productText">{{slide.description}}</p>
                  <div class="catalogButton" @click="$router.push('/catalog')">В каталог</div>
               </div>
              <div class="slideImageDiv">
                <img class="slideImage" :src="getImgUrl(slide.img)" :alt="slide"/>
              </div>
           </div>
          <div class="slideWave">
            <img :src="getImgUrl(slide.wave)" alt="">
          </div>
        </carouselslide>

      </carousel>

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

.mainSection{
  display: flex;
  width: 100%;
  height: 100vh;

}

.visibleSlide {
  z-index: 1;
}
.slide {
  display: flex;
  flex-direction: column;
  padding: 18vh 0 0 0;
}
.slideContent{
  display: grid;
  grid-template-columns: 5fr 7fr;
  padding: 5vh 0 0 0;
}

h1{
  color:#F2F2F2;
  font-family: Jost,sans-serif;
  font-weight: normal;
  font-size: 10vh;
  letter-spacing: -0.03em;
  line-height:  60px;
}



p{
  color:#F2F2F2;
  font-size: 23px;
}



.productModel {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 25px;
}

.productModel  span {
  font-weight: 500;
  font-size: 20px;
}

.slideSideInformation {

}
.slideImageDiv{
  display: flex;
  justify-content: center;
}
.slideImage{
  display: block;
  max-height: 55vh;
}




.productRoundParameters {
  margin-bottom: 40px;
}

.slide__model__name{
  color:#5BC0BE;
  font-size: 30px;
  font-weight: bold;
}

.productParameter {
  color:#F2F2F2;
  font-family: Montserrat,sans-serif;
  font-size: 16px;
  font-weight: bold;
  width: 60px;
  height: 60px;
  border: 1px solid #5BC0BE;
  border-radius: 50%;
  line-height: 60px;
  text-align: center;
  display: inline-block;
  margin: 15px;
  box-shadow: 0 0 5px rgba(112,234,231,0.7);
}

.productParameter + .productParameter {
   margin-left: 20px;
}

.productText {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 40px;
}

.catalogButton{
  display: flex;
  background-color: #F2F2F2;
  font-size: 18px;
  color: #0B132B;
  padding: 10px 35px;
  width: 12vw;
  border-radius: 7px;
  box-shadow: 0 0 9px rgba(112,234,231,0.7);
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
.catalogButton:hover{
  color: #F2F2F2;
  background-color: #0B132B;
  box-shadow: 0 0 9px rgba(11, 19, 43, 0.7);
}
.slideWave{
  position: absolute;
  width: 100vw;
  right: 0;
  z-index: -1;
  top: 60vh;
}
</style>

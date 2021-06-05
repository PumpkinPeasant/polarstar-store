<template>
  <div>
    <div class="carouselNavigation">
      <v-col cols="1" class="btnPrevious" @click="prevSlide">Previous</v-col>
      <slot></slot>
      <v-col cols="10" class="navDots">
        <input type="radio" name="slides" id="slide1" @change="changeSlide(0)" :checked="visibleSlide===0">
        <input type="radio" name="slides" id="slide2" @change="changeSlide(1)" :checked="visibleSlide===1">
        <input type="radio" name="slides" id="slide3" @change="changeSlide(2)" :checked="visibleSlide===2">
      </v-col>
      <v-col cols="1" class="btnNext" @click="nextSlide">Next</v-col>
    </div>

  </div>
</template>

<script>
export default {
name: "MainLayout",
  data: () => ({
  }),
  props:['visibleSlide']
  ,
  methods:{
    nextSlide(){
      this.$emit('nextSlide')
      console.log(this.visibleSlide)
    },
    prevSlide(){
      this.$emit('prevSlide')
      console.log(this.visibleSlide)
    },
    changeSlide(checkedRadioNum){
      this.$emit('changeSlide',checkedRadioNum)
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.carouselNavigation{
  border: white 3px solid;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.btnNext, .btnPrevious{
    color: white;
    width: 8vw;
  }
.btnNext:hover, .btnPrevious:hover{
  background-color: rgba(0,0,0,0.6);
}
.navDots{
  position: absolute;
  top: 80vh;
  right: -40vh;
}
</style>

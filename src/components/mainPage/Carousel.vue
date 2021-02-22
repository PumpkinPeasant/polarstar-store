<template>
  <div>
    <slot>

    </slot>
   <!-- <v-btn class="previous" @click="prevSlide">Previous</v-btn>-->
    <div class="previous">
      <input type="radio" name="slides" id="slide1" @change="changeSlide(0)" :checked="visibleSlide===0">
      <input type="radio" name="slides" id="slide2" @change="changeSlide(1)" :checked="visibleSlide===1">
      <input type="radio" name="slides" id="slide3" @change="changeSlide(2)" :checked="visibleSlide===2">
    </div>
   <!-- <v-btn class="next" @click="nextSlide">Next</v-btn>-->
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

<style>
  .previous{
    position: absolute;
    width: 80px;
    height: 80px;
    top: 33px;
   
   
    outline: 5px solid rebeccapurple;
  }

  input {
    margin-right: 10px;
  }
</style>

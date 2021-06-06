<template>
  <div>
    <div class="carouselNavigation">
      <v-col cols="1" class="btnPrevious" @click="prevSlide"></v-col>
      <slot></slot>
      <v-col cols="10" class="navDots">
        <div class="radio">
          <input class="dot" type="radio" name="slides" id="slide1" @change="changeSlide(0)" :checked="visibleSlide===0">
          <label for="slide1"></label>
        </div>

        <div class="radio">
          <input class="dot"  type="radio" name="slides" id="slide2" @change="changeSlide(1)" :checked="visibleSlide===1">
          <label for="slide2"></label>
        </div>

        <div class="radio">
            <input class="dot" type="radio" name="slides" id="slide3" @change="changeSlide(2)" :checked="visibleSlide===2">
          <label for="slide3"></label>
        </div>

      </v-col>
      <v-col cols="1" class="btnNext" @click="nextSlide"></v-col>
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
    },
    prevSlide(){
      this.$emit('prevSlide')
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
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.btnNext, .btnPrevious{
    color: white;
    width: 8vw;
    transition: 0.6s;
    cursor: pointer;
  }
.btnNext:hover, .btnPrevious:hover{
  background-color: rgba(0,0,0,0.3);
}
.navDots{
  position: absolute;
  display: flex;
  right: 8.3vw;
  justify-content: center;
  top: 85vh;

  }
.dot {
  position: absolute;
  z-index: -1;
  opacity: 0;

}

.dot+label {
  display: inline-flex;
  align-items: center;
  user-select: none;

}

.dot+label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  background-color: #5BC0BE;
  border-radius: 50%;
  margin-right: 0.5em;
  background-size: 50% 50%;
  cursor: pointer;
  transition: 0.3s;
}

.dot:not(:disabled):not(:checked)+label:hover::before {
  background-color: #7AD8D6;
}

.dot:not(:disabled):active+label::before {
  box-shadow: 0 0 5px 1px #7AD8D6;
}

.dot:checked+label::before {
  background-color: #FFFFFF;
  box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.75);
}



</style>

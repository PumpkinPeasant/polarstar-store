<template>
  <div>
    <slot>

    </slot>
    <v-btn class="next" @click="nextSlide">Next</v-btn>
      <input type="radio" value='0'>
      <input type="radio" value='1'>
      <input type="radio" value='2'>

    <v-btn class="previous" @click="prevSlide">Previous</v-btn>
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
  }
}
</script>

<style scoped>

</style>

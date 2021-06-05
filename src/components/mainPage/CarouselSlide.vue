<template>
  <v-col cols="10" v-show="visibleSlide === index" class="carouselSlide">
    <slot></slot>
  </v-col>
</template>

<script>
export default {
  name: "CarouselSlide",
  props:['visibleSlide','index']
}
</script>

<style scoped>

</style>

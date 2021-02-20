<template>
  <v-main id="v-main" fluid>
    <Header/>
    <v-divider dark id="menu-divider"></v-divider>
    <v-container>
      <Carousel/>
    </v-container>
    <Footer/>
  </v-main>
</template>

<script>
import Header from '@/components/mainPage/Header';
import Footer from '@/components/mainPage/Footer';
import Carousel from '@/components/mainPage/Carousel';

export default {
  name: "MainPage",
  components: {
    Header,
    Footer,
    Carousel
  },
}
</script>

<style scoped>
#v-main{
  background: radial-gradient(#1C2541, #0B132B);
}
#menu-divider{
  margin-left: 1%;
  margin-right: 1%;
}
</style>

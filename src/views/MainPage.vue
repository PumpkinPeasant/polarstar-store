<template>
  <v-main id="v-main" fluid>
    <Header/>
    <v-container>
      <MainLayout/>
    </v-container>
    <Footer/>
  </v-main>
</template>

<script>
import Header from '@/components/mainPage/Header';
import Footer from '@/components/mainPage/Footer';
import MainLayout from '@/components/mainPage/MainLayout';

export default {
  name: "MainPage",
  components: {
    Header,
    Footer,
    MainLayout
  },
}
</script>

<style scoped>
#v-main{
  background: radial-gradient(#1C2541, #0B132B);
}
</style>

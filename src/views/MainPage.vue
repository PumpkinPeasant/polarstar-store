<template>
  <v-main id="v-main" fluid>
    <Header id="header"/>
    <v-divider dark id="menu__divider"></v-divider>
    <main-section id="mainSection">
    </main-section>
    <about-section id="aboutSection"></about-section>
    <Footer/>
  </v-main>
</template>

<script>
import Header from '@/components/mainPage/Header';
import Footer from '@/components/mainPage/Footer';
import MainSection from '@/components/mainPage/MainSection';
import AboutSection from "@/components/mainPage/AboutSection";
export default {
  name: "MainPage",
  components: {
    AboutSection,
    Header,
    Footer,
    MainSection
  },
}
</script>

<style scoped>

#mainSection {
  padding-top: 90px;
  background: radial-gradient(#1C2541, #0B132B);
}

#aboutSection {

  background: radial-gradient(#1C2541, #0B132B);

  border: 2px solid springgreen;
}
#v-main{
  background-color: lightblue;
}
#header{
  position: absolute;
  width: 100%;
}

/**
#menu-divider{
  margin-left: 1%;
  margin-right: 1%;
}**/

</style>

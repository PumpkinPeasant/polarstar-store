<template>
  <v-main id="v-main" fluid>
    <Header id="header"/>
    <v-divider dark id="menu__divider"></v-divider>
    <mainsection id="mainSection"></mainsection>

    <Footer/>
  </v-main>
</template>

<script>
import Header from '@/components/mainPage/Header';
import Footer from '@/components/mainPage/Footer';
import mainsection from '@/components/mainPage/MainSection';
export default {
  name: "MainPage",
  components: {
    Header,
    Footer,
    mainsection
  },
}
</script>

<style scoped>

#mainSection {
  padding-top: 90px;
  background: radial-gradient(#1C2541, #0B132B);
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

<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>

<style>
@font-face {
  font-family: "Jost";
  src: url("/assets/fonts/Jost.ttf") format("ttf");
}
@font-face {
  font-family: "Jost-Regular";
  src: url("/assets/fonts/Jost-Regular.ttf") format("ttf");
}
  body {
    margin: 0;
    padding: 0;
    color: #f2f2f2;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    -moz-box-align: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

</style>

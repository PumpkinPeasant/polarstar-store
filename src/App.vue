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

  /* container
  **********************/

  .container {
    width: 100%;
    max-width: 970px;
    margin: 0 auto;
    padding: 0 15px;

    outline: 2px solid green;
  }




</style>

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
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;

    background-image: url(./assets/images/mainPage/img.jpg) no-repeat;
    background-position: center;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    -moz-box-align: border-box;
  }

  p {
    margin: 0;
  }

  /* container
  **********************/

  .container {
    width: 100%;
    max-width: 940px;
    margin: 0 auto;
    padding: 0 15px;

    outline: 2px solid green;
  }




</style>

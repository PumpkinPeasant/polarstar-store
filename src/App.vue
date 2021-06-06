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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;300;400;600;700&display=swap');
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
.theme--dark.v-btn--active:hover::before, .theme--dark.v-btn--active::before {
    opacity: 0;
}
</style>

<template>
  <v-app-bar
  flat
  color="transparent"
  >
      <v-app-bar-title><v-img src="../../assets/logo.svg"></v-img></v-app-bar-title>
    <v-btn text
           tile
           color="#F2F2F2"
           v-for="(item, i) in menuItems" :key="`menuItem${i}`" :to="item.route">
      {{item.title}}
    </v-btn>
    <v-btn-toggle
        dense
        group
        color="#5BC0BE"
        dark
        v-model="toggle_lang"
    >
      <v-btn>
        RU
      </v-btn>
      <v-btn disabled>
        |
      </v-btn>
      <v-btn>
        EN
      </v-btn>
    </v-btn-toggle>
    <v-btn
        icon
        color="#F2F2F2"
    >
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
    <v-btn
        icon
        color="#F2F2F2">
      <v-badge
          color="#5BC0BE"
          content="6"
          bottom>
          <v-icon>mdi-cart-outline</v-icon>
      </v-badge>

    </v-btn>

  </v-app-bar>
</template>

<script>


export default {
name: "Header",
  data () {
    return {
      toggle_lang: [],
    }
  },
  components: {
  },
  computed:{
    menuItems(){
      return [
        {
          title: 'Каталог',
          route: '/catalog',
          icon: null
        },
        {
          title: 'Компания',
          route: '/about',
          icon: null
        },
        {
          title: 'Контакты',
          route: '/contacts',
          icon: null
        },
      ]
    }
}
}
</script>

<style scoped>

</style>

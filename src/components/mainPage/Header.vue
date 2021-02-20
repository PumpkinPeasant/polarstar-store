<template>
    <v-app-bar
        flat
        color="transparent"
        min-height="110"
        class="pa-5"
    >
     <v-app-bar-title><v-img contain src="../../assets/images/mainPage/logo.svg" max-height="45" max-width="290"></v-img></v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text
             tile
             color="#F2F2F2"
             class="menu-button"
             v-for="(item, i) in menuItems" :key="`menuItem${i}`" :to="item.route">
        {{item.title}}
      </v-btn>
      <v-spacer></v-spacer>


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
        <v-btn>
          EN
        </v-btn>
      </v-btn-toggle>
      <v-btn icon >
        <v-icon size="24" color="#F2F2F2">mdi-account-outline</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon size="24" color="#F2F2F2">mdi-cart-outline</v-icon>
          </v-btn>
        </template>
      </v-menu>
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
          route: '/catalog'
        },
        {
          title: 'Компания',
          route: '/about'
        },
        {
          title: 'Контакты',
          route: '/contacts'
        },
      ]
    }
}
}
</script>

<style scoped>
.menu-button{

}


</style>

<template>
    <div class="block">
      тест
    </div>
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
.block{
  background-color: red;
}


</style>

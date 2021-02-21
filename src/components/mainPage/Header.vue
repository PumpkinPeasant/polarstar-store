<template>
  <header class="header">
    <div class="container">

      <div class="header__inner">  

        <div class="logo">
          <svg>
            <use xlink:href="#logo"></use>
          </svg>
        </div>

        <nav class="header-nav">
          <ul>
            <li>
                <a href="#">каталог</a>
            </li>
            <li>
                <a href="#">компания</a>
            </li>
            <li>
                <a href="#">контакты</a>
            </li>
          </ul>
        </nav>

        <div class="header-menu">
          <ul>
            <li>
                
            </li>
            <li>
                
            </li>
            <li>
    
            </li>
          </ul>
        </div>

      </div> 

    </div>
  </header>

</template>

<script>


export default {
name: "header",
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

  .header {
    padding: 25px 0;
    outline: 2px solid blue;
 }

</style>

<template>
    <div>
      <header class="header">
        <div class="container">

            <div class="logo">
                <img>
            </div>

            <nav class="header-nav">
              <ul>
                <li>
                    <a href="">каталог</a>
                </li>
                <li>
                    <a href="">компания</a>
                </li>
                <li>
                    <a href="">контакты</a>
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
      </header>
    </div>
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
.block{
 color: #fff;
 font-family: 'Montserrat', sans-serif;
 font-size: 14px;
 font-weight: 500;
}



.container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 15px;
  outline: 2px solid green;
}


</style>

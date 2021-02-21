<template>
  <header class="header">
    <div class="container">

      <div class="header__inner">  

        <svg class="logo">
          <use xlink:href="#logo"></use>
        </svg>
        
        <div class="header__nav">
          <ul class="header__list">
            <li class="header__item">
                <a class="header__link" href="#">каталог</a>
            </li>
            <li class="header__item">
                <a class="header__link" href="#">компания</a>
            </li>
            <li  class="header__item">
                <a class="header__link" href="#">контакты</a>
            </li>
          </ul>
        </div>

        <div class="header-menu">
          <ul class="header__list">
            <li class="header__item">
              
            </li>
            <li class="header__item">
              
            </li>
            <li  class="header__item">
                <a class="header__link" href="#"></a>
            </li>
            <li  class="header__item">
                <a class="header__link" href="#"></a>
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

   /*logo
  **************************/

  .header {
    padding: 25px 0;
    outline: 2px solid blue;
 }

 .header__inner {
    display: flex;
    justify-content: space-between;

    outline: 2px solid rgb(255, 0, 0);
 }

  /*logo
  **************************/

  .logo {
    display: block;
    height: 36px;
    width: 180px;
    fill: #F2F2F2;
   
    outline: 2px solid rgb(217, 255, 0);
  }

  /* header__nav 
  **************************/

  .header__nav {
    
     outline: 2px solid rgb(217, 255, 0);
  }

  .header__nav .header__list {
   display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    
    outline: 2px solid red;
  }

  .header__item {
    display: inline-block;
    font-size: 14px;
    font-weight: 300;
  }

  .header__item + .header__item {
      margin-left: 30px;
  }

  .header__nav  .header__link {
    color: #f2f2f2;
    text-decoration: none;

    transition: color .3s;
 }

  .header__nav  .header__link:hover {
    color: #5BC0BE;
 }


/* header-menu
*******************/
.header-menu {
  display: flex;
}


 


  



</style>

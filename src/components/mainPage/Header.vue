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
            <li class="header__item-lang">
              <button id="ru-lang" class="ru-lang-button">ru</button>
            </li>
           
           <li class="header__item-lang">
              <button id="eu-lang" class="eu-lang-button">eu</button>
            </li>

            <li  class="header__item">
              <a class="header__link header__link" href="#">
                   <svg class="header__icon header--user">
                      <use xlink:href="#user"></use>
                   </svg>
                </a>
            </li>
            <li  class="header__item">
                <a class="header__link header__link" href="#">
                  <svg class="header__icon header--shopping">
                    <use xlink:href="#shopping"></use>
                  </svg>
                </a>
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

   /*header
  **************************/

  .header {
    padding-top: 30px;
    padding-bottom: 25px;
    outline: 2px solid blue;
 }

 .header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*outline: 2px solid rgb(255, 0, 0);*/
 }

  /*logo
  **************************/

  .logo {
    display: block;
    height: 32px;
    width: 190px;
    fill: #F2F2F2;
   
    /*outline: 2px solid rgb(217, 255, 0);*/
  }

  /* header__nav 
  **************************/

  /*.header__nav {
    outline: 2px solid rgb(217, 255, 0);
  }*/

  .header__nav .header__list {
   display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    
    /*outline: 2px solid red;*/
  }

  .header__item {
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 2.8px;
    text-transform: uppercase;
  }

  .header__nav .header__item + .header__item {
      margin-left: 20px;
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
    display: inline-block;
    font-size: 14px;
    font-weight: 300;
  }

  .header-menu .header__list {
   display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    
    /*outline: 2px solid red;*/
  }

  
  .header-menu  li:nth-child(3) {
        margin-left: 7px;
    }

  .header-menu  .header__link {
    display: block;
    color: #f2f2f2;
    text-decoration: none;

    transition: color .3s;
 }

  .header-menu .header__item + .header__item {
      margin-left: 16px;
  }


      
     /****** button *******/

  .header__item-lang {
      padding: 0 8px;
      color: #f8f8f8;
  }
  

.header__item-lang + .header__item-lang {
  position: relative;
  
}

.header__item-lang + .header__item-lang:before {
   content: " ";
	display: block;
	position: absolute;
	top: 4px;
	left: 0px;
	width: 1px;
	border-top: 12px solid #f8f8f8;
}
 
.eu-lang-button,
.ru-lang-button {
  font-size: 14px;
  padding: 0 4px ;
  border: none;
  outline: none;
  text-transform: uppercase;
}

    /****** button *******/
 
  .header-menu .header--user {
    display: block;
    width: 20px;
    height: 20px;
  }

 .header-menu .header--shopping {
    display: block;
    margin-bottom: -8px;
    width: 30px;
    height: 30px;
  }
  



</style>

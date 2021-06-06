<template>
  <nav v-bind:class="navClass">
    <div class="navLogo">
      <a href="#" v-scroll-to="{
          el: '#home',
          duration: 200,
          lazy: true,
          easing: 'linear',
          offset: 0,
          }">
        <img class="logo" id="logo_nav" :src=getImage alt="PolarStar логотип">
      </a>
    </div>
    <div class="navItems">
      <ul>
        <router-link to="/catalog" tag="span">
          <li>
            <span>Каталог</span>
          </li>
        </router-link>
        <router-link to="/company" tag="span">
          <li>
            <span href="">Компания</span>
          </li>
        </router-link>
        <router-link to="/contacts" tag="span">
          <li>
            <span href="">Контакты</span>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="navMenu">
            <v-btn-toggle
                v-model="toggle_exclusive"
                mandatory
                color="#5BC0BE"
                dark
                borderless
                group
            >
              <v-btn>
                RU
              </v-btn>
              <v-btn>
                EN
              </v-btn>
            </v-btn-toggle>
      <login-dialog/>
      <v-btn icon color="#F2F2F2">
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </div>
  </nav>
</template>

<script>

import LoginDialog from "@/components/dialogs/LoginDialog";
export default {
  name: "MainNavigation",
  components: {LoginDialog},
  props:['menuItems','background'],
  data(){
    return{
      navClass:'',
      imagePath:'logo.svg',
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      if (event && window.scrollY > 0){
        this.navClass = 'navScrolled'
      }
      else{
        this.navClass = ''
      }
    },
  },
  computed: {
    getImage() {
      return require(`../../assets/images/mainPage/${this.imagePath}`)
    }
  }
}
</script>

<style scoped lang="scss">
nav{
  width: 100%;
  background-color: transparent;
  display: flex;
  position: fixed;
  justify-content: space-between;
  top:0;
  left: 0;
  align-items: center;
  transition: 0.6s;
  padding: 40px 9vw;
  z-index: 100000;
  .navItems{
    display: flex;
    justify-items: center;
    justify-content: center;
  }
  ul {
    position: relative;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding-inline-start: 0;
    li{
      display: flex;
      position: relative;
      color: #FDFDF9;
      font-size: 0.90vw;
      list-style: none;
      cursor: pointer;
      letter-spacing: 0.08em;
      span{
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        padding: 0 1vw;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        position: relative;
        color: #FDFDF9;
        text-decoration: none;
        transition: 0.4s;
        border-bottom:2px solid transparent;
      }
      span:hover{
        color: #5BC0BE;
      }
    }
  }
  .navMenu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1vw;
  }
  .logo{
    display: flex;
    position: relative;
    transition: 0.6s;
    width: 18.5vw;
    height: auto;
  }
}
.navScrolled{
  padding: 5px 8vw;
  background: #0B132B;
  height: 11vh;
  ul{
    li{
      a{
        color: #195131;
      }
    }
  }

}

@media screen and (max-width: 759px) {
  nav{
    ul{
      position: absolute;
      width: 300px;
    }
  }

}
</style>

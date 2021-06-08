<template>
  <nav class="navClass">
    <div class="navLogo">
      <router-link to="/" tag="span">
        <img class="logo" id="logo_nav" :src=getImage alt="PolarStar логотип">
      </router-link>
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
        <router-link to="/delivery" tag="span">
          <li>
            <span href="">Доставка</span>
          </li>
        </router-link>
        <router-link to="/faq" tag="span">
          <li>
            <span href="">FAQ</span>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="navMenu">
      <login-dialog activator-color="#0B132B"/>
      <cart-dialog activator-color="#0B132B"/>
    </div>
  </nav>
</template>

<script>

import LoginDialog from "@/components/dialogs/LoginDialog";
import CartDialog from "@/components/dialogs/CartDialog";

export default {
  name: "MainNavigation",
  components: {
    LoginDialog,
    CartDialog
  },
  data() {
    return {
      navClass: '',
      imagePath: 'LogoBlackNoMotto.svg',
    }
  },
  computed: {
    getImage() {
      return require(`../../assets/images/catalogPage/${this.imagePath}`)
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  background-color: #FFFFFF;
  display: flex;
  position: fixed;
  justify-content: space-between;
  top: 0;
  left: 0;
  align-items: center;
  transition: 0.6s;
  padding: 18px 9vw;
  z-index: 100000;

  .navItems {
    display: flex;
    justify-items: center;
    justify-content: center;

    .router-link-active span {
      color: #5BC0BE !important;
      font-weight: 600;
    }

    .router-link, .router-link-active {
      text-decoration: none;
    }
  }

  ul {
    position: relative;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding-inline-start: 0;

    li {
      display: flex;
      position: relative;
      font-size: 0.90vw;
      list-style: none;
      cursor: pointer;
      letter-spacing: 0.08em;

      span {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        padding: 0 1vw;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        position: relative;
        color: #0B132B;
        text-decoration: none;
        transition: 0.4s;
        border-bottom: 2px solid transparent;
      }

      span:hover {
        color: #5BC0BE;
      }
    }
  }

  .navMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1vw;
  }

  .logo {
    cursor: pointer;
    display: flex;
    position: relative;
    transition: 0.6s;
    width: 5vw;
    height: auto;
  }
}

@media screen and (max-width: 759px) {
  nav {
    ul {
      position: absolute;
      width: 300px;
    }
  }

}

</style>

<template>
  <nav class="navClass">
    <div class="navItems">
      <ul>
        <li>
          <span>НАВИГАЦИОННЫЕ</span>
        </li>
        <li>
          <span>ТЕХНИЧЕСКИЕ</span>
        </li>
        <li>
          <span>ИНТЕРЬЕРНЫЕ</span>
        </li>
        <li>
          <span>АВАРИЙНЫЕ</span>
        </li>
        <li>
          <span>ДАУНЛАЙТЫ</span>
        </li>
        <li>
          <span>ПРОЖЕКТОРЫ</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CatalogNavigation",
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
  background-color: #5BC0BE;
  position: fixed;
  top: 11vh;
  left: 0;
  transition: 0.6s;
  padding: 25px 9vw;
  z-index: 100000;

  .navItems {
    display: flex;
  }

  ul {
    display: flex;
    width: 100%;
    justify-content: center;

    li {
      display: flex;
      position: relative;
      color: #FDFDF9;
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
        color: #FFFFFF;
        text-decoration: none;
        transition: 0.4s;
        border-bottom: 2px solid transparent;
      }

      span:hover {
        color: #0B132B;
      }
    }
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


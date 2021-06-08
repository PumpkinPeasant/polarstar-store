<template>
  <div>
    <navigation></navigation>
    <div class="message">
      <p>
        Страница контактов компании в разработке
      </p>
      <router-link to="/" tag="span">
        <v-btn>На главную</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/catalogPage/Navigation";

export default {
  name: "Company",
  components: {
    Navigation,
  },
}
</script>

<style scoped>
div{
  width: 100vw;
  height: 100%;
}
.message{
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  top:20vh;
}
</style>

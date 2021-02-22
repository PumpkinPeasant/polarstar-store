<template>
  <div class="cart__body">
    <div class="cart__item">
      <div class="cart__item__img">
        <img src="@/assets/images/mainPage/navlamp1.png" alt="" width="70px" height="70px">
      </div>
      <div class="cart__item__title">Название товара</div>
      <div class="cart__item__price">2999 ₽</div>
      <v-text-field
          hide-details
          single-line
          type="number"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CartSidebar",
  data () {
    return {
    }
  },
}
</script>

<style scoped>

</style>

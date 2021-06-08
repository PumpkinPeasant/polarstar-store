<template>
  <v-row justify="center">
    <v-dialog
        v-model="visible"
        fullscreen
        hide-overlay
        transition="scroll-x-transition"
    >
      <template v-slot:activator="{on,}">
        <v-btn v-on="on" icon :color="activatorColor">
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
      </template>
      <section class="dialogWrapper">
        <div class="dialogCloseSpace" @click="visible = false"></div>
        <div class="cartWrapper">
          <div class="cartBlock">
            <div class="closeCartBlock">
              <v-btn color="black" icon @click="visible = false">
                <v-icon >mdi-close</v-icon>
              </v-btn>
            </div>
            <h3>Корзина</h3>
            <div class="cartBlockItems">
              <v-list>
                <v-list-item v-for="item in items" :key="item.name"
                >
                  <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.name"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.price"></v-list-item-subtitle>
                  </v-list-item-content>
                  <div class="counter">
                    <div class="counterText">
                      <span v-html="item.amount"></span>
                    </div>
                    <div class="counterArrows">
                      <v-icon @click="item.amount++">mdi-chevron-up</v-icon>
                      <v-icon @click="item.amount--">mdi-chevron-down</v-icon>
                    </div>

                  </div>
                  <v-btn icon>
                    <v-icon>mdi-delete-outline</v-icon>
                  </v-btn>
                </v-list-item>
              </v-list>
            </div>
          </div>
          <div class="cartBottomPanel">
            <div class="cartPrice">
              <span>Итого:</span>
              <span>123891238</span>
            </div>
            <div class="cartButtons">
              <v-btn>
                В корзину
              </v-btn>
              <v-btn>
                Оформить заказ
              </v-btn>
            </div>
          </div>
        </div>
      </section>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "CartDialog",
  props: {
    visible: Boolean,
    activatorColor: {
      type: String,
      default: '#F2F2F2'
    }
  },
  data() {
    return {
      selectedItem: 1,
      items: [
        { name: 'Товар 1',price: '2 019 ₽ ',amount: 1, avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { name: 'Товар 2',price: '2 019 ₽ ',amount: 3, avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { name: 'Товар 3',price: '2 019 ₽ ',amount: 15, avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
      ],
    }
  },
  computed:{

  },
  watch: {
    localVisible (value) {
      this.$emit('update:visible', value)
    },
    visible (value) {
      console.log(value);
      this.localVisible = value;
    }
  }
}
</script>

<style scoped lang="scss">
.dialogWrapper{
  display: flex;
  height: 100%;
}
.dialogCloseSpace{
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 72vw;
}
.cartWrapper{
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
}
.cartBlock{
  background-color: white;
  width: 28vw;
  height: 100%;
  padding: 2vh;
}
.closeCartBlock {
  position: fixed;
  padding: 1vw;
  right: 0;
  top: 0;
}
.counter{
  display: flex;
  border: #dddddd 1px solid;
  align-items: center;
  justify-content: space-between;
  padding: 2px 5px;
  gap: 2px;
  width: 5vw;
  .counterText{
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .counterArrows{
    display: flex;
    flex-direction: column;
  }
}
.cartBottomPanel{
  display: flex;
  flex-direction: column;
  background-color: #F2F2F2;
  height: 30vh;
  width: 28vw;
  padding: 2vh;
  gap: 3vh;
  .cartPrice{
    display: flex;
    justify-content: space-between;
  }
  .cartButtons{
    display: flex;
    justify-content: space-between;
  }
}
</style>

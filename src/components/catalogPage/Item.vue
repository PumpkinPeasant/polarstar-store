<template>
  <v-card
      class="item"
      max-width="374"
      elevation="3"
  >
    <div class="itemImage">
      <v-img src="../../assets/images/catalogPage/navlogonobg.png"/>
    </div>
    <v-card-title class="itemTitle">{{item.name}}</v-card-title>
    <v-card-text class="itemInfo">
      <div class="propertyLine">
        <span>
          {{item.param1}}
        </span>
        <span>
          {{item.value1}}
        </span>
        </div>
      <div class="propertyLine">
        <span>
          {{item.param2}}
        </span>
        <span>
          {{item.value2}}
        </span>
      </div>
      <div class="propertyLine">
        <span>
          {{item.param3}}
        </span>
        <span>
          {{item.value3}}
        </span>
      </div>
    </v-card-text>
    <v-card-actions class="itemActions">
      <div class="itemPrice"><span>{{item.price}}</span></div>
      <v-btn icon color="black">
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: Object
  },
}
</script>

<style scoped lang="scss">
.item{
  padding: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.itemImage{
  display: flex;
  height: 30vh;
  width: 30vh;
  padding: 0 1vh 0 1vh;
  align-items: center;
}
.itemTitle{
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
.itemPrice{
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.3em;
}
.itemInfo{
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

.propertyLine{
  display: flex;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1em;
  color: #6C7797;
}
.itemActions{
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;

}
</style>

<template>
  <v-card
      class=""
      max-width="374"
  >
    <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    >

    </v-img>
    <v-card-title>{{item.name}}</v-card-title>
    <v-card-text>
      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>
    <v-card-actions>
      <v-btn
          color="deep-purple lighten-2"
          text
      >
        Reserve
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

<style scoped>

</style>

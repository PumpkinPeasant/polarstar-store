<template>
  <v-dialog>
    <template v-slot:activator="{on,}">
      <slot v-on="on"></slot>
    </template>
    <v-card>
      <v-card-title></v-card-title>
      <v-card-text></v-card-text>
      <v-card-actions></v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginDialog"
}
</script>

<style scoped>

</style>
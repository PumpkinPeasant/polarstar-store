<template>
  <v-dialog>
    <template v-slot:activator="{on,}">
      <v-btn v-on="on" icon color="#5BC0BE">
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Вход в личный кабинет</v-card-title>
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
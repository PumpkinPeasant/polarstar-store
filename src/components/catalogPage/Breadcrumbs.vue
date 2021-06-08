<template>
  <v-breadcrumbs :items="items" class="pl-0">
    <template v-slot:divider>
      <v-icon>mdi-circle-small</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: "Breadcrumbs",
  data() {
    return {
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/',
        },
        {
          text: 'Каталог',
          disabled: false,
          href: 'catalog',
        },
        {
          text: 'Навигационные огни',
          disabled: false,
          href: '',
        },
      ],
    }
  },

}
</script>

<style scoped>

</style>

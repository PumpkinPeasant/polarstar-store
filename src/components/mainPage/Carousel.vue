<template>
  <v-container>
      <v-carousel v-model="model">
      <v-carousel-item
          v-for="(color) in colors"
          :key="color"
      >
        <v-sheet
            :color="color"
            height="100%"
            width="100%"
            tile
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <div class="display-3">
              <v-img src=""></v-img>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
name: "MainLayout",
  data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),
}
</script>

<style scoped>

</style>

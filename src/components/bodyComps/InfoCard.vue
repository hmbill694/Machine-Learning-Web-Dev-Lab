<template>
  <v-card raised>
    <v-card-title class="headline">{{ infoContainer.title }}</v-card-title>
    <v-card-text>{{ infoContainer.content }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    infoContainer: Object
  }
}
</script>

<style></style>

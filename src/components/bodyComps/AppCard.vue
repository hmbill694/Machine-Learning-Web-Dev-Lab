<template>
  <v-card>
    <v-img :height="150" class="white--text align-end" :src="img">
      <v-card-title>{{ name }}</v-card-title>
    </v-img>

    <v-card-text>{{ description }}</v-card-text></v-card
  >
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    name: String,
    description: String,
    link: String,
    img: String
  }
}
</script>

<style></style>

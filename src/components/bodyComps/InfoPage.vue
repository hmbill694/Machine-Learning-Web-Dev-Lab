<template>
  <v-container>
    <InfoPageItem
      v-for="(item, index) in infoArray"
      :key="index"
      :pageAlignment="index"
      :cardDetails="item"
    />
  </v-container>
</template>

<script>
import InfoPageItem from './InfoPageItem'
export default {
  name: 'InfoPage',
  props: {
    infoArray: Array
  },
  components: {
    InfoPageItem
  }
}
</script>

<style></style>

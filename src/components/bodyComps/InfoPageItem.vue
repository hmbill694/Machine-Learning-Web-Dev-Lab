<template>
  <v-container>
    <v-row>
      <InfoCard :infoContainer="cardDetails" />
    </v-row>
  </v-container>
</template>

<script>
import InfoCard from './InfoCard'
export default {
  name: 'InfoPageItem',
  components: {
    InfoCard
  },
  props: {
    cardDetails: Object
  },
  computed: {}
}
</script>

<style></style>

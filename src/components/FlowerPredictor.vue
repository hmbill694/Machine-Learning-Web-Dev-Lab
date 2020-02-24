<template>
  <v-container>
    <GenericComp
      :inputNames="flowerMarkers"
      :memberList="flowerPatients"
      :title="title"
      :information="aboutInfo"
      :pageName="pageName"
    />
  </v-container>
</template>

<script>
import GenericComp from './bodyComps/GenericComp'
import { mapState } from 'vuex'
export default {
  name: 'FlowerPredictor',
  components: {
    GenericComp
  },
  data: () => ({}),
  computed: {
    ...mapState('flowerPredictor', [
      'flowerMarkers',
      'flowerPatients',
      'title',
      'aboutInfo',
      'pageName'
    ])
  }
}
</script>

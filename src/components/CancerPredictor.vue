<template>
  <v-container>
    <GenericComp
      :inputNames="cancerMarkers"
      :memberList="cancerPatients"
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
  name: 'CancerPredictor',
  components: {
    GenericComp
  },
  data: () => ({}),
  computed: {
    ...mapState('cancerPredictor', [
      'cancerMarkers',
      'cancerPatients',
      'title',
      'aboutInfo',
      'pageName'
    ])
  }
}
</script>

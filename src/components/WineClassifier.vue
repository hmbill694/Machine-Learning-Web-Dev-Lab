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
  name: 'WineClassifier',
  components: {
    GenericComp
  },
  data: () => ({}),
  computed: {
    ...mapState([
      'cancerMarkers',
      'cancerPatients',
      'title',
      'aboutInfo',
      'pageName'
    ])
  }
}
</script>

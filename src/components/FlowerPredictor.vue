<template>
  <v-container>
    <GenericComp
      :inputNames="flowerMarkers"
      :memberList="flowerGuesses"
      :title="title"
      :information="aboutInfo"
      :pageName="pageName"
      :guesses="flowerGuesses"
      @autoGenAdd="add"
      @autoGenDelete="clear"
    />
  </v-container>
</template>

<script>
import GenericComp from './bodyComps/GenericComp'
import { mapState, mapActions } from 'vuex'
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
      'pageName',
      'flowerGuesses'
    ])
  },
  methods: {
    ...mapActions('flowerPredictor', {
      add: 'addGuess',
      clear: 'clearGuesses'
    })
  }
}
</script>

<template>
  <v-container>
    <v-row
      ><v-col col cols="12"
        ><h3 class="text-md-center">{{ pageName }}</h3></v-col
      ></v-row
    >
    <PriorGuessList :items="guesses" />
    <v-tabs>
      <v-tab ripple>Auto Generate</v-tab>
      <v-tab ripple>About</v-tab>
      <v-tab-item>
        <AutoGen
          :inputNames="inputNames"
          :memberList="memberList"
          @autoGenAdd="emitAutoGenAdd"
          @autoGenDelete="emitAutoGenDelete"
        />
      </v-tab-item>
      <v-tab-item>
        <InfoPanel :title="title" :information="information"
      /></v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import PriorGuessList from './PriorGuessList'
import AutoGen from './AutoGen'
import InfoPanel from './InfoPanel'
export default {
  name: 'GenericComp',
  components: {
    PriorGuessList,
    AutoGen,
    InfoPanel
  },
  props: {
    inputNames: Array,
    memberList: Array,
    title: String,
    information: Array,
    pageName: String,
    guesses: Array
  },
  methods: {
    emitAutoGenAdd() {
      this.$emit('autoGenAdd')
    },
    emitAutoGenDelete() {
      this.$emit('autoGenDelete')
    }
  }
}
</script>

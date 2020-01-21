<template>
  <v-container>
    <v-row :align="alignment" :justify="justify"
      ><v-col col cols="12"
        ><h3 class="text-md-center">{{ pageName }}</h3></v-col
      ></v-row
    >
    <PriorGuessList />
    <v-tabs>
      <v-tab ripple>Manual Entry</v-tab>
      <v-tab ripple>Auto Generate</v-tab>
      <v-tab ripple>About</v-tab>
      <v-tab-item> <DataEntry :inputNames="inputNames" /> </v-tab-item>
      <v-tab-item>
        <AutoGen :inputNames="inputNames" :memberList="memberList" />
      </v-tab-item>
      <v-tab-item>
        <InfoPanel :title="title" :information="information"
      /></v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import DataEntry from './DataEntry'
import PriorGuessList from './PriorGuessList'
import AutoGen from './AutoGen'
import InfoPanel from './InfoPanel'
export default {
  name: 'GenericComp',
  components: {
    DataEntry,
    PriorGuessList,
    AutoGen,
    InfoPanel
  },
  props: {
    inputNames: Array,
    memberList: Array,
    title: String,
    information: Array,
    pageName: String
  }
}
</script>

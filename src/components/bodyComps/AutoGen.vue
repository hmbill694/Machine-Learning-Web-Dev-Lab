<template>
  <v-card>
    <v-container>
      <v-data-table :headers="headers" :items="members" :items-per-page="5">
      </v-data-table>
      <v-btn block color="green">
        Auto Generate Test for Network Prediction
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'AutoGen',
  props: {
    inputNames: Array,
    memberList: Array
  },
  computed: {
    headers: function() {
      // Refactored Version
      const objectBuilder = () =>
        this.inputNames.map(x => ({
          text: x.label,
          value: x.label.toLowerCase()
        }))

      return [
        {
          text: 'Cancer Markers',
          align: 'left',
          sortable: 'false',
          value: 'name'
        },
        ...objectBuilder()
      ]
    },
    members: function() {
      let mem = this.memberList
      return mem
    }
  }
}
</script>

<style></style>

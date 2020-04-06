<template>
  <v-card>
    <v-container>
      <v-row
        ><v-col cols="12"
          ><v-data-table
            :headers="headers"
            :items="mappedItems"
            :items-per-page="5"
          >
          </v-data-table></v-col
      ></v-row>
      <v-row>
        <v-col>
          <v-btn block color="red" @click="emitDeleteClick">
            Clear Guesses
          </v-btn>
        </v-col>
        <v-col cols="6"
          ><v-btn block color="green" @click="emitClick">
            Auto Generate Test for Network Prediction
          </v-btn></v-col
        ></v-row
      >
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
          value: x.label
            .trim()
            .split(' ')
            .join('')
            .toLowerCase()
        }))

      return [...objectBuilder()]
    },
    members: function() {
      let mem = this.memberList
      return mem
    },
    mappedItems: function() {
      const members = this.members
      const mappedMembers = members.map(ele => {
        const inputArr = ele.inputs
        return {
          sepallenght: inputArr[0],
          sepalwidth: inputArr[1],
          pedallength: inputArr[2],
          pedalwidth: inputArr[3]
        }
      })
      return mappedMembers
    }
  },
  methods: {
    emitClick() {
      this.$emit('autoGenAdd')
    },
    emitDeleteClick() {
      this.$emit('autoGenDelete')
    }
  },
  mounted: function() {
    this.methods.mappedItems()
  }
}
</script>

<style></style>

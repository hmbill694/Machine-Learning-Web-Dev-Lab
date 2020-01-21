<template>
  <v-form>
    <v-card>
      <v-container>
        <v-row>
          <v-col
            v-for="(member, index) in inputNames"
            :key="index"
            cols="12"
            md="2"
          >
            <v-text-field :label="member.label"> </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn block bottom color="green">
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-form>
</template>

<script>
export default {
  name: 'DataEntry',
  props: {
    inputNames: Array
  }
}
</script>

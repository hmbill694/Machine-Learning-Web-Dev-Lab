<template>
  <v-card>
    <v-card-title class="headline">{{ title }}</v-card-title>
    <v-expansion-panels multiple>
      <v-expansion-panel v-for="(item, index) in information" :key="index">
        <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>{{
          item.content
        }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
  name: 'InfoPanel',
  props: {
    title: String,
    information: Array
  }
}
</script>

<style></style>

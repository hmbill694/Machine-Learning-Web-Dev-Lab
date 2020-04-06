<template>
  <v-container>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="(item, index) in itemsArray" :key="index">
          <v-list-item-content>
            <v-list-item-title> Guessed: {{ item.guessed }} </v-list-item-title>
            <v-list-item-subtitle>
              Real Value: {{ item.actual }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon v-if="item.correct" color="green">
              mdi-check
            </v-icon>
            <v-icon v-else color="red">
              mdi-close
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: 'PriorGuessList',
  props: {
    items: Array
  },
  data: () => ({}),
  methods: {
    listIcon(item) {
      return item.correct ? 'mdi-check' : 'mdi-close'
    }
  },
  computed: {
    itemsArray() {
      return this.items
    }
  }
}
</script>

<style></style>

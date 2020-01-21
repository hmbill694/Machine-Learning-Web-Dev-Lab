<template>
  <v-container>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-content>
            <v-list-item-title> Guessed: {{ item.guess }} </v-list-item-title>
            <v-list-item-subtitle>
              Real Value: {{ item.real }}
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
  data: () => ({
    items: [
      {
        guess: 13,
        real: 13,
        correct: true
      },
      {
        guess: 14,
        real: 14,
        correct: true
      },
      {
        guess: 7,
        real: 9,
        correct: false
      }
    ]
  }),
  methods: {
    listIcon(item) {
      return item.correct ? 'mdi-check' : 'mdi-close'
    }
  }
}
</script>

<style></style>

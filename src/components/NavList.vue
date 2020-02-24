<template>
  <v-list nav>
    <v-list-item v-for="(item, index) in items" :key="index" three-line>
      <v-list-item-content>
        <v-list-item-icon>
          <v-btn icon :to="item.routerLink">
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </v-list-item-icon>
        <v-list-item-title ripple>{{ item.text }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'NavList',
  data: () => ({
    items: [
      {
        text: 'Home',
        icon: 'mdi-home',
        description: 'Find out what this app is about!',
        routerLink: '/'
      },
      {
        text: 'Flower Predictor',
        icon: 'mdi-flower',
        description: `Will classify flowers into 3 seperate groups`,
        routerLink: 'flower-predictor'
      },
      {
        text: 'About the frontend',
        icon: 'mdi-flip-to-front',
        description: 'See how I made the frontend.',
        routerLink: 'frontend-info'
      },
      {
        text: 'About the backend',
        icon: 'mdi-flip-to-back',
        description: 'Learn how I made the backend and implemented it.',
        routerLink: 'backend-info'
      }
    ]
  }),
  computed: {}
}
</script>

<style></style>

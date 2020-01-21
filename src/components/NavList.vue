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
        text: 'wine classifier',
        icon: 'mdi-glass-wine',
        description: `Based on 5 characteristics will determine if a wine is red or white.`,
        routerLink: 'wine-classifier'
      },
      {
        text: 'About the frontend',
        icon: 'mdi-flip-to-front',
        description: 'See how I made the frontend.',
        routerLink: 'wine-classifier'
      },
      {
        text: 'About the backend',
        icon: 'mdi-flip-to-back',
        description: 'Learn how I made the backend and implemented it.',
        routerLink: 'wine-classifier'
      }
    ]
  }),
  computed: {}
}
</script>

<style></style>

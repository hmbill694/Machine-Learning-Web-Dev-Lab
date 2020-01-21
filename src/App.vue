<template>
  <v-app>
    <AppBar :drawerOpen="drawerOpen" @emitDrawerChange="toggleDrawer" />
    <v-navigation-drawer app temporary v-model="drawerOpen">
      <NavList />
    </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>
    <Footer />>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import NavList from './components/NavList'
import Footer from './components/Footer'
export default {
  name: 'App',

  components: {
    AppBar,
    NavList,
    Footer
  },

  data: () => ({
    drawerOpen: false
  }),

  computed: {},
  methods: {
    toggleDrawer(newDrawer) {
      this.drawerOpen = newDrawer
    }
  }
}
</script>

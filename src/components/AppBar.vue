<template>
  <v-app-bar app color="blue" dark>
    <v-app-bar-nav-icon @click.stop="emitDrawerChange()"></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-toolbar-title class="title display-2"
      >Machine Learning Lab</v-toolbar-title
    >

    <v-spacer></v-spacer>

    <v-btn icon to="/">
      <v-icon>mdi-home</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  props: {
    drawerOpen: Boolean
  },
  computed: {},
  methods: {
    emitDrawerChange() {
      let drawer = !this.drawerOpen
      this.$emit('emitDrawerChange', drawer)
    }
  }
}
</script>

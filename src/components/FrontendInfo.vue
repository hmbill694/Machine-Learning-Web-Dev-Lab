<template>
  <InfoPage :infoArray="info" />
</template>

<script>
import InfoPage from './bodyComps/InfoPage'
import { mapState } from 'vuex'
export default {
  name: 'FrontendInfo',
  components: {
    InfoPage
  },
  computed: {
    ...mapState('frontendInfo', ['info'])
  }
}
</script>

<style></style>

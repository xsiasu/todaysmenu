<template>
  <v-app>
    <DefaultBar />
    <DefatultView />
  </v-app>
</template>
<script>
import DefatultView from './View'
import DefaultBar from './AppBar'
export default {
  name : 'DefaultLayout',
  components: {
    DefaultBar,
    DefatultView
  },
}
</script>
<style lang="">
</style>

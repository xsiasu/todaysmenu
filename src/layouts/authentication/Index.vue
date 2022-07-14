<template>
  <v-app>
    <authentication-bar />
    <authentication-view />
  </v-app>
</template>
<script>
import AuthenticationBar from './AppBar'
import AuthenticationView from './View'
export default {
  name: 'AuthenticationLayout',
  components: {
    AuthenticationBar,
    AuthenticationView
  }
}
</script>
<style lang="">

</style>

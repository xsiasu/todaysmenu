<template>
    <v-app-bar app>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <div>
         <router-link :to="{name:'home'}"><a>home</a></router-link>
         <router-link :to="{name:'about'}"><a>about</a></router-link>
         <router-link :to="{name:'signIn'}"><a>signin</a></router-link>
         <router-link :to="{name:'signUp'}"><a>signup</a></router-link>

      </div>
    </v-app-bar>
</template>
<script>

export default {
  name: '',
  components: {

  }
}
</script>
<style lang="">
</style>

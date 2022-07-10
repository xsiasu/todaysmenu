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
      </div>

      <v-spacer></v-spacer>
      <v-text-field
        append-icon="mdi-microphone"
        class="mx-4"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-text-field>
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
  name : 'IndexView',
  components: {

  }
}
</script>
<style lang="">
</style>

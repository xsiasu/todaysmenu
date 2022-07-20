<template>
  <v-app-bar
    app
    flat
  >
    <div class="d-flex align-center">
      <router-link to="/">
        <a>홈</a>
      </router-link>
      <router-link :to="{name:'signUp'}">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src=""
          transition="scale-transition"
          width="40"
        />
      </router-link>
      <router-link :to="{name:'signUp'}">
        <a>sign up</a>
      </router-link>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title:'signup',path: 'signUp' }
    ],
  }),
}
</script>

<style>

</style>

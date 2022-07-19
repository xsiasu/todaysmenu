<template>
  <v-app-bar app>
    <div class="d-flex align-center">
      <v-img
        alt="Logo"
        class="shrink mr-2"
        contain
        src=""
        transition="scale-transition"
        width="40"
      />
    </div>

    <v-spacer />
    <v-text-field
      append-icon="mdi-microphone"
      class="mx-4"
      flat
      hide-details
      label="Search"
      prepend-inner-icon="mdi-magnify"
      solo-inverted
    />
    <div class="text-center">
      <v-menu
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            마이페이지
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <router-link :to="{name:`${item.path}`}">
              <a>{{ item.title }}</a>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title:'로그인',path: 'signIn' },
      { title:'회원가입',path: 'signUp' },
      { title:'마이페이지',path: 'viewMyinfo' }
    ],
  }),
}
</script>

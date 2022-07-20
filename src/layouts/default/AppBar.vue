<template>
  <v-app-bar app flat>
    <div class="d-flex align-center">
      <router-link to="/">
        <a>홈</a>
      </router-link>
    </div>

    <v-spacer />
    <!-- <v-text-field
      append-icon="mdi-microphone"
      class="mx-4"
      flat
      hide-details
      label="Search"
      prepend-inner-icon="mdi-magnify"
      solo-inverted
    /> -->
    <div class="text-center">
      <v-btn flat icon><v-icon>mdi-web</v-icon></v-btn>
      <v-menu
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            flat
            icon
          >
            <v-icon>mdi-account-details</v-icon>
          </v-btn>
        </template>
        <v-list v-if="isLogin">
          <v-list-item          >
            <router-link  :to="{name:'viewMyinfo'}">
              <a>마이페이지</a>
            </router-link>
          </v-list-item>
          <v-list-item @click="$store.dispatch('logout')">
              <a>로그아웃</a>
          </v-list-item>
        </v-list>

        <v-list v-else>
          <v-list-item>
            <router-link  :to="{name:'signIn'}">
              <a>로그인</a>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link  :to="{name:'signUp'}">
              <a>회원가입</a>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({

  }),
  computed : {
    ...mapState(['isLogin'])
  }
}
</script>

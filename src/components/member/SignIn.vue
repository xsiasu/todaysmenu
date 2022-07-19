<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="400"
      flat
    >
      <h1>로그인</h1>
      <v-form>
        <v-container>
          <div>
            <v-alert
              type="success"
              :value="isLogin"
            >
              로그인성공
            </v-alert>

            <v-alert
              type="error"
              :value="isLoginError"
            >
              로그인실패
            </v-alert>
          </div>
          <v-row>
            <v-col cols="12">
              <h3>id</h3>
              <v-text-field
                v-model="email"
                type="text"
                label="email"
                required
                solo
                dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h3>password</h3>
              <v-text-field
                v-model="password"
                type="password"
                label="password"
                required
                solo
                dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn
                block
                large
                depressed
                color="primary"
                type="submit"
                @click.prevent="login({
                  email:email,
                  password:password})"
              >
                로그인
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
// import axios from "axios";
  export default {
    name : 'SignIn',
    components: {

    },
    data: () => ({
        id : null,
        password : null,
        email : null,
    }),
    computed : {
      ...mapState(['isLogin','isLoginError'])
    },
    methods : {
      ...mapActions(['login'])
    }
  }
</script>

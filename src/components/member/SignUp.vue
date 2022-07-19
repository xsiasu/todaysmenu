<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="400"
      flat
      tile
    >
      <h1>登録</h1>
      <v-form
        @submit.prevent="handleSubmit"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                type="text"
                label="id"
                v-model="id"
                solo
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="last_name"
                label="氏名"
                solo
              />
            </v-col>
            <v-col cols="8">
              <v-text-field
                v-model="first_name"
                label="お名前"
                solo
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                type="password"
                label="password"
                solo
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="confirm_password"
                type="password"
                label="confirm password"
                solo
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                type="text"
                label="E-mail"
                solo
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
                @click="signUp('signUp')"
              >
                登録
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
// import axios from "axios";
import {mapActions, mapState} from 'vuex'
  export default {
    components: {

    },

    data: () => ({



        first_name: null,
        last_name: null,
        email: null,
        password : null,
        confirm_password : null,
    }),
    comments : {
      ...mapState()
    },
    methods : {

      ...mapActions('signUp')
      // async handleSubmit(){
      //     await axios.post('sign-up',{
      //       first_name : this.first_name,
      //       last_name : this.last_name,
      //       email : this.email,
      //       password : this.password,
      //       confirm_password : this.confirm_password,
      //     })
      // }
    }
  }
</script>

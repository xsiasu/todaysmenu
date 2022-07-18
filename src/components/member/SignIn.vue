<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="400"
      flat
    >
      <h1>ログイン</h1>
      <v-form>
        <v-container>
          <div>
            <v-alert
              type="success"
              :value="loginSuccess"
            >
              로그인성공
            </v-alert>

            <v-alert
              type="error"
              :value="isError"
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
                @click.prevent="login"
              >
                ログイン
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
  export default {
    name : 'SignIn',
    components: {

    },

    data: () => ({
        id : null,
        password : null,
        allUsers : [
          {id:1,password:'123456',email:'a@a.com'}
        ],
        isError : false,
        loginSuccess : false
    }),
    methods : {
      login(){

        let seletedUser = null;
        this.allUsers.forEach(user => {
          if(user.email === this.email) {
            seletedUser = user;
          }
        });

        seletedUser === null
          ?(this.isError = true)
          :seletedUser.password !== this.password
            ?(this.isError = true)
            :(this.loginSuccess = true)
      },
      async handleSubmit(){
        const Response = await axios.post('sign-in',{
          id : this.id,
          password : this.password
        })

        console.log(Response)
      }

    }
  }
</script>

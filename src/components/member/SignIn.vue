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
            <!-- <v-alert
              type="success"
              :value="isLogin"
            >
              로그인성공
            </v-alert> -->

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

              <!-- <v-btn @click="test">text</v-btn>
              <v-btn @click="postTest">posttest</v-btn> -->
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'

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
      ...mapActions(['login']),
      //화살표함수를 사용해야 this를 사용해서 vue instance 를 참조할수 있다
      // test(){
      //   axios.get('https://reqres.in/api/user?page=2')
      //     .then(res => {
      //       // handle success
      //       console.log(res);
      //     })
      //     .catch(err=> {
      //       // handle err
      //       console.log(err);
      //     })
      //     .then(()=> {
      //       // always executed
      //       console.log('test')
      //     });
      // },
      // postTest(){
      //   axios.post('https://reqres.in/api/register', {
      //   "email": "eve.holt@reqres.in",
      //   "password": "pistol"
      //         })
      //         .then(res=> {
      //           console.log(res);
      //         })
      //         .catch(err=> {
      //           console.log(err);
      //         });
      //     }
        }
  }
</script>

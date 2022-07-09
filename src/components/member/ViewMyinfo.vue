<template>
    <div>
        <v-card class="mx-auto" max-width="400" flat tile>
            <h1>나의정보보기</h1>

                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <h3>id</h3>
                            <v-card elevation="2">id</v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <h3>lastname</h3>
                            <v-card elevation="2">id</v-card>
                        </v-col>
                        <v-col cols="8">
                            <h3>firstname</h3>
                            <v-card elevation="2">id</v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <h3>password</h3>
                            <v-card elevation="2">id</v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <h3>e-mail</h3>
                            <v-card elevation="2">id</v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-btn block large depressed color="primary">
                            登録
                        </v-btn>
                      </v-col>
                    </v-row>
                </v-container>

        </v-card>
    </div>
</template>

<script>
  export default {

    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    components: {

    },
  }
</script>

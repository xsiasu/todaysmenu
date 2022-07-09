<template>
    <div>
        <v-card class="mx-auto" max-width="400" flat tile>
            <h1>登録</h1>
            <v-form v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field type="text" label="id" solo></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field v-model="lastname" :rules="nameRules" :counter="8" label="氏名" solo>
                            </v-text-field>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="お名前" solo>
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field type="password" label="password" solo></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="email" :rules="emailRules" label="E-mail" solo></v-text-field>
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
            </v-form>
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

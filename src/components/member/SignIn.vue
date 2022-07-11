<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="400"
      flat
    >
      <h1>ログイン</h1>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12">
              <h3>id</h3>
              <v-text-field
                type="text"
                label="id"
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
  export default {
    components: {

    },

    data: () => ({

    }),
  }
</script>

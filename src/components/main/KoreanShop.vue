<template>
  <div>
    <v-card flat>
      <v-tabs center-active>
        <v-tab
          v-for="item in items"
          :key="item.tab"

        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>
      <router-view />
    </v-card>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { tab: '韓国' },
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
          { tab: '韓国'},
          { tab: '日本'},
        ],
      }
    },
  }
</script>

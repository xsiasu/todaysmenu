<template>
  <div>
    <v-card>
      <v-tabs
        v-model="tab"
        background-color="primary"
        dark
      >
        <v-tab
          v-for="item in items"
          :key="item.tab"
        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item.tab"
        >
          <v-card flat>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>


    <h1>음식점이름</h1>
    <div>이미지</div>

    <h2>menu</h2>
    <ul>
      <li>메뉴1</li>
      <li>메뉴2</li>
      <li>메뉴3</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          { tab: 'One', content: 'Tab 1 Content' },
          { tab: 'Two', content: 'Tab 2 Content' },

        ],
      }
    },
  }
</script>

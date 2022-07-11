<template>
  <div>
    <v-simple-table
      dense
    >
      <template #default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Path
            </th>
            <th class="text-left">
              link
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in list"
            :key="item.name"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>
              <router-link :to="{name:`${item.path}`}">
                <a>{{ item.name }}</a>
              </router-link>
            </td>

            <!-- :to="{name:'signIn'}" -->
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '메인',
            path: 'MainView',
          },

          {
            name: '로그인',
            path: 'signIn',
          },

          {
            name: '회원등록',
            path: 'signUp',
          },
          {
            name: '나의정보보기',
            path: 'viewMyinfo',
          },
          {
            name: '나의정보수정',
            path: 'modifyMyinfo',
          },
        ],
      }
    },
  }
</script>

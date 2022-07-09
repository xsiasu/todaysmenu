<template>
<div>
 <v-simple-table dense>

    <template v-slot:default>
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
          v-for="item in list"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.path }}</td>


          <td><router-link :to=""><a>home</a></router-link></td>

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
            name: '로그인',
            path: 'member/sign-in',
          },

          {
            name: '회원등록',
            path: 'member/sign-up',
          },
          {
            name: '나의정보보기',
            path: 'member/view-myinfo',
          },
          {
            name: '나의정보수정',
            path: 'member/modify-myinfo',
          },
        ],
      }
    },
  }
</script>

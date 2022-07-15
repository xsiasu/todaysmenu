<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            노동자 id
          </th>
          <th class="text-left">
            노동자 first name
          </th>
          <th class="text-left">
            노동자 last name
          </th>
          <th class="text-left">
            노동자 email
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="employee in employees"
          :key="employee.id"
        >
          <td>{{ employee.id }}</td>
          <td>{{ employee.firstname }}</td>
          <td>{{ employee.lasttname }}</td>
          <td>{{ employee.email }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<script>
import EmployeeService from '@/service/EmployeeService'
  export default {
    name :'EmployeeList',
    components: {

    },
    data(){
      return {
        employees : []
      }
    },
    methods : {
      getEmployees(){
        EmployeeService.getEmployees().then((Response) => {
          this.employees = Response.data;
        })
      }
    },
    created() {
      this.getEmployees();
    }

  }
</script>


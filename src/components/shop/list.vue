<template>
  <v-simple-table>
    <template #default>
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
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.email }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<script>
import employeeApi from '@/api/employees'
  export default {
    name :'EmployeeList',
    components: {

    },
    data(){
      return {
        employees : []
      }
    },
    created() {
      this.getEmployees();
    },
    methods : {
      getEmployees(){
        employeeApi.getEmployees().then((Response) => {
          this.employees = Response.data;
        })
      }
    }

  }
</script>


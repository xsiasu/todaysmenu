<template>
  <div>
    <sign-in />
  </div>
</template>

<script>
import SignIn from '@/components/member/SignIn.vue';


  export default {
    name: 'SignIn',

    components: {
    'sign-in':SignIn
},
  }
</script>

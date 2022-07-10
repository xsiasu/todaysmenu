<template>
  <div>
    <view-myinfo />
  </div>
</template>

<script>
import ViewMyinfo from '@/components/member/ViewMyinfo.vue';
  export default {
    name: 'ViewMyinfo',
    components: {
      'view-myinfo':ViewMyinfo
    },
    data: () => ({

    }),
  }
</script>

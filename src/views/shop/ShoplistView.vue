<template>
  <div>
    <shop-list />
  </div>
</template>



<script>
import ShopList from '@/components/shop/list.vue'
export default {
  name: 'ShopList',
  components : {
    'shop-list' : ShopList
  },

}
</script>

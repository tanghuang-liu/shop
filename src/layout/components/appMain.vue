<template>
<div>
    <transition name="fade-transform" mode="out-in">
         <router-view :key="key" />
    </transition>
</div>
</template>
<script>
export default {
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>
<style lang="less" scoped>

</style>

<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app{
  overflow-x:auto;
  /* filter: grayscale(100%);  整体加一个灰色滤镜*/
}
</style>

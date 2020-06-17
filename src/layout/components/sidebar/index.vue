<template>
<div>
       <el-button  @click="sideClick">|||</el-button>
            <el-menu
            :default-active="activeMenu"
            background-color="#0091ff"
            active-text-color="#ffffff"
            text-color="#ffffff"
            :collapse-transition="false"
            :collapse="sidebar"
            router>
            <subitem v-for="(route,key) in routes" :key="key" :item="route"></subitem>
            </el-menu>
</div>
</template>
<script>
import subitem from './subitem'
export default {
  components: {
    subitem
  },
  data () {
    return {

    }
  },
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    },
    routes () {
      console.log(this.$router.options.routes)
      return this.$router.options.routes
    },
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  methods: {
    sideClick () {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>
<style lang="less" scoped>
 /deep/.el-button{
                width: 100%;
                background: rgb(0, 117, 207);
                border: none;
                border-radius: 0;
                color: white;
                &:hover,&:focus{
                    width: 100%;
                    background: rgb(0, 129, 228);
                    border: none;
                    color: white;

                }
            }
/deep/.el-menu{
    border-right: none;
}
</style>

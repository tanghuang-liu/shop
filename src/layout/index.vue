<template>
    <el-container class="main">
      <el-header>
         <navbar />
      </el-header>
      <el-container>
         <el-aside :width="sidebar?'64px':'299px'">
           <sidebar />
         </el-aside>
         <el-main>
       <app-main />
         </el-main>
      </el-container>
   </el-container>
</template>
<script>
import { navbar, sidebar, appMain } from './components'
export default {
  components: {
    navbar,
    sidebar,
    appMain
  },
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.main{
   height: 100%;
}
/deep/.el-header{
   background:@color;
   display: flex;
   height: 80px!important;
   justify-content: space-between;
   color: aliceblue;
   font-size: 25px;
   font-weight: bold;
    div{
     display: flex;
     align-items: center;
     span{
        margin-left: 1vw;
     }
  }
}
/deep/.el-aside{
   background: #0091ff;
   height: 100%;
}
/deep/.el-main{
   background: white;
   height: 100%;
}
</style>

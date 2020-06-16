<template>
   <el-container>
      <el-header>
         <div class="title">
            <div>
             <el-image
               style="width: 70px; height: 70px"
               src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
               fit="fill">
      </el-image>
       <span>小叮当的百宝袋管理系统</span>
            </div>
         </div>
         <div class="set"></div>
      </el-header>
      <el-container>
         <el-aside width="200px">Aside</el-aside>
         <el-main>Main</el-main>
      </el-container>
   </el-container>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
/deep/.el-header{
   background:@color;
   height: 10vh!important;
   display: flex;
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
   background: rgb(247, 173, 186);
   height: 90vh;
}
/deep/.el-main{
   background: rgb(255, 236, 240);
   height: 90vh;
}
</style>

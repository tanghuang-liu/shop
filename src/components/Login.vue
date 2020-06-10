<template>

   <div class="base">
       <div class="basemask">
       <div class="loginbox">
            <div class="avatar"><el-avatar style="width:200px;height:200px" src="http://5b0988e595225.cdn.sohucs.com/images/20171021/a9432e8e3ad64d3a8e634001578de1d9.jpeg"></el-avatar></div>
            <div class="content">
            <el-form ref="loginRef" :model="userinfo" :rules="loginRules" label-width="0px">
                <el-form-item  prop="usename">
            <el-input
                placeholder="用户名"
                v-model="userinfo.usename"
                prefix-icon="el-icon-user-solid"
                clearable>
           </el-input>
                </el-form-item>
                 <el-form-item  prop="password">
            <el-input
                placeholder="密码"
                v-model="userinfo.password"
                prefix-icon="el-icon-lock"
                show-password
                clearable>
           </el-input>
                 </el-form-item>
                  <el-form-item  class="bt">
                      <el-button type="primary" @click="reset('loginRef')">确认</el-button>
                  </el-form-item>
            </el-form>
            </div>
       </div>
       </div>
   </div>
</template>
<script>
export default {
  data () {
    return {
      userinfo: {
        usename: 'admin',
        password: '123456'
      },
      loginRules: {
        usename: [{ required: true, message: '登录名称', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
      }
    }
  },
  methods: {
    reset (refName) {
      this.$refs[refName].resetFields()
    }
  }

}
</script>
<style lang="less" scoped>
@bg:rgb(0, 162, 255);
.base{
    background: url('https://cdn.pixabay.com/photo/2018/04/12/16/35/fantasy-3313964_960_720.jpg') no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    .basemask{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .loginbox{
    width: 38vw;
    height:350px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .avatar{
       position: absolute;
       top: -100px;
       left: 50%;
       transform: translate(-50%);
    }
    .content{
    box-sizing: border-box;
    width: 100%;
    padding: 10% 6% 0 6%;
    /deep/.el-form{
        width: 100%;
    }
        /deep/.el-form-item__content{
            width: 100%;
            /deep/.el-input__inner{
                font-size: 15px;
                font-weight: bold;
                background-color: rgb(240, 240, 240);
                color: rgb(70, 70, 70);
            }
            /deep/.el-button{
                width: 100%;
            }
        }
 }
 }
    }

}

</style>


<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <label>用户名</label>
        <el-input placeholder="请输入用户名" type="text" v-model="formData.username" required clearable></el-input>
        <!--<input type="text" required v-model="formData.username">-->
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password"  required v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span>{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>
<style lang="scss">
form{
  width: 300px;

>.row{margin-bottom: 10px;
     >input{
     height: 32px;
     -webkit-appearance: none;
     background-color: #fff;
     background-image: none;
     border-radius: 4px;
     border: 1px solid #dcdfe6;
     -webkit-box-sizing: border-box;
     box-sizing: border-box;
     color: #606266;
     display: inline-block;
     font-size: inherit;
     line-height: 1;
     outline: 0;
     padding: 0 15px;
     -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
     transition: border-color .2s cubic-bezier(.645,.045,.355,1);
     width: 100%;
     overflow: visible;
     }
 }
>.actions>input{
   margin-left: 0px;
 }
}
</style>
<script>
  import AV from '../lib/leancloud'
  import getErrorMessage from '../lib/getErrorMessage'
  import getAVUser from '../lib/getAVUser'
  export default {
    name:  'SignInForm',
    data(){
      return {
        formData: {
          username: '',
          password: ''
        },
        errorMessage: ''
      }
    },
    methods: {
      signIn(){
        let {username, password} = this.formData
        AV.User.logIn(username,password).then(()=> {
          this.$emit('success', getAVUser())
      }, (error)=> {
          this.errorMessage = getErrorMessage(error)
        });
      }
    }
  }
</script>

<template>
  <div>
    <header class="top-header">
      <a class="text texta" href="index.html">取消</a>
      <h3>登录</h3>
      <a class="text" href="sign.html">注册</a>
    </header>

    <div class="login">
      <form>
        <ul>
          <li>
            <img src="../assets/images/login.png"/>
            <label>账号</label>
            <input type="text" v-model="username" placeholder="请输入账号"/>
          </li>
          <li>
            <img src="../assets/images/password.png"/>
            <label>密码</label>
            <input type="password" v-model="password" placeholder="请输入密码"/>
          </li>
        </ul>
        <input @click.prevent="login" type="submit" value="登录"/>
      </form>
    </div>
  </div>
</template>

<script>
import { Dialog, Toast } from 'we-vue'

export default {
  data(){
    return {
      username:'',
      password:''
    }
  },
  methods:{
    login(){
      this.axios.post('/authorizations', {
        username:this.username,
        password:this.password
      }).then(res=>{
        if(res.data.status_code == 200)
        {
          Dialog({
                message: '登录成功~',
                skin: 'ios'
              }).then(()=>{
                localStorage.setItem('ACCESS_TOKEN', res.data.data.ACCESS_TOKEN)
                this.$router.push('/')
              })
        }
        else if(res.data.status_code == 400)
        {
          Toast.fail({
                duration: 2000,
                message: '密码错误'
              })
        }
        else if(res.data.status_code == 422)
        {
          Toast.fail({
                duration: 2000,
                message: '用户名、密码格式不正确'
              })
        }
        else if(res.data.status_code == 404)
        {
          Toast.fail({
                duration: 2000,
                message: '账号不存在'
              })
        }
      })
    }
  }
}
</script>

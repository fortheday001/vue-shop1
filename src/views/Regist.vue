<template>
  <div>
    <header class="top-header">
      <a class="text texta" href="index.html">取消</a>
      <h3>注册</h3>
      <a class="text" href="login.html">登录</a>
    </header>

    <div class="login">
      <form action="" method="post">
        <ul>
          <li>
            <img src="../assets/images/login.png"/>
            <label>账号</label>
            <input type="text" v-model="form.username" placeholder="请输入账号"/>
          </li>
          <li>
            <img src="../assets/images/password.png"/>
            <label>密码</label>
            <input type="password" v-model="form.password" placeholder="请输入密码"/>
          </li>
          <li>
            <img src="../assets/images/password.png"/>
            <label>密码</label>
            <input type="password" v-model="form.password_confirmation" placeholder="请确认密码"/>
          </li>
        </ul>
        <input @click.prevent="submit" type="submit" value="立即注册"/>
      </form>
    </div>
  </div>
</template>

<script>
import { Dialog, Toast } from 'we-vue'

export default {
  data(){
    return {
      form:{
        username:'',
        password:'',
        password_confirmation:''
      }
    }
  },
  methods:{
    submit(){
      this.axios.post('/members', this.form)
          .then(res=>{
            if( res.data.status_code == 200)
            {
              Dialog({
                message: '注册成功~',
                skin: 'ios'
              }).then(res=>{
                this.$router.push('/login')
              })
            }
            else
            {
              Toast.fail({
                duration: 2000,
                message: '注册失败：账号，密码格式不正确'
              })
            }
          })
    }
  }
}
</script>

<template>
  <div id="login">
    <!-- 品牌图标  -->
    <div class="heard">
      <img v-bind:src="img_title">
      <p class="title" >{{msg}}</p>
    </div>
    <!-- 登录模块儿  -->
    <div class="block">
      <!-- 字体头  -->
      <div class="heard">
        <p class="p_title">{{name}}</p>
        <img v-bind:src="img_little">
      </div>
      <!-- 账号 -->
      <div class="login_user">
        <img class="img_user" v-bind:src="img_user"/>
        <input class="text_user" type="text" placeholder="请输入账号" v-model="loginInfo.username" ref="username">
        <img class="img_down" v-bind:src="img_down">
      </div>  
      <!-- 密码  -->
      <div class="login_user">
        <img class="img_user" v-bind:src="img_psd">
        <input class="text_user" type="password" placeholder="请输入密码" v-model="loginInfo.password">
        <img class="img_down" v-bind:src="img_down">
        <p class="psd_err">账号或密码错误</p>
      </div> 
      <!-- 点击  -->
      <div id="login_button" v-on:click="login" class="login" >
        <p class="foot">{{name}}</p>
      </div>
      <p class="p_last">忘记密码请联系管理员</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg:"小松教育后台管理系统",
      img_title:'http://ps3asrw1v.bkt.clouddn.com/login/u23.png',
      name:"登录",
      img_little:'http://ps3asrw1v.bkt.clouddn.com/login/u18.png',
      img_user:'http://ps3asrw1v.bkt.clouddn.com/login/u11.png',
      img_psd:'http://ps3asrw1v.bkt.clouddn.com/login/u15.png',
      img_down:'http://ps3asrw1v.bkt.clouddn.com/login/u9.png',
      loginInfo:{username:'',password:''}
    }
  },
  methods:{
    login(){
      this.$axios
      .post('/login',{username:this.loginInfo.username,password:this.loginInfo.password})
      .then(data => {
        var result = JSON.stringify(data);
        console.log(result)
      })
    }
  }
};

 new Vue({
  el:"#login_button",
  mounted () {
    console.log(this.$refs.name.focus());
  }
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heard{
  text-align: center;
}
.title{
  color: white;
  font-size: 16px;
  margin:10px 0 30px;
}
.block{
  background: white;
  border-radius:6px;
  margin-top: 10px;
}
.p_title{
  color:rgb(0, 0, 0);
  font-size: 20px;
  margin: 0;
  padding-top: 20px;
}

.login_user{
  overflow: hidden;
}
.img_user{
  float: left;
  margin:30px 10px 0 35px;
}
.text_user{
  float: left;
  margin-top:33px;
  border-width: 0;
}
.img_down{
  float: left;
  margin: 3px 0  15px 33px;
}
.login{
  width: 220px;
  height: 40px;
  background-color: rgba(145, 55, 243, 1);
  text-align: center;
  margin: 40px auto 0;
  border-radius:40px;
}
.foot{
  margin: 0;
  line-height: 40px;
  color: white;
  }
  .p_last{
    text-align: center;
    padding: 5px 0 40px 0;
    margin: 0%;
    font-size: 12px;
    color: #999999;
  }
  .psd_err{
    float: left;
    margin: 0 0 0 33px;
    font-size: 12px;
    color: red;
  }
</style>

<template>
  <div id="login" class="login_vue">
    <div class="login">
      <!-- 品牌图标  -->
      <div class="heard">
        <img v-bind:src="img_title" />
        <p class="title">{{msg}}</p>
      </div>
      <!-- 登录模块儿  -->
      <div class="block">
        <!-- 字体头  -->
        <div class="heard">
          <p class="p_title">{{name}}</p>
          <img v-bind:src="img_little" />
        </div>
        <!-- 账号 -->
        <div class="login_user">
          <img class="img_user" v-bind:src="img_user" />
          <input
            class="text_user"
            type="text"
            placeholder="请输入账号"
            v-model="loginInfo.username"
            @focus="username"
          />
          <img class="img_down" v-bind:src="img_down_1" />
        </div>
        <!-- 密码  -->
        <div class="login_user">
          <img class="img_user" v-bind:src="img_psd" />
          <input
            class="text_user"
            type="password"
            placeholder="请输入密码"
            v-model="loginInfo.password"
            @focus="password"
          />
          <img class="img_down" v-bind:src="img_down_2" />
          <p class="psd_err" v-if="tip">账号或密码错误</p>
        </div>
        <!-- 点击  -->
        <div class="login_div">
          <button
            id="login_button"
            v-on:click="login"
            class="login_button"
            v-bind:style="styleButton"
          >{{name}}</button>
        </div>
        <p class="p_last">忘记密码请联系管理员</p>
      </div>
    </div>
  </div>
</template>

<script>
import { truncate } from "fs";
export default {
  name: "login",

  el: "#login",
  data() {
    return {
      msg: "小松教育后台管理系统",
      img_title:
        "http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/登录页面/u23.png",
      name: "登录",
      img_little:
        "http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/登录页面/u18.png",
      img_user:
        "http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/登录页面/u11.png",
      img_psd:
        "http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/登录页面/u15.png",
      img_down_1:
        "http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/登录页面/u9.png",
      img_down_2:
        "http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/登录页面/u9.png",
      loginInfo: { username: "", password: "" },
      styleButton: {
        background: "rgba(145, 55, 243, 1)"
      },
      tip: false
    };
  },
  methods: {
    username: function() {
      (this.img_user =
        "http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/登录页面/u11_selected.png"),
        (this.img_down_1 =
          "http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/登录页面/u9_selected.png"),
        (this.img_psd =
          "http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/登录页面/u15.png"),
        (this.img_down_2 =
          "http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/登录页面/u9.png");
    },
    password: function() {
      (this.img_psd =
        "http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/登录页面/u15_selected.png"),
        (this.img_down_2 =
          "http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/登录页面/u9_selected.png"),
        (this.img_user =
          "http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/登录页面/u11.png"),
        (this.img_down_1 =
          "http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/登录页面/u9.png");
    },
    login() {
      this.styleButton.background = "";
      this.$axios
        .post("http://localhost:8089/login", {
          username: this.loginInfo.username,
          password: this.loginInfo.password
        })
        .then(result => {
          var res = JSON.stringify(result.data);
          console.log(res);
          if (result.data.code === 200) {
            this.$router.push("/index");
          } else {
            this.tip = true;
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_vue {
  width: 100%;
  height: 100%;
  border: 1px solid white;
  /* margin: 0%; */
  background: url("http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2/u2.png")
    no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.login {
  width: 300px;
  margin: 0 auto;
  margin-top: 16vh;
}
.heard {
  text-align: center;
}
.title {
  color: white;
  font-size: 16px;
  margin: 10px 0 30px;
}
.block {
  background: white;
  border-radius: 6px;
  margin-top: 10px;
}
.p_title {
  color: rgb(0, 0, 0);
  font-size: 20px;
  margin: 0;
  padding-top: 20px;
}

.login_user {
  overflow: hidden;
}
.img_user {
  float: left;
  margin: 30px 10px 0 35px;
}
.text_user {
  float: left;
  margin-top: 28px;
  border: 0;
  outline: none;
  height: 25px;
}
.img_down {
  float: left;
  margin: 3px 0 15px 33px;
}
.login_button {
  width: 220px;
  height: 40px;
  margin: 40px auto 0;
  border-radius: 40px;
  border: 0;
  color: white;
  outline: none;
}

.login_div {
  text-align: center;
}
.foot {
  margin: 0;
  line-height: 40px;
}
.p_last {
  text-align: center;
  padding: 5px 0 40px 0;
  margin: 0%;
  font-size: 12px;
  color: #999999;
}
.psd_err {
  float: left;
  margin: 0 0 0 33px;
  font-size: 12px;
  color: red;
}
</style>

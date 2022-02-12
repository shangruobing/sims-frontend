<template>
  <el-form align="center">
    <el-form-item label="用户名">
      <el-input
        v-model="username"
        type="text"
        placeholder="请输入用户名"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="密码">
      <el-input
        v-model="password"
        type="password"
        placeholder="请输入密码"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item>
      <el-button @click="login" type="primary" round>登录</el-button>
      <el-button @click="goRegister" round>没有账号，去注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      token: "",
    };
  },
  methods: {
    login() {
      const api = "http://127.0.0.1:8000/api/login/";
      const data = {
        username: this.username,
        password: this.password,
      };
      this.$axios
        .post(api, data)
        .then((response) => {
          let authorization = response.data["token"];
          localStorage.setItem("username", this.username);
          localStorage.setItem("authorization", authorization);
          console.log(response);
          console.log(response.status);
          this.$store.commit("setUsername", this.username);
        })
        .catch((error) => {
          alert("用户名或密码错误");
          console.log(error);
        });
      this.$store.commit("setIsShowLoginDialog", false);
      this.$store.commit("setIsLogin", true);
    },
    goRegister() {
      this.$store.commit("setIsShowLoginDialog", false);
      this.$store.commit("setIsShowRegisterDialog", true);
    },
  },
};
</script>

<style></style>

<template>
  <el-form label-position="right">
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
    <el-form-item label="再次输入密码">
      <el-input
        v-model="repeat"
        type="password"
        placeholder="请再次输入密码"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="姓名">
      <el-input
        v-model="name"
        type="text"
        placeholder="请输入姓名"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="年龄">
      <el-input
        v-model="age"
        type="number"
        placeholder="请输入年龄"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="用户类型">
      <el-select v-model="role" placeholder="请选择用户类型">
        <el-option value="请选择用户类型" disabled selected
          >请选择用户类型</el-option
        >
        <el-option value="学生">学生</el-option>
        <el-option value="教师">教师</el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button @click="register" type="primary">注册</el-button>
      <el-button @click="goLogin">已有账号，去登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      repeat: "",
      name: "",
      age: "",
      role: "",
    };
  },
  methods: {
    register() {
      const api = "http://127.0.0.1:8000/api/user/";
      //为role赋值 未测试
      this.role = this.role === "学生" ? 1 : 0;
      let data = {
        username: this.username,
        password: this.password,
        name: this.name,
        role: this.role,
        age: this.age,
      };
      if (this.password !== this.repeat) {
        alert("两次密码不一致");
      } else {
        this.$axios
          .post(api, data)
          .then((response) => {
            console.log(response);
            alert("注册成功！ 欢迎" + response.data["username"] + "的加入!");
            this.$store.commit("setIsShowRegisterDialog", false);
            this.$store.commit("setIsShowLoginDialog", true);
          })
          .catch((error) => {
            alert("用户已经存在！");
            // alert(error.response.status)
            // console.log(error.response);
          });
      }
    },
    goLogin() {
      this.$store.commit("setIsShowLoginDialog", true);
      this.$store.commit("setIsShowRegisterDialog", false);
    },
  },
};
</script>

<style></style>

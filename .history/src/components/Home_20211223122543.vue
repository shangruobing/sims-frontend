<template>
  <el-menu mode="horizontal">
    <template v-if="!this.$store.getters.getIsLogin">
      <el-menu-item
        index="1"
        @click="this.$store.commit('setIsShowLoginDialog', true)"
        >登录
      </el-menu-item>
      {{ $store.getters.isShowLoginDialog }}

      <el-menu-item
        index="2"
        @click="this.$store.commit('setIsShowRegisterDialog', true)"
        >注册
      </el-menu-item>
    </template>

    <!-- <template v-if="!store.getters.getIsLogin">
      <el-menu-item index="1" @click="store.commit('setIsShowLoginDialog',true)">登录</el-menu-item>
      <el-menu-item index="2" @click="store.commit('setIsShowRegisterDialog',true)">注册</el-menu-item>
    </template> -->

    <template v-if="this.$store.getters.getIsLogin">
      <!-- <template v-if="store.getters.getIsLogin"> -->
      <el-menu-item index="3">
        <el-avatar src="public/头像.jpg" v-if="username=='若冰'"></el-avatar>
        <el-avatar src="public/default.png"></el-avatar>
        <!-- <el-avatar src="../assets/default.png"></el-avatar> -->
      </el-menu-item>
      <!-- <el-menu-item index="4"> -->
      <!-- 欢迎 {{ store.getters.getUsername }}</el-menu-item> -->
      <el-menu-item index="4"
        >欢迎 {{ $store.getters.getUsername }}
      </el-menu-item>
      <el-menu-item index="6" @click="logout">注销</el-menu-item>
      <el-menu-item index="7" @click="$router.push('/content')">
        工作台
      </el-menu-item>
    </template>

    <el-sub-menu index="1">
      <template #title>{{ time }}</template>
      <el-calendar />
    </el-sub-menu>
    <el-sub-menu index="8">
      <template #title>{{ city }} {{ weather }} {{ temperature }}</template>
      <el-menu-item index="8-1" @click="setCity">更改城市</el-menu-item>
    </el-sub-menu>
  </el-menu>

  <el-carousel height="660px">
    <el-carousel-item
      ><img src="../assets/1.jpeg" alt="carousel"
    /></el-carousel-item>
    <el-carousel-item
      ><img src="../assets/2.png" alt="carousel"
    /></el-carousel-item>
    <el-carousel-item
      ><img src="../assets/3.jpg" alt="carousel"
    /></el-carousel-item>
  </el-carousel>

  <el-dialog v-model="isShowLoginDialog" title="登录" center>
    <Login></Login>
  </el-dialog>

  <el-drawer v-model="isShowRegisterDialog" direction="ltr" title="注册">
    <Register></Register>
  </el-drawer>
</template>

<script>
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { useStore } from "vuex";
// import store from "../store";

export default {
  components: {
    Login,
    Register,
  },
  setup() {
    const store = useStore();
  },
  data() {
    return {
      username: "",
      token: "",
      weather: "",
      city: "昆明",
      temperature: 0,
      time: new Date().toLocaleString("chinese", { hour12: false }),
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      console.log("localStorage clear OK");
      this.$store.commit("setIsLogin", false);
    },
    getWeather(city) {
      let api = "https://jisutqybmf.market.alicloudapi.com/weather/query?city=";
      let api1 = api + this.city;
      console.log(api1);
      this.$axios
        .get(api1, {
          headers: {
            authorization: "APPCODE e44f6e0ab76443889f38d5c6faa24e5a",
          },
        })
        .then((response) => {
          this.weather = response.data["result"]["weather"];
          this.city = response.data["result"]["city"];
          this.temperature = response.data["result"]["temp"] + "°C";
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setCity() {
      ElMessageBox.prompt("请输入城市", "更改天气预报城市", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        // inputPattern:
        //     /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: 'Invalid Email',
      })
        .then(({ value }) => {
          ElMessage({
            type: "success",
            message: `当前天气预报城市是:${value}`,
          });
          this.city = value;
          console.log(this.city);
          this.getWeather(this.city);
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "输入取消",
          });
        });
    },
  },
  computed: {
    isShowLoginDialog: {
      get() {
        return this.$store.state.isShowLoginDialog;
      },
      set(value) {
        this.$store.commit("setIsShowLoginDialog", value);
      },
    },
    isShowRegisterDialog: {
      get() {
        return this.$store.state.isShowRegisterDialog;
      },
      set(value) {
        this.$store.commit("setIsShowRegisterDialog", value);
      },
    },
  },

  mounted() {
    let token = localStorage.getItem("authorization");
    let username = localStorage.getItem("username");
    if (token) {
      // console.log("你的token是" + token);
      // console.log("你的username是" + username);

      this.$store.commit("setUsername", username);
      this.$store.commit("setIsLogin", true);
    }
    this.getWeather(this.city);
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
  width: auto;
}
</style>

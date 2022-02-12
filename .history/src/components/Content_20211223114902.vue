<template>
  <el-container>
    <el-header
      ><b>学生信息管理系统 </b>
      <!-- <el-page-header content="detail"/> -->
      <el-tag>当前用户:{{ username }}</el-tag>
      <!-- <el-tag style="float: left">切换登录</el-tag> -->
      <el-check-tag @change="onChange">切换登录</el-check-tag>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" :unique-opened="true">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <icon-menu />
              </el-icon>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1" @click="isShow('user')"
              >用户查询
            </el-menu-item>
            <el-menu-item index="1-2">新增用户</el-menu-item>
            <el-menu-item index="1-3">删除用户</el-menu-item>
            <el-menu-item index="1-4">信息修改</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <el-icon><location /></el-icon>
              <span>学生管理</span>
            </template>
            <el-menu-item index="2-1" @click="isShow('student')"
              >学生查询</el-menu-item
            >
            <el-menu-item index="2-2" @click="isShow('score')"
              >成绩查询</el-menu-item
            >
            <el-menu-item index="2-3">删除学生</el-menu-item>
            <el-menu-item index="2-4">信息修改</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <setting></setting>
              </el-icon>
              <span>统计功能</span>
            </template>
            <el-menu-item index="3-1" @click="isShow('chart')"
              >数据统计</el-menu-item
            >
            <el-menu-item index="3-2">统计2</el-menu-item>
            <el-menu-item index="3-3">统计3</el-menu-item>
            <el-menu-item index="3-4">统计4</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <user v-if="isShowUser.show" />
          <student v-if="isShowStudent.show" />
          <charts v-if="isShowChart.show" />
          <score v-if="isShowScore.show" />
          <el-empty
            v-if="isShowEmpty.show"
            description="好像什么也没有诶"
          ></el-empty>
          <login v-if="isLoginShow"></login>
          <router-view></router-view>
        </el-main>
        <!--        <el-footer>Footer</el-footer>-->
      </el-container>
    </el-container>
  </el-container>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import { Location, Message, Menu, Setting } from "@element-plus/icons";
import Student from "./StudentList.vue";
import User from "./UserList.vue";
import Score from "./ScoreList.vue";
import Testecharts from "./test_echarts.vue";
import Login from "./Login.vue";
export default defineComponent({
  components: {
    Message,
    Location,
    Setting,
    "icon-menu": Menu,
    student: Student,
    user: User,
    charts: Testecharts,
    score: Score,
    login: Login,
  },
  setup() {
    let isShowUser = ref({ name: "user", show: false });
    let isShowStudent = ref({ name: "student", show: false });
    let isShowChart = ref({ name: "chart", show: false });
    let isShowScore = ref({ name: "score", show: false });
    let isShowEmpty = ref({ name: "empty", show: true });

    let username = ref("");
    username.value = localStorage.getItem("username");

    const isShow = (name: String) => {
      let showState = [
        isShowUser,
        isShowStudent,
        isShowChart,
        isShowScore,
        isShowEmpty,
      ];

      for (let i = 0; i < showState.length; i++) {
        if (showState[i].value.name == name) {
          showState[i].value.show = true;
        } else {
          showState[i].value.show = false;
        }
      }
    };

    const isLoginShow = ref(false);
    const onChange = () => {
      console.log("点击了切换登录");
      isLoginShow.value = true;
      username.value = localStorage.getItem("username");
      isLoginShow.value = false;

    };
    return {
      isShow,
      isShowEmpty,
      isShowUser,
      isShowChart,
      isShowStudent,
      isShowScore,
      username,
      onChange,
      isLoginShow,
    };
  },
});
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 60px;
}

.el-aside {
  color: var(--el-text-color-primary);
}
</style>

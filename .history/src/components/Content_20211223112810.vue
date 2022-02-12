<template>
  <el-container>
    <el-header
      ><b>学生信息管理系统 </b>
      <el-tag style="float: left">当前用户:{{ username }}</el-tag>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" unique-opened="true">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <icon-menu />
              </el-icon>

              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1" @click="isShow('isShowUser')"
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
            <el-menu-item index="2-1" @click="isShow('isShowStudent')"
              >学生查询</el-menu-item
            >
            <el-menu-item index="2-2" @click="isShow('isShowScore')"
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
            <el-menu-item index="3-1" @click="isShow('isShowChart')"
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
          <el-empty v-if="empty" description="好像什么也没有诶"></el-empty>
          <router-view></router-view>
          <!--          {{$index.push('/student')}}-->
          <!--          <slot name="main"></slot>-->
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
  },
  setup() {
    let isShowUser = ref({ name: "user", show: false });
    let isShowStudent = ref({ name: "student", show: false });
    let isShowChart = ref({ name: "chart", show: false });
    let isShowScore = ref({ name: "score", show: false });
    let username = ref("");
    username.value = localStorage.getItem("username");
    // const tableData = ref(Array(20).fill(item));
    let empty = ref(false);
    // if (isShowChart.value&&isShowUser.value&&isShowStudent.value&&isShow)
    const isShow = (name: String) => {
      let showState = [isShowUser, isShowStudent, isShowChart, isShowScore];

      for (let i = 0; i < showState.length; i++) {
        // console.log(showState[i].value.show);
        // console.log(showState[i].value.name);
        if (showState[i].value.name == name) {
          showState[i].value.show = true;
          //   showState[i] = true;
        } else {
          showState[i].value.show = false;
        }
      }
      // console.log(showState[i]);

      // console.log("bool" + name);
    };

    return {
      isShow,
      isShowUser,
      isShowChart,
      isShowStudent,
      isShowScore,
      username,
      empty,
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

<template>
  <el-form align="center">
    <el-form-item label="请输入要查询的信息">
      <el-input
        v-model="question"
        type="text"
        placeholder="请输入要查询的信息"
        autocomplete="off"
      ></el-input>
      <el-button @click="search" type="primary" round>搜索</el-button>
    </el-form-item>
  </el-form>
  <ul>
    <li v-for="value in answer" v-bind:key="value.name">
      {{ value["answer"]["name"] }}
    </li>
    <!-- <li v-for="value in answer" v-bind:key="value.name">
      {{ value["m"]["name"] }}
    </li> -->
  </ul>
</template>

<script>
import { ref } from "vue";
import Axios from "axios";
export default {
  setup() {
    const question = ref(" ");
    let answer = ref([]);
    const search = () => {
      //   alert("Question:" + question.value);
      const data = {
        question: question.value,
      };
      const api = "http://127.0.0.1:8000/api/neo4j/";
      Axios.post(api, data)
        .then((response) => {
          console.log(response);
          //   for (let i = 0; i <= response["data"].length; i++)
          answer.value = response["data"];
          //   answer.value[i] = response["data"][i]["m"]["name"];
          // answer.value = response["data"][0]["m"]["name"];
          //   console.log(response["data"]);
          console.log(answer.value);
          if (response["data"].length === 0) {
            // answer.value='什么也没有找到'
            alert('什么也没有找到')
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return {
      question,
      answer,
      search,
    };
  },
};
</script>

<style></style>

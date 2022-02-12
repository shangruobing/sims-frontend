<template>
  <el-table :data="students" stripe style="width: 100%">
    <el-table-column prop="student_id" label="Student ID" />
    <el-table-column prop="class_name" label="Class" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="age" label="Age" />
  </el-table>

  <el-pagination
    layout="prev, pager, next"
    :page-count="this.pagination.pageNum"
    background
    :current-page="pagination.currentPage"
    :hide-on-single-page="true"
    @current-change="handleCurrentChange"
  >
  </el-pagination>
</template>


<script>
export default {
  data() {
    return {
      students: [],
      pagination: {
        count: 0,
        perPageCount: 0,
        pageNum: 0,
        currentPage: 1,
      },
    };
  },
  mounted() {
    const api = "http://127.0.0.1:8000/api/student/";

    this.$axios
      .get(api)
      .then((response) => {
        this.students = response.data["results"];
        this.pagination.count = response.data["count"];
        this.pagination.perPageCount = this.students.length;
        this.pagination.pageNum = Math.ceil(
          this.pagination.count / this.pagination.perPageCount
        );
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    handleCurrentChange(currentPage) {
      this.pagination.currentPage = currentPage;
      const api = "http://127.0.0.1:8000/api/student/";
      let api1 = api + "?page=" + this.pagination.currentPage;

      this.$axios
        .get(api1)
        .then((response) => {
          this.students = response.data["results"];
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>

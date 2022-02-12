<template>
  <el-table :data="students" border highlight-current-row>
    <el-table-column type="selection" width="55" />
    <el-table-column prop="user_id" label="User ID" width="85" />

    <el-table-column label="Name">
      <template #default="scope">
        <el-input
          placeholder="请输入内容"
          v-show="scope.row.show"
          v-model="scope.row.name"
        ></el-input>
        <span v-show="!scope.row.show">{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Age">
      <template #default="scope">
        <el-input
          placeholder="请输入内容"
          v-show="scope.row.show"
          v-model="scope.row.age"
        ></el-input>
        <span v-show="!scope.row.show">{{ scope.row.age }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Username">
      <template #default="scope">
        <el-input
          placeholder="请输入内容"
          v-show="scope.row.show"
          v-model="scope.row.username"
        ></el-input>
        <span v-show="!scope.row.show">{{ scope.row.username }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="role" label="Role" width="85" />
    <el-table-column
      prop="last_login"
      :formatter="dateFormatter"
      label="Last Login"
    />

    <el-table-column label="Operations">
      <template #default="scope">
        <el-button
          type="text"
          size="small"
          @click="
            scope.row.show = true;
            edit(scope.row);
          "
          v-show="!scope.row.show"
          >编辑
        </el-button>

        <el-button
          type="primary"
          size="mini"
          v-show="scope.row.show"
          @click="
            scope.row.show = false;
            confirm(scope.row);
          "
          >修改
        </el-button>

        <el-button
          type="text"
          size="mini"
          v-show="scope.row.show"
          @click="
            scope.row.show = false;
            cancel(scope.row, scope.$index);
          "
          >取消
        </el-button>

        <el-popconfirm
          confirm-button-text="Yes"
          cancel-button-text="No"
          icon-color="red"
          title="Are you sure to delete this?"
          @cancel="cancelEvent"
          @confirm="confirmEvent"
        >
          <template #reference>
            <el-button
              type="danger"
              size="mini"
              v-show="!scope.row.show"
              @click.prevent="
                scope.row.show = false;
                deleteRow(scope.$index, scope.row, students);
              "
              >删除
            </el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
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
import moment from "moment";

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
      editInfo: {
        username: "",
        name: "",
        age: "",
      },
      delInfo: {
        data: "",
        index: 0,
        row: "",
      },
    };
  },
  methods: {
    handleCurrentChange(currentPage) {
      this.pagination.currentPage = currentPage;
      const api = "http://127.0.0.1:8000/api/user/";
      let api1 = api + "?page=" + this.pagination.currentPage;

      this.$axios
        .get(api1)
        .then((response) => {
          this.students = response.data["results"];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    dateFormatter(row) {
      let date = row["last_login"];
      if (date === undefined || date === null) {
        return "";
      }
      // return moment(date).format("YYYY-MM-DD ")
      return moment(date).format("YYYY-MM-DD HH:mm:ss ");
    },
    edit(row) {
      this.editInfo = {
        username: row.username,
        name: row.name,
        age: row.age,
      };
    },
    confirm(row) {
      const data = {
        // user_id: row.user_id,
        username: row.username,
        name: row.name,
        age: row.age,
      };

      const api = "http://127.0.0.1:8000/api/user/" + row.user_id + "/";
      console.log(api);
      console.log(data);
      this.$axios
        .put(api, data)
        .then((response) => {
          // let authorization = response.data["token"];
          // localStorage.setItem("username", this.username);
          // localStorage.setItem("authorization", authorization);
          console.log(response);
          // this.$store.commit("setUsername", this.username);
        })
        .catch((error) => {
          // alert("出错啦");
          console.log(error);
        });

      console.log(data);
    },
    cancel(row, id) {
      this.students[id] = {
        user_id: row.user_id,
        role: row.role,
        last_login: row.last_login,
        username: this.editInfo.username,
        name: this.editInfo.name,
        age: this.editInfo.age,
      };
    },
    deleteRow(index, row, data) {
      this.delInfo.index = index;
      this.delInfo.row = row["user_id"];

      // data.splice(index, 1)
      let id = row["user_id"];
      this.currentRowData = row;

      let url = "http://127.0.0.1:8000/api/user/" + id + "/";
      // 关闭删除功能
      this.$axios
        .delete(url)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    confirmEvent() {
      console.log("confirm!");
      this.students.splice(this.delInfo.index, 1);
    },
    cancelEvent() {
      console.log("cancel!");
    },
  },
  mounted() {
    const api = "http://127.0.0.1:8000/api/user/";

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
};
</script>

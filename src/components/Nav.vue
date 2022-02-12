<template>
  <el-table
    :data="students"
    stripe
    style="width: 100%"
    @row-click="getCurrentRowData"
    highlight-current-row
    ref="multipleTable"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="user_id" label="User ID" />
    <el-table-column prop="name" label="Name" />

    <el-table-column prop="age" label="Age" />

    <el-table-column prop="username" label="Username" />
    <el-table-column prop="role" label="Role" />
    <el-table-column
      prop="last_login"
      :formatter="dateFormatter"
      label="Last Login"
    />

    <el-table-column label="Operations">
      <template v-slot:default="scope">
        <el-button type="text" size="small" @click="changeRow(scope.row)"
          >修改</el-button
        >

        <el-popconfirm
          confirm-button-text="Yes"
          cancel-button-text="No"
          :icon="InfoFilled"
          icon-color="red"
          title="Are you sure to delete this?"
          @cancel="cancelEvent"
          @confirm="confirmEvent"
        >
          <template #reference>
            <el-button
              type="danger"
              size="mini"
              @click.prevent="deleteRow(scope.$index, scope.row, students)"
              >删除
            </el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    layout="prev, pager, next"
    :page-count="this.pageNum"
    background
    :current-page="pagination.currentPage"
    :hide-on-single-page="true"
    @current-change="handleCurrentChange"
  >
  </el-pagination>

  <el-dialog v-model="showDialog" title="修改信息" center>
    <el-form label-position="right" align="center">
      <el-form-item label="用户名">
        <el-input
          v-model="newRowData.newusername"
          type="text"
          placeholder="请输入用户名"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="姓名">
        <el-input
          v-model="newRowData.newname"
          type="text"
          placeholder="请输入姓名"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input
          v-model="newRowData.newage"
          type="number"
          placeholder="请输入年龄"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item>
        <el-button @click="change" type="primary">修改</el-button>
        <el-button @click="showDialog = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
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
      showDialog: false,
      currentRowData: {
        user_id: 0,
        role: "",
        last_login: "",
        name: "",
        age: 0,
        username: "",
      },
      newRowData: {
        newname: "",
        newage: 0,
        newusername: "",
      },
      multipleSelection: [],
      delInfo: {
        data: "",
        index: 0,
        row: "",
      },
    };
  },
  mounted() {
    const api = "http://127.0.0.1:8000/api/user/";

    this.$axios
      .get(api)
      .then((response) => {
        this.students = response.data["results"];
        this.count = response.data["count"];
        this.perPageCount = this.students.length;
        this.pageNum = Math.ceil(this.count / this.perPageCount);

        // console.log("响应的数据", response.data)
        // console.log('数据总条数', this.count)
        // console.log('每页的条数', this.students.length)
        // console.log('需要的页数', this.pageNum)
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    handleCurrentChange(currentPage) {
      this.pagination.currentPage = currentPage;

      // console.log("点击第几页", this.pagination.currentPage) //点击第几页

      const api = "http://127.0.0.1:8000/api/user/";
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

    dateFormatter(row, column) {
      // console.log(row['last_login'])

      // let date = row[column.property]
      let date = row["last_login"];
      // console.log(column.property)
      if (date === undefined || date == undefined) {
        return "";
      }
      // return moment(date).format("YYYY-MM-DD ")
      return moment(date).format("YYYY-MM-DD HH:mm:ss ");
    },

    getCurrentRowData(value) {
      console.log("你点击的行的值是", value);
      this.currentRowData = value;
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log("多选", this.multipleSelection);
    },
    changeRow(row) {
      this.currentRowData = row;
      // this.isSet = true
      this.showDialog = true;
      this.newRowData.newname = this.currentRowData.name;
      this.newRowData.newusername = this.currentRowData.username;
      this.newRowData.newage = this.currentRowData.age;
      console.log(this.newRowData);
      // alert(row)
    },
    change() {
      console.log(this.currentRowData);
      let data = {
        username: this.newRowData.newusername,
        age: this.newRowData.newage,
        name: this.newRowData.newname,
      };
      console.log(data);
      let url =
        "http://127.0.0.1:8000/api/user/" + this.currentRowData.user_id + "/";
      this.$axios
        .put(url, data)
        .then((response) => {
          console.log(response);
          this.currentRowData.name = this.newRowData.newname;
          this.currentRowData.username = this.newRowData.newusername;
          this.currentRowData.age = this.newRowData.newage;
        })
        .catch((error) => {
          console.log(error);
        });
      this.showDialog = false;
    },

    deleteRow(index, row, data) {
      this.delInfo.index = index;
      this.delInfo.row = row["user_id"];

      // data.splice(index, 1)
      // let id = row['user_id']
      // console.log(row)
      // this.currentRowData = row

      // let url = 'http://127.0.0.1:8000/api/user/' + id + '/'
      //关闭删除功能
      // this.$axios.delete(url).then(
      //     (response) => {
      //       console.log(response)
      //     }
      // ).catch((error) => {
      //   console.log(error)
      // })
    },

    confirmEvent() {
      console.log("confirm!");
      this.students.splice(this.delInfo.index, 1);
    },
    cancelEvent() {
      console.log("cancel!");
    },
  },
};
</script>

<style>
</style>


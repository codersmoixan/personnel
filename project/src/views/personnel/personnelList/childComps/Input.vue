<template>
  <div class="zj-add-person">
    <form action="">
      <table class="archives-table">
        <tr class="archives-item">
          <td>
            <div class="tab-item"><label for="username">
              <table>
                <tr class="child-item">
                  <td>姓名：</td>
                  <td>
                    <el-input
                      placeholder="请输入内容"
                      v-model="userName"
                      id="username"
                      clearable class="item-input">
                    </el-input>
                  </td>
                </tr>
              </table>
            </label></div>
          </td>
          <td>
            <div class="tab-item">
              <table>
                <tr class="child-item">
                  <td>性别：</td>
                  <td>
                    <el-radio v-model="userRadio" label="1">男</el-radio>
                    <el-radio v-model="userRadio" label="2">女</el-radio>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="tab-item"><label for="userage">
              <table>
                <tr class="child-item">
                  <td>年龄：</td>
                  <td>
                    <el-input-number v-model="userAge" controls-position="right" @change="handleChange" :min="1"
                                     :max="100" id="userage"></el-input-number>
                  </td>
                </tr>
              </table>
            </label></div>
          </td>
          <td>
            <div class="tab-item">
              <table>
                <tr class="child-item">
                  <td>学历：</td>
                  <td>
                    <el-select v-model="value" clearable placeholder="请选择学历">
                      <el-option
                        v-for="item in ducationOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value" id="usereducation">
                      </el-option>
                    </el-select>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
        <tr class="archives-item">
          <td>
            <div class="tab-item"><label for="usernation">
              <table>
                <tr class="child-item">
                  <td>民族：</td>
                  <td>
                    <el-input
                      placeholder="请输入内容"
                      v-model="userNation"
                      id="usernation"
                      clearable class="item-input">
                    </el-input>
                  </td>
                </tr>
              </table>
            </label></div>
          </td>
          <td>
            <div class="tab-item"><label for="useridcard">
              <table>
                <tr class="child-item">
                  <td>身份证号码：</td>
                  <td>
                    <el-input
                      placeholder="请输入内容"
                      v-model="useridcard"
                      id="useridcard"
                      clearable class="item-input">
                    </el-input>
                  </td>
                </tr>
              </table>
            </label></div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="tab-item"><label for="userschool">
              <table>
                <tr class="child-item">
                  <td>毕业院校：</td>
                  <td>
                    <el-input
                      placeholder="毕业院校"
                      v-model="userSchool"
                      id="userschool"
                      clearable class="item-input">
                    </el-input>
                  </td>
                </tr>
              </table>
            </label></div>
          </td>
          <td>
            <div class="tab-item"><label for="usernationality">
              <table>
                <tr class="child-item">
                  <td>国籍：</td>
                  <td>
                    <el-input
                      placeholder="请输入内容"
                      v-model="userusErnationality"
                      id="usernationality"
                      clearable class="item-input">
                    </el-input>
                  </td>
                </tr>
              </table>
            </label></div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="tab-item"><label for="userprovince">
              <table>
                <tr class="child-item">
                  <td>省份：</td>
                  <td>
                    <el-input
                      placeholder="请输入内容"
                      v-model="userProvince"
                      id="userprovince"
                      clearable class="item-input">
                    </el-input>
                  </td>
                </tr>
              </table>
            </label></div>
          </td>
          <td>
            <div class="tab-item"><label for="usercity">
              <table>
                <tr class="child-item">
                  <td>市：</td>
                  <td>
                    <el-input
                      placeholder="请输入内容"
                      v-model="userCity"
                      id="usercity"
                      clearable class="item-input">
                    </el-input>
                  </td>
                </tr>
              </table>
            </label></div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="tab-item"><label for="useradress">
              <table>
                <tr class="child-item">
                  <td>详细地址：</td>
                  <td>
                    <el-input
                      placeholder="请输入内容"
                      v-model="userAdress"
                      id="useradress"
                      clearable class="item-input">
                    </el-input>
                  </td>
                </tr>
              </table>
            </label></div>
          </td>
          <td>
            <div class="tab-item"><label for="userphone">
              <table>
                <tr class="child-item">
                  <td>联系方式：</td>
                  <td>
                    <el-input
                      placeholder="请输入联系方式"
                      v-model="userPhone"
                      id="userphone"
                      clearable class="item-input">
                    </el-input>
                  </td>
                </tr>
              </table>
            </label></div>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Input", data() {
      return {
        userName: '',
        userAge: 0,
        userNation: '',
        ducationOptions: [
          {
            value: '选项1',
            label: '高中'
          },
          {
            value: '选项2',
            label: '大专'
          },
          {
            value: '选项3',
            label: '本科'
          },
          {
            value: '选项4',
            label: '研究生'
          },
          {
            value: '选项5',
            label: '博士'
          }
        ],
        value: '',
        userRadio: '1',
        userSchool: '',
        userusErnationality: '',
        userProvince: '',
        userCity: '',
        userAdress: '',
        userPhone: '',
        useridcard: ''
      }
    },
    methods: {
      handleChange() {

      }
    }
  }
</script>

<style scoped>
  .zj-add-person {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 1000px;
    height: 800px;
    border: 1px solid #ccc;
    background-color: #fff;
    z-index: 99;

  .title {
    padding-left: 15px;
    width: 100%;
    height: 60px;
    background-color: cornflowerblue;
    font-size: 20px;
    line-height: 60px;
  }

  .archives {
    padding: 20px;

  .archives-item > td {
    margin-left: 20px;
  }

  .tab-item {
    color: #000;
    width: 400px;

  .child-item td:first-of-type {
    width: 100px;
  }

  .child-item td:last-of-type {
    width: 300px;
  }

  .item-input {
    width: 100%;
  }

  }
  }
  }
</style>
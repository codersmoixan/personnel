<template>
  <div class="data-form">
    <div class="basic-data">
      <div class="data-title" @click="showPersonnelData">基本信息</div>
      <table>
        <tr>
          <td>
            <el-form-item label="姓名" class="base-font-size">
              <el-input type="text" v-model="formData.name" size="small" :disabled="isDisabled" :placeholder="showData.name"></el-input>
            </el-form-item>
          </td>
          <td>
            <el-form-item label="性别">
              <el-radio-group v-model="formData.gender" size="small">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="年龄">
              <el-input v-model="formData.age" size="small" :placeholder="showData.age"></el-input>
            </el-form-item>
          </td>
          <td>
            <el-form-item label="民族">
              <el-input v-model="formData.nation" size="small" :placeholder="showData.nation"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="身份证号码">
              <el-input v-model="formData.identityCardNumber" size="small" :placeholder="showData.identityCardNumber"></el-input>
            </el-form-item>
          </td>
          <td>
            <el-form-item label="国籍">
              <el-input v-model="formData.nationality" size="small" :placeholder="showData.nationality"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="学历">
              <el-select v-model="formData.education" placeholder="请选择学历" size="small">
                <el-option label="高中" value="高中"></el-option>
                <el-option label="专科" value="专科"></el-option>
                <el-option label="本科" value="本科"></el-option>
                <el-option label="研究生" value="研究生"></el-option>
                <el-option label="博士" value="博士"></el-option>
              </el-select>
            </el-form-item>
          </td>
          <td>
            <el-form-item label="毕业院校">
              <el-input v-model="formData.graduatedSchool" size="small" :placeholder="showData.graduatedSchool"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="省份">
              <el-input v-model="formData.province" size="small" :placeholder="showData.province"></el-input>
            </el-form-item>
          </td>
          <td>
            <el-form-item label="市">
              <el-input v-model="formData.city" size="small" :placeholder="showData.city"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="详细地址">
              <el-input v-model="formData.detailedAddress" size="small" :placeholder="showData.detailedAddress"></el-input>
            </el-form-item>
          </td>
          <td>
            <el-form-item label="联系方式">
              <el-input v-model="formData.contactInformation" size="small" :placeholder="showData.contactInformation"></el-input>
            </el-form-item>
          </td>
        </tr>
      </table>
    </div>
    <div class="subsidiary-data">
      <div class="data-title">附属信息</div>
      <table>
        <tr>
          <td>
            <el-form-item label="入职时间" size="small">
              <div class="block">
                <el-date-picker
                  v-model="formData.entryDate"
                  type="date"
                  placeholder="选择日期" value-format="yyyy-MM-dd HH:mm:ss">
                </el-date-picker>
              </div>
            </el-form-item>
          </td>
          <td>
            <el-form-item label="入职职位">
              <el-input v-model="formData.entryPosition" size="small"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="所属部门">
              <el-select v-model="formData.departmentId" placeholder="请选择部门" size="small">
                <el-option label="测试前端部门" value="测试前端部门"></el-option>
                <el-option label="Java开发测试" value="Java开发测试"></el-option>
                <el-option label="H5开发" value="H5开发"></el-option>
                <el-option label="开发部" value="开发部"></el-option>
                <el-option label="销售部" value="销售部"></el-option>
                <el-option label="董事会" value="董事会"></el-option>
              </el-select>
            </el-form-item>
          </td>
          <td>
            <el-form-item label="试用期">
              <el-input v-model="formData.probationPeriod" size="small"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="公司角色" size="small">
              <el-select v-model="formData.role" placeholder="请选择">
                <el-option label="普通员工" value="NORMAL_ROLE"></el-option>
                <el-option label="组长" value="GROUPADMIN_ROLE"></el-option>
                <el-option label="产品经理" value="PRODUCTADMIN_ROLE"></el-option>
                <el-option label="部门主管" value="DEPARTMENTADMIN_ROLE"></el-option>
                <el-option label="管理员" value="ADMIN_ROLE"></el-option>
              </el-select>
            </el-form-item>
          </td>
          <td>
            <el-form-item label="员工状态" size="small">
              <el-select v-model="formData.status" placeholder="请选择">
                <el-option label="在职" value="在职"></el-option>
                <el-option label="离职" value="离职"></el-option>
              </el-select>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="补贴" size="small">
              <el-input v-model="formData.otherSubsidies" size="small" @blur="outgoingData"></el-input>
            </el-form-item>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DataForm",
    props: {
      isDisabled: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      isDisabled(newval, olg) {
        console.log(newval);
      }
    },
    data() {
      return {
        formData: {
          age: '',
          city: '',
          contactInformation: '', // 联系方式
          departmentId: '', // 员工所属部门ID
          detailedAddress: '', // 详细地址
          education: '', // 学历
          enclosure: '暂无', // 附件
          entryDate: '', // 入职时间
          entryPosition: '', // 入职职位
          gender: '', // 性别
          graduatedSchool: '', // 毕业院校
          identityCardNumber: '', // 身份证号码
          name: '',
          nation: '', // 民族
          nationality: '', // 国籍
          otherSubsidies: '', // 补贴
          probationPeriod: '', // 试用期
          province: '', // 省份
          role: '',
          status: '', // 员工状态
        },
        showData: {},
        showId: '',
        editData: {}
      }
    },
    beforeCreate() {
      this.$bus.$on('clearFlag', data => {
        if(data.clear) {
          for(let item in this.formData) {
            this.formData[item] = ''
          }
        }
      })

      this.$bus.$on('zj_editData', data => {
        this.editData = data.editData
      })

    },
    created() {

    },
    methods: {
      showPersonnelData() {
        this.$bus.$on('zj_editData', data => {
          this.showId = data.showId
        })
        this.$bus.$on('clearFlag', data => {
          this.showId = data.showId
        })

        if(this.showId === 'add') {
          this.showData = this.formData
        }else {
          this.showData = this.editData
        }
        console.log(this.showId);
      },
      outgoingData() {
        console.log(this.isDisabled);
        /**1. 处理一些信息*/
        // 性别
        this.formData.gender = this.formData.gender === '男' ? 1 : 0
        // 员工状态
        this.formData.status = this.formData.status === '在职' ? 1 : 0
        // 销售部门
        switch (this.formData.departmentId) {
          case "测试前端部门": this.formData.departmentId = 1
            break
          case "Java开发测试": this.formData.departmentId = 6
            break
          case "H5开发": this.formData.departmentId = 7
            break
          case "销售部": this.formData.departmentId = 9
            break
          case "开发部": this.formData.departmentId = 10
            break
          case "董事会": this.formData.departmentId = 11
            break
        }
        /**2. 将数据发送出去*/
        this.$emit('receiveData', this.formData)
      }
    }
  }
</script>

<style scoped lang="less">
  .data-form {
    .data-title {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      font-weight: 700;
      border-bottom: 1px solid #eee;
    }

    .el-form-item {
      margin: 0;
    }
    label.el-form-item__label {
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 12px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .el-radio__label {
      font-size: 12px;
    }

    td {
      padding-right: 50px;
      height: 40px;
      line-height: 40px;
    }

  }
</style>
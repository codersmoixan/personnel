<template>
  <div class="cover" v-show="checkClose">
    <div class="check-personnel">
      <div class="title">
        <span>员工详细信息</span>
        <div class="close" @click="closeFlag">x</div>
      </div>
      <div class="show-personnel-data">
        <el-form ref="form" :model="personnelData" label-width="150px">
          <el-form-item label="姓名：">
            <el-col :span="5">
              <el-input :value="personnelData.name" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="工号：">
            <el-col :span="5">
              <el-input :value="null" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="年龄：">
            <el-col :span="4">
              <el-input :value="personnelData.age" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="性别：">
            <el-col :span="4">
              <el-input :value="personnelData.gender ? '男' : '女'" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="学历：">
            <el-col :span="5">
              <el-input :value="personnelData.education" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="毕业院校：">
            <el-col :span="10">
              <el-input :value="personnelData.graduatedSchool" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="民族：">
            <el-col :span="10">
              <el-input :value="personnelData.nation" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="国籍：">
            <el-col :span="10">
              <el-input :value="personnelData.nationality" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="户籍：">
            <el-col :span="10">
              <el-input :value="personnelData.province" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="市：">
            <el-col :span="10">
              <el-input :value="personnelData.city" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="详细地址：">
            <el-col :span="10">
              <el-input :value="personnelData.detailedAddress" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="身份证号码：">
            <el-col :span="10">
              <el-input :value="personnelData.identityCardNumber" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="试用期：">
            <el-col :span="10">
              <el-input :value="personnelData.probationPeriod" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="职位：">
            <el-col :span="10">
              <el-input :value="personnelData.entryPosition" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="公司担任角色：">
            <el-col :span="10">
              <el-input :value="personnelData.role" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="入职日期：">
            <el-col :span="10">
              <el-input :value="personnelData.entryDate" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="其他补贴：">
            <el-col :span="10">
              <el-input :value="personnelData.otherSubsidies" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="是否在职：">
            <el-col :span="10">
              <el-input :value="personnelData.status ? '在职' : '离职'" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="联系方式：">
            <el-col :span="10">
              <el-input :value="personnelData.contactInformation" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="工作经历：">
            <el-input type="textarea" v-model="personnelData.workExperience" :rows="8" disabled></el-input>
          </el-form-item>
          <el-form-item label="面试结果：">
            <el-input type="textarea" v-model="personnelData.interviewResults" :rows="8" disabled></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import PopupHeader from 'components/content/PopupHeader'

  export default {
    name: "CheckPersonnel",
    data() {
      return {
        checkClose: false,
        personnelId: 0,
        personnelData: {},
      }
    },
    mounted() {
      this.getPersonnelData()
    },
    methods: {
      getPersonnelData() {
        this.$bus.$on('zj_checkData', v => { // 获取开启弹窗开关 当前员工id
          this.checkClose = v.checkClose
          this.personnelData = v.personnelData
          console.log(this.personnelData)
        });

        this.$bus.$on('zj_offFlag', v => { // 获取关闭弹窗开关
          this.checkClose = v
        })
      },
      closeFlag() {
        this.checkClose = false
      }

    },
    components: {
      PopupHeader
    }
  }
</script>

<style scoped lang="less">
  .cover {
    .check-personnel {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 900px;
      height: 800px;
      overflow: hidden;
      border: 1px solid #ccc;
      background-color: #fff;
      border-radius: 5px;
      box-sizing: border-box;

      .title {
        position: relative;
        padding-left: 20px;
        width: 100%;
        height: 50px;
        background: #3a8ee6;
        font-size: 18px;
        line-height: 50px;

      }

      .show-personnel-data {
        padding: 20px;
        width: 100%;
        height: 750px;
        overflow: auto;
        color: #000;
      }
    }

  }

</style>
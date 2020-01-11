<template>
  <div class="details-cover cover">
    <div class="details-view add-view">
      <div class="title content-top">
        <span>简历详细信息</span>
        <div class="close" @click="closeFlag">x</div>
      </div>
      <div class="details ov-auto" v-if="Object.keys(tableItem) !== 0">
        <el-form ref="form" :model="tableItem" label-width="180px" label-position="left">
          <el-form-item label="姓名">
            <el-col :span="8">
              <el-input :value="tableItem.name" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="性别">
            <el-col :span="5">
              <el-input :value="tableItem.sex" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="年龄">
            <el-col :span="5">
              <el-input :value="tableItem.age" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="学历">
            <el-col :span="5">
              <el-input :value="tableItem.education" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="毕业院校">
            <el-col :span="10">
              <el-input :value="tableItem.school" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="专业技能">
            <el-col :span="10">
              <el-input :value="tableItem.major" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="工作年限">
            <el-col :span="13">
              <el-input :value="tableItem.workYears" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="期望薪资">
            <el-col :span="8">
              <el-input :value="tableItem.hopeSalary" disabled></el-input>
            </el-col>
          </el-form-item>
          <div class="dress">
            <el-form-item label="现居省份" class="item">
              <el-col :span="20">
                <el-input :value="tableItem.nHomeProvince" disabled></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="现居城市" class="item">
              <el-col :span="20">
                <el-input :value="tableItem.nHomeCity" disabled></el-input>
              </el-col>
            </el-form-item>
          </div>
          <el-form-item label="详细地址">
            <el-col :span="20">
              <el-input :value="tableItem.nHomeDress" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-col :span="15">
              <el-input :value="tableItem.phone" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="工作经历（可以写多个）">
            <el-input type="textarea" v-model="tableItem.workExperience" disabled rows="10"></el-input>
          </el-form-item>
          <el-form-item label="自我评价">
            <el-input type="textarea" v-model="tableItem.selfEvaluation" disabled rows="5"></el-input>
          </el-form-item>
          <el-form-item label="所属招聘计划">
            <el-checkbox-group v-model="form.type" disabled>
              <el-checkbox label="前端工程师招聘" name="type"></el-checkbox>
              <el-checkbox label="Java工程师招聘" name="type"></el-checkbox>
              <el-checkbox label="测试工程师招聘" name="type"></el-checkbox>
              <el-checkbox label="运维工程师招聘" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <div class="btn">
          <el-button type="primary" @click="closeFlag" class="submit">确定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecruitDetails",
    props: {
      tableItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        form: {
          type: ['前端工程师招聘']
        },
        close: false
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      closeFlag() {
        this.$emit('isCloseFlag', this.close)
      }
    }
  }
</script>

<style scoped lang="less">
    .details-cover {

      .details-view {
        .title {
          height: 50px;
          background-color: #3a8ee6;
          line-height: 50px;

          span {
            float: left;
            padding-left: 20px;
          }
          .close {
            float: right;
            width: 50px;
            height: 100%;
            text-align: center;
            cursor: pointer;
          }
        }

        .details {

          .dress {
            .item {
              display: inline-block;
            }
          }

          .btn {
            width: 100%;

            .submit {
              margin-left: 50%;
              transform: translateX(-50%);
              width: 300px;
            }
          }
        }
      }
    }
</style>
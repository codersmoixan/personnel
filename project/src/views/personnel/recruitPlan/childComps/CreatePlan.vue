<template>
  <div class="create-container">
    <el-form ref="form" :model="form" label-width="100px" label-position="left">
      <el-form-item label="计划名称">
        <el-col :span="8">
          <el-input v-model="form.recruitName"></el-input>
        </el-col>
      </el-form-item>
      <div class="block">
        <span class="demonstration title">创建时间</span>
        <el-date-picker
          v-model="form.createDate"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd HH:mm:ss"
          @change="planDate">
        </el-date-picker>
      </div>
<!--      <div class="block alone">-->
<!--        <span class="demonstration title">开始时间</span>-->
<!--        <el-date-picker-->
<!--          v-model="form.stratDate"-->
<!--          type="date"-->
<!--          placeholder="选择日期">-->
<!--        </el-date-picker>-->
<!--      </div>-->
<!--      <div class="block alone">-->
<!--        <span class="demonstration title end-date">结束时间</span>-->
<!--        <el-date-picker-->
<!--          v-model="form.endDate"-->
<!--          type="date"-->
<!--          placeholder="选择日期">-->
<!--        </el-date-picker>-->
<!--      </div>-->
      <div class="block">
        <span class="demonstration title">有效日期</span>
        <el-date-picker
          v-model="form.effectiveTime"
          type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['12:00:00']"
          @change="effectiveTime"
          value-format="yyyy-MM-dd HH:mm:ss">
        </el-date-picker>
      </div>
      <el-form-item label="计划状态">
        <el-select v-model="form.region" placeholder="请选择状态">
          <el-option label="已开始" value="已开始"></el-option>
          <el-option label="进行中" value="进行中"></el-option>
          <el-option label="已结束" value="已结束"></el-option>
          <el-option label="已废弃" value="已废弃"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="负责人">
        <el-col :span="3">
          <el-input v-model="form.staffIdRecruit"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="招聘人数">
        <el-input-number v-model="form.number" controls-position="right" @change="handleChange" :min="1" ></el-input-number>
      </el-form-item>
      <el-form-item label="招聘计划类型">
        <el-checkbox-group v-model="form.status">
          <el-checkbox label="开发" name="type"></el-checkbox>
          <el-checkbox label="测试" name="type"></el-checkbox>
          <el-checkbox label="运维" name="type"></el-checkbox>
          <el-checkbox label="产品" name="type"></el-checkbox>
          <el-checkbox label="销售" name="type"></el-checkbox>
          <el-checkbox label="客服" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="计划简要">
        <el-col :span="18">
          <el-input type="textarea" v-model="form.descs" rows="10"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="clearData">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {createPlan} from 'network/personnel'

  export default {
    name: "CreatePlan",
    data() {
      return {
        form: {
          id: '',
          recruitName: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          status: [],
          resource: '',
          descs: '',
          staffIdRecruit: '',
          createDate: '',
          stratDate: '',
          endDate: '',
          started: '',
          obsolete: '',
          ongoing: '',
          ended: '',
          number: ''
        },
        planDateTime: '',
        startTime: '',
        endTime: ''
      }
    },
    methods: {
      handleChange() {

      },
      clearData() {
        // 取消清空所以已经填了的数据
        for (let item in this.form) {
          this.form[item] = ''
        }
      },
      planDate(e) {
        this.planDateTime = e
      },
      effectiveTime(e) {
        console.log(e);
        this.startTime = e[0]
        this.endTime = e[1]
      },
      onSubmit() {
        // 创建一个对象用来存储计划
        let planList = {}
        planList.createdate = this.planDateTime
        planList.descs = this.form.descs
        planList.startDate = this.startTime
        planList.endDate = this.endTime
        planList.id = parseInt(Math.random() * 10000)
        planList.number = this.form.number
        planList.recruitName = this.form.recruitName
        planList.staffIdRecruit = parseInt(this.form.staffIdRecruit)
        planList.status = this.form.region
        planList.type = this.form.status[0]
        console.log(planList);

        this.$confirm('是否需要创建新计划, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 发送请求新建计划
          createPlan(planList).then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
          })
          this.$message({
            type: 'success',
            message: '创建成功!'
          });
          // 创建成功后清空表单
          for(let item in this.form) {
            this.form[item] = ''
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消创建'
          });
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .create-container {
    color: #606266;
    padding-left: 10px;

    .block {
      padding: 20px 0;

      .title {
        margin-right: 45px;
        font-size: 14px;
      }
      .title.end-date {
        margin-left: 45px;
      }
    }

    .block.alone {
      display: inline-block;
    }
  }
</style>
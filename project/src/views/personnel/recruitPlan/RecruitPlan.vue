<template>
  <div class="recruit-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="创建计划" name="create">
        <create-plan></create-plan>
      </el-tab-pane>
      <el-tab-pane label="计划列表" name="second">
        <plan-list :planList="planList"></plan-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import CreatePlan from './childComps/CreatePlan'
  import PlanList from './childComps/PlanList'

  export default {
    name: "RecruitPlan",
    data() {
      return {
        activeName: 'create',
        planList: []
      };
    },
    methods: {
      handleClick(tab, event) {
      }
    },
    components: {
      CreatePlan,
      PlanList
    }
  }
</script>

<style scoped lang="less">

</style>
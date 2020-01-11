<template>
  <div class="recruit-container pad-ten">
<!--    <el-tabs v-model="activeName" @tab-click="handleClick">-->
<!--      <el-tab-pane label="创建计划" name="create">-->
<!--        <create-plan></create-plan>-->
<!--      </el-tab-pane>-->
<!--      <el-tab-pane label="计划列表" name="second">-->
<!--        <plan-list :planList="planList"></plan-list>-->
<!--      </el-tab-pane>-->
<!--    </el-tabs>-->
    <div class="list">
      <plan-list :planList="planList"></plan-list>-->
    </div>
  </div>
</template>

<script>
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
      PlanList
    }
  }
</script>

<style scoped lang="less">
  .recruit-container {
    position: relative;
    width: 100%;
    height: 100%;
    .list {
      height: 100%;
    }


  }
</style>
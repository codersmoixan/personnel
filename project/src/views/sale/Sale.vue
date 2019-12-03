<template>
    <div>
       <el-tabs v-model="activeName" >
        <el-tab-pane label="产品管理" name="first">
            <product></product>
        </el-tab-pane>
        <el-tab-pane label="销售业绩管理" name="second">
            <sale-performance></sale-performance>
        </el-tab-pane>
        <el-tab-pane label="活动列表" name="third">
            <activity></activity>
        </el-tab-pane>
        <el-tab-pane label="组管理" name="fourth">
            <group></group>
        </el-tab-pane>
        <el-tab-pane label="市场调研管理" name="fifth">
            <market-research></market-research>
        </el-tab-pane>
        <el-tab-pane label="项目需求列表" name="sixth">
            <project-require></project-require>
        </el-tab-pane>
        <el-tab-pane label="订单列表" name="seventh">
            <order></order>
        </el-tab-pane>
        <el-tab-pane label="订单明细列表" name="eighth">
            <order-datails></order-datails>
        </el-tab-pane>
       </el-tabs>

    </div>
</template>
<script>
import {Tabs,TabPane} from 'element-ui';
import Product from './childComps/Product';
import SalePerformance from './childComps/SalePerformance';
import Activity from './childComps/Activity';
import Group from './childComps/Group';
import MarketResearch from './childComps/MarketResearch';
import ProjectRequire from './childComps/ProjectRequire';
import Order from './childComps/Order';
import OrderDatails from './childComps/OrderDatails';
import Vue from 'vue';
Vue.use(Tabs);
Vue.use(TabPane);
export default {
    name:'Sale',
    data(){
        return {
            activeName:'first'
        }
    },
    methods:{
        
    },
    components:{
        Product,
        SalePerformance,
        Activity,
        Group,
        MarketResearch,
        ProjectRequire,
        Order,
        OrderDatails
    }
}
</script>
<style  lang="less" scoped>
    @import url('../../assets/css/z_common.css');
   
</style>
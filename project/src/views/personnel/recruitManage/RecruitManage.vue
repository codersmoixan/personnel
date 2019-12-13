<template>
  <div class="manage-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="nHomeCity"
        label="现居城市">
      </el-table-column>
      <el-table-column
        prop="nHomeDress"
        label="详细地址">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系方式">
      </el-table-column>
      <el-table-column
        prop="hopeSalary"
        label="期望薪资">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <recruit-details v-show="isShow" @isCloseFlag="isCloseFlag" :tableItem="tableItem"></recruit-details>
  </div>
</template>

<script>
  import RecruitDetails from './childComps/RecruitDetails'

  export default {
    name: "RecruitManage",
    data() {
      return {
        tableData: [
          {
            id: '201912080001',
            name: '王小虎',
            sex: '男',
            age: '20',
            education: '本科',
            school: '五道口职业技术学院',
            nHomeProvince: '四川',
            nHomeCity: '成都',
            major: '计算机科学技术',
            workYears: '3',
            nHomeDress: '双流区商都路',
            phone: '19983159553',
            qq: '36758523',
            recruitType: [],
            hopeSalary: '15000',
            workExperience: '网络系统方案（局域网和广域网）的设计和规划，解答用户的疑问，根 据用户需求提出最佳解决方案；Cisco、IBM网络产品的现场调试和系统维护',
            selfEvaluation: '为人诚实守信，具备良好的心理素质和承受压力的能力，工作认真负责，作为技术人\n' +
              '员，我的不足之处是缺乏管理方面的经验。'
          },
          {
            id: '201912080002',
            name: '王小虎',
            sex: '男',
            age: '20',
            education: '本科',
            school: '五道口职业技术学院',
            nHomeProvince: '四川',
            nHomeCity: '成都',
            major: '计算机科学技术',
            workYears: '3',
            nHomeDress: '双流区商都路',
            phone: '19983159553',
            qq: '36758523',
            recruitType: [],
            hopeSalary: '15000',
            workExperience: '网络系统方案（局域网和广域网）的设计和规划，解答用户的疑问，根 据用户需求提出最佳解决方案；Cisco、IBM网络产品的现场调试和系统维护',
            selfEvaluation: '为人诚实守信，具备良好的心理素质和承受压力的能力，工作认真负责，作为技术人\n' +
              '员，我的不足之处是缺乏管理方面的经验。'
          },
          {
            id: '201912080003',
            name: '王小虎',
            sex: '男',
            age: '20',
            education: '本科',
            school: '五道口职业技术学院',
            nHomeProvince: '四川',
            nHomeCity: '成都',
            major: '计算机科学技术',
            workYears: '3',
            nHomeDress: '双流区商都路',
            phone: '19983159553',
            qq: '36758523',
            recruitType: [],
            hopeSalary: '15000',
            workExperience: '网络系统方案（局域网和广域网）的设计和规划，解答用户的疑问，根 据用户需求提出最佳解决方案；Cisco、IBM网络产品的现场调试和系统维护',
            selfEvaluation: '为人诚实守信，具备良好的心理素质和承受压力的能力，工作认真负责，作为技术人\n' +
              '员，我的不足之处是缺乏管理方面的经验。'
          },
          {
            id: '201912080004',
            name: '王小虎',
            sex: '男',
            age: '20',
            education: '本科',
            school: '五道口职业技术学院',
            nHomeProvince: '四川',
            nHomeCity: '成都',
            major: '计算机科学技术',
            workYears: '3',
            nHomeDress: '双流区商都路',
            phone: '19983159553',
            qq: '36758523',
            recruitType: [],
            hopeSalary: '15000',
            workExperience: '网络系统方案（局域网和广域网）的设计和规划，解答用户的疑问，根 据用户需求提出最佳解决方案；Cisco、IBM网络产品的现场调试和系统维护',
            selfEvaluation: '为人诚实守信，具备良好的心理素质和承受压力的能力，工作认真负责，作为技术人\n' +
              '员，我的不足之处是缺乏管理方面的经验。'
          },
          {
            id: '201912080005',
            name: '王小虎',
            sex: '男',
            age: '20',
            education: '本科',
            school: '五道口职业技术学院',
            nHomeProvince: '四川',
            nHomeCity: '成都',
            major: '计算机科学技术',
            workYears: '3',
            nHomeDress: '双流区商都路',
            phone: '19983159553',
            qq: '36758523',
            recruitType: [],
            hopeSalary: '15000',
            workExperience: '网络系统方案（局域网和广域网）的设计和规划，解答用户的疑问，根 据用户需求提出最佳解决方案；Cisco、IBM网络产品的现场调试和系统维护',
            selfEvaluation: '为人诚实守信，具备良好的心理素质和承受压力的能力，工作认真负责，作为技术人\n' +
              '员，我的不足之处是缺乏管理方面的经验。'
          },
          {
            id: '201912080006',
            name: '王小虎',
            sex: '男',
            age: '20',
            education: '本科',
            school: '五道口职业技术学院',
            nHomeProvince: '四川',
            nHomeCity: '成都',
            major: '计算机科学技术',
            workYears: '3',
            nHomeDress: '双流区商都路',
            phone: '19983159553',
            qq: '36758523',
            recruitType: [],
            hopeSalary: '15000',
            workExperience: '网络系统方案（局域网和广域网）的设计和规划，解答用户的疑问，根 据用户需求提出最佳解决方案；Cisco、IBM网络产品的现场调试和系统维护',
            selfEvaluation: '为人诚实守信，具备良好的心理素质和承受压力的能力，工作认真负责，作为技术人\n' +
              '员，我的不足之处是缺乏管理方面的经验。'
          },
          {
            id: '201912080007',
            name: '王小虎',
            sex: '男',
            age: '20',
            education: '本科',
            school: '五道口职业技术学院',
            nHomeProvince: '四川',
            nHomeCity: '成都',
            major: '计算机科学技术',
            workYears: '3',
            nHomeDress: '双流区商都路',
            phone: '19983159553',
            qq: '36758523',
            recruitType: [],
            hopeSalary: '15000',
            workExperience: '网络系统方案（局域网和广域网）的设计和规划，解答用户的疑问，根 据用户需求提出最佳解决方案；Cisco、IBM网络产品的现场调试和系统维护',
            selfEvaluation: '为人诚实守信，具备良好的心理素质和承受压力的能力，工作认真负责，作为技术人\n' +
              '员，我的不足之处是缺乏管理方面的经验。'
          },
          {
            id: '201912080008',
            name: '王小虎',
            sex: '男',
            age: '20',
            education: '本科',
            school: '五道口职业技术学院',
            nHomeProvince: '四川',
            nHomeCity: '成都',
            major: '计算机科学技术',
            workYears: '3',
            nHomeDress: '双流区商都路',
            phone: '19983159553',
            qq: '36758523',
            recruitType: [],
            hopeSalary: '15000',
            workExperience: '网络系统方案（局域网和广域网）的设计和规划，解答用户的疑问，根 据用户需求提出最佳解决方案；Cisco、IBM网络产品的现场调试和系统维护',
            selfEvaluation: '为人诚实守信，具备良好的心理素质和承受压力的能力，工作认真负责，作为技术人\n' +
              '员，我的不足之处是缺乏管理方面的经验。'
          },
          {
            id: '201912080009',
            name: '王小虎',
            sex: '男',
            age: '20',
            education: '本科',
            school: '五道口职业技术学院',
            nHomeProvince: '四川',
            nHomeCity: '成都',
            major: '计算机科学技术',
            workYears: '3',
            nHomeDress: '双流区商都路',
            phone: '19983159553',
            qq: '36758523',
            recruitType: [],
            hopeSalary: '15000',
            workExperience: '网络系统方案（局域网和广域网）的设计和规划，解答用户的疑问，根 据用户需求提出最佳解决方案；Cisco、IBM网络产品的现场调试和系统维护',
            selfEvaluation: '为人诚实守信，具备良好的心理素质和承受压力的能力，工作认真负责，作为技术人\n' +
              '员，我的不足之处是缺乏管理方面的经验。'
          },
          {
            id: '201912080010',
            name: '王小虎',
            sex: '男',
            age: '20',
            education: '本科',
            school: '五道口职业技术学院',
            nHomeProvince: '四川',
            nHomeCity: '成都',
            major: '计算机科学技术',
            workYears: '3',
            nHomeDress: '双流区商都路',
            phone: '19983159553',
            qq: '36758523',
            recruitType: [],
            hopeSalary: '15000',
            workExperience: '网络系统方案（局域网和广域网）的设计和规划，解答用户的疑问，根 据用户需求提出最佳解决方案；Cisco、IBM网络产品的现场调试和系统维护',
            selfEvaluation: '为人诚实守信，具备良好的心理素质和承受压力的能力，工作认真负责，作为技术人\n' +
              '员，我的不足之处是缺乏管理方面的经验。'
          }
        ],
        isShow: false,
        tableItem: {}
      }
    },
    methods: {
      handleClick(data) {
        this.isShow = true
        this.tableItem = data
      },
      isCloseFlag(data) {
        this.isShow = data
      }
    },
    components: {
      RecruitDetails
    }
  }
</script>

<style scoped lang="less">
  .manage-container {
    position: relative;
  }
</style>
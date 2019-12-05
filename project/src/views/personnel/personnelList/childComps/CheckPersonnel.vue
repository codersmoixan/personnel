<template>
  <div class="cover" v-show="checkClose">
    <div class="check-personnel">
      <popup-header :isClose="checkClose">
        <span slot="header-left">员工详细信息</span>
      </popup-header>
      <div class="show-personnel-data">
        <table>
          <tr>
            <td>姓名：</td>
            <td>{{personnelData.name}}</td>
          </tr>
          <tr>
            <td>性别：</td>
            <td>{{personnelData.sex}}</td>
          </tr>
          <tr>
            <td>年龄：</td>
            <td>{{personnelData.age}}</td>
          </tr>
          <tr>
            <td>毕业学校：</td>
            <td>{{personnelData.school}}</td>
          </tr>
          <tr>
            <td>国籍：</td>
            <td>{{personnelData.nationality}}</td>
          </tr>
          <tr>
            <td>籍贯：</td>
            <td>{{personnelData.province}}</td>
          </tr>
          <tr>
            <td>城市：</td>
            <td>{{personnelData.city}}</td>
          </tr>
          <tr>
            <td>详细地址：</td>
            <td>{{personnelData.dress}}</td>
          </tr>
          <tr>
            <td>民族：</td>
            <td>{{personnelData.nation}}</td>
          </tr>
          <tr>
            <td>身份证号码：</td>
            <td>{{personnelData.IDCard}}</td>
          </tr>
          <tr>
            <td>入职日期：</td>
            <td>{{personnelData.entryTime}}</td>
          </tr>
          <tr>
            <td>部门：</td>
            <td>{{personnelData.department}}</td>
          </tr>
          <tr>
            <td>实习时间（月）：</td>
            <td>{{personnelData.probation}}个月</td>
          </tr>
          <tr>
            <td>职位：</td>
            <td>{{personnelData.roleTitle}}</td>
          </tr>
          <tr>
            <td>邮箱：</td>
            <td>{{personnelData.email}}</td>
          </tr>
          <tr>
            <td>qq：</td>
            <td>{{personnelData.qq}}</td>
          </tr>
          <tr>
            <td>餐补：</td>
            <td>{{personnelData.mealAllowance}}</td>
          </tr>
          <tr>
            <td>车补：</td>
            <td>{{personnelData.fareSubsidy}}</td>
          </tr>
          <tr>
            <td>工作经历：</td>
            <td>{{personnelData.workHistory}}</td>
          </tr>
          <tr>
            <td>面试结果（领导的评价）：</td>
            <td>{{personnelData.interviewResults}}</td>
          </tr>
        </table>
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
        personnelData: {}
      }
    },
    mounted() {
      this.getPersonnelData()
    },
    methods: {
      getPersonnelData() {
        this.$bus.$on('zj_checkData', v => { // 获取开启弹窗开关 当前员工id
          this.checkClose = v.checkClose
          this.personnelId = v.checkListId

          this.getPersonId() // 获取当前员工信息
        });

        this.$bus.$on('zj_offFlag', v => { // 获取关闭弹窗开关
          this.checkClose = v
        })
      },
      getPersonId() {
        let personnelList = this.$store.state.list.list
        for(let item in personnelList) {
          // 判断传进来的id 获取员工的详细信息
          if(this.personnelId === personnelList[item].id) {
            this.personnelData = personnelList[item]
            console.log(this.personnelData)
          }
        }
      }

    },
    components: {
      PopupHeader
    }
  }
</script>

<style scoped lang="less">
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .2);
    z-index: 99;
    .check-personnel {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 900px;
      height: 800px;
      border: 1px solid #ccc;
      background-color: #fff;
      border-radius: 5px;
      box-sizing: border-box;
      .show-personnel-data {
        padding: 20px;
        color: #000;
      }
    }

  }

</style>
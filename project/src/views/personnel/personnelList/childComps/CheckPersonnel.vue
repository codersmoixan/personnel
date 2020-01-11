<template>
  <div class="cover" v-show="checkClose">
    <div class="check-personnel add-view">
      <div class="title content-top">
        <span>员工详细信息：{{personnelData.name}}（{{personnelData.id}}）</span>
        <div class="close" @click="closeFlag">x</div>
      </div>
      <div class="show-personnel-data ov-auto">
        <div class="basic-data">
          <div class="data-title">基本信息</div>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="item-title">员工ID</td>
              <td>{{personnelData.id}}</td>
              <td class="item-title">员工姓名</td>
              <td>{{personnelData.name}}</td>
            </tr>
            <tr>
              <td class="item-title">性别</td>
              <td>{{personnelData.gender}}</td>
              <td class="item-title">年龄</td>
              <td>{{personnelData.age}}</td>
            </tr>
            <tr>
              <td class="item-title">学历</td>
              <td>{{personnelData.education}}</td>
              <td class="item-title">毕业院校</td>
              <td>{{personnelData.graduatedSchool}}</td>
            </tr>
            <tr>
              <td class="item-title">身份证号码</td>
              <td>{{personnelData.identityCardNumber}}</td>
              <td class="item-title">国籍</td>
              <td>{{personnelData.nationality}}</td>
            </tr>
            <tr>
              <td class="item-title">民族</td>
              <td>{{personnelData.nation}}</td>
              <td class="item-title">籍贯</td>
              <td>{{personnelData.province}}</td>
            </tr>
            <tr>
              <td class="item-title">市区</td>
              <td>{{personnelData.city}}</td>
              <td class="item-title">联系方式</td>
              <td>{{personnelData.contactInformation}}</td>
            </tr>
            <tr>
              <td class="item-title">详细地址</td>
              <td>{{personnelData.detailedAddress}}</td>
              <td class="item-title"></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="subsidiary-data">
          <div class="data-title">附属信息</div>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="item-title">公司角色</td>
              <td>{{personnelData.role}}</td>
              <td class="item-title">在职部门</td>
              <td>{{personnelData.departmentName}}</td>
            </tr>
            <tr>
              <td class="item-title">员工状态</td>
              <td>{{personnelData.status}}</td>
              <td class="item-title">试用期</td>
              <td>{{personnelData.probationPeriod}}</td>
            </tr>
            <tr>
              <td class="item-title">其他补贴</td>
              <td>{{personnelData.otherSubsidies}}</td>
              <td class="item-title"></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="outer-data">
          <div class="data-title">其他信息</div>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="item-title">工作经历</td>
            </tr>
            <tr>
              <td class="text">
                <div class="content">{{personnelData.workExperience}}</div>
              </td>
            </tr>
          </table>
          <div class="mar-top">
            <table>
              <tr>
                <td class="item-title">面试结果</td>
              </tr>
              <tr>
                <td class="text">
                  <div class="content">{{personnelData.interviewResults}}</div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


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
    components: {}
  }
</script>

<style scoped lang="less">
  .cover {
    .check-personnel {
      .show-personnel-data {
        width: 100%;

        .data-title {
          height: 40px;
          line-height: 40px;
          font-weight: 700;
          color: #777;
          font-size: 16px;
        }

        table {
          width: 100%;
          border: 1px solid #ccc;
          border-collapse: collapse; // 合并表格边框
          tr {
            width: 100%;

            td {
              padding-left: 20px;
              width: 25%;
              height: 40px;
              box-sizing: border-box;
              border: 1px solid #ccc;
            }

            td.item-title {
              background-color: #eee;
            }
          }
        }
        .outer-data {
          table {
            border: none;
            td {
              border: none;
            }
            td.item-title {
              background-color: #fff;
              font-weight: 700;
            }
            td.text {
              padding: 0;
            }
            .content {
              width: 100%;
              height: 100px;
              border: 1px solid #ccc;
            }
          }
        }
      }
    }

  }

</style>
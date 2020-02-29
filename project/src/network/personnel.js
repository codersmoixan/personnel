import {httpGet, httpPost, postform} from './quest'
/**
 *
 *  1. 员工管理
 *
 * */
// 1. 获取员工信息列表
// export function getPersonnelList(page, pageSize) {
//   return request({
//     methods: 'get',
//     url: '/personnel/staff/list',
//     params: {
//       page,
//       pageSize
//     }
//   })
// }
export function getPersonnelList(page, pageSize) {
  return httpGet('/personnel/staff/list',{
    page,
    pageSize
  })
}

// 2. 查询员工信息
export function searchPersonnel(data) {
  return httpGet('/personnel/staff/list/condition', {
    id: data.searcheId,
    name: data.searchName,
    page: data.page,
    pageSize: data.pageSize
  })
}

// 3. 添加员工
export function addPersonnel(data) {
  return httpPost('/personnel/staff/add', data)
}


/**
 *
 *  2. 计划管理
 *
 * */
// 1. 获取计划列表
export function getRecruitPlanList(page, pageSize) {
  return httpGet('/personnel/recruit/list', {
    page,
    pageSize
  })
}

// 2. 创建新计划
export function createPlan(planData) {
  return httpPost('/personnel/recruit/add', planData)
}

// 3. 根据 id 删除计划
export function deletePlan(id) {
  return httpGet('/personnel/recruit/delete', {
    id
  })
}

// 4. 根据指定信息查询计划
export function searchPlan(data) {
  return httpGet('/personnel/recruit/list/condition', {
    id: data.searcheId,
    name: data.searchName,
    page: data.page,
    pageSize: data.pageSize
  })
}

// 5. 修改计划
export function editPlanData(data) {
  return httpPost('/personnel/recruit/update', data)
}


/**
 *
 *  3. 请假管理
 *
 * */
// 1. 获取请假列表
export function getLeaveList(page, pageSize) {
  return httpGet('/personnel/leave/list', {
    page,
    pageSize
  })
}

// 2. 根据条件查询请假条
export function queryLeaveItem(data) {
  return httpGet('/personnel/leave/list', {
    id: data.id,
    type: data.type,
    page: data.page,
    pageSize: data.pageSize
  })
}

/**
 *
 *  4. 部门管理
 *
 * */
// 1. 获取公司全部部门
export function getDepartmentList(page, pageSize) {
  return httpGet('/personnel/department/list', {
    page: page,
    pageSize: pageSize
  })
}

// 2. 条件查询获取某些部门列表
export function queryDepartmentList(data) {
  return httpGet('/personnel/department/list/condition', {
    id: data.id,
    name: data.name,
    page: data.page,
    pageSize: data.pageSize
  })
}

// 3. 申请添加部门
export function applyDepartment(data) {
  return httpPost('/personnel/department/add', data)
}

// 4. 更新部门信息
export function updateDepartmen(data) {
  return httpPost('/personnel/department/update', data)
}

// 5. 根据部门id删除部门
export function deleteDepartmen(id) {
  return httpGet('/personnel/department/delete', {
    id
  })
}

/**
 *  5. 培训管理
 * */
// 1. 获取全部员工参加培训的培训计划表
export function getPersonnelTrainPlanList(data) {
  return httpGet('/personnel/training/stafflist', {
    id: data.id,
    page: data.page,
    pageSize: data.pageSize
  })
}
// 2. 添加新的培训计划
export function addTrainPlan(data) {
  return httpPost('/personnel/training/add', data)
}
// 3. 条件查询指定的培训计划表
export function queryTrainPlan(data) {
  return httpGet('/personnel/training/list/condition/only', {
    id: data.id,
    name: data.name,
    page: data.page,
    pageSize: data.pageSize
  })
}
// 4. 为培训计划添加参与员工
export function addPlanPersonnel(data) {
  return httpGet('/personnel/training/add/staff', {
    trainingId: data.trainingId,
    staffId: data.staffId
  })
}

// 5. 更新指定培训计划
export function updateTrainPlan(data) {
  return httpPost('/personnel/training/update', data)
}
// 6. 删除指定计划
export function deleteTrainPlan(id) {
  return httpGet('/personnel/training/delete', {
    id
  })
}
// 7. 删除指定培训计划的指定员工
export function deletePlanPeronnel(data) {
  return httpGet('/personnel/training/delete/staff', {
    staffId: data.staffId,
    trainingId: data.trainingId
  })
}
// 8. 获取全部培训计划表
export function getTrainPlanList(data) {
  return httpGet('/personnel/training/list/only', {
    page: data.page,
    pageSize: data.pageSize
  })
}

/**
 * 6. 简历管理
 * */
// 1. 获取全部数据
export function getResumeListAll(data) {
  return httpGet('/personnel/recruitusers/list', {
    page: data.page,
    pageSize: data.pageSize
  })
}
// 2. 添加新的简历
export function addResume(data) {
  return httpPost('/personnel/recruitusers/add', data)
}
// 3. 更新简历
export function updateResume(data) {
  return httpPost('/personnel/recruitusers/update', data)
}
// 4. 查询指定数据
export function queryResumeById(data) {
  return httpGet('/personnel/recruitusers/list/condition', {
    id: data.id,
    name: data.name,
    page: data.page,
    pageSize: data.pageSize
  })
}
// 5. 删除指定数据
export function deleteResumeById(id) {
  return httpGet('/personnel/recruitusers/delete', {id})
}

/**
 * 7. 考勤管理
 * */
// 1. 获取全部考勤列表
export function getAttendanceList(data) {
  return httpGet('/personnel/attendance/list', {
    page: data.page,
    pageSize: data.pageSize
  })
}
// 2. 查询考勤
export function queryAttendanceById(data) {
  return httpGet('/personnel/attendance/list/condition', {
    id: data.id,
    staffId: data.staffId,
    workTimeScopeStart: data.workTimeScopeStart,
    workTimeScopeEnd: data.workTimeScopeEnd,
    page: data.page,
    pageSzie: data.pageSzie
  })
}

/**
 * 8. 薪资管理
 * */
// 1. 获取日工资
export function getSalaryDay(data) {
  return httpGet('/personnel/salaryday/list', {
    page: data.page,
    pageSize: data.pageSize
  })
}
// 2. 查询日信息
export function querySalaryDayData(data) {
  return httpGet('/personnel/salaryday/list/condition', {
    id: data.id,
    staffId: data.staffId,
    dateScopeStart: data.dateScopeStart,
    dateScopeEnd: data.dateScopeEnd,
    page: data.page,
    pageSize: data.pageSize
  })
}
// 3. 获取月工资
export function getSalaryMonth(data) {
  return httpGet('/personnel/salarymonth/list', {
    page: data.page,
    pageSize: data.pageSize
  })
}
// 4. 查询月信息
export function querySakaryMonthData(data) {
  return httpGet('/personnel/salarymonth/list/condition', {
    id: data.id,
    staffId: data.staffId,
    dateScopeStart: data.dateScopeStart,
    dateScopeEnd: data.dateScopeEnd,
    page: data.page,
    pageSize: data.pageSize
  })
}

/**
 * 9. 员工活动
 * */
// 1. 获取员工活动列表
export function getStaffActivityList(data) {
  return httpGet('/personnel/staffactivity/list', {
    page: data.page,
    pageSize: data.pageSize
  })
}
// 2. 查询活动
export function queryStaffActivity(data) {
  return httpGet('/personnel/staffactivity/list/condition', {
    id: data.id,
    title: data.title,
    page: data.page,
    pageSize: data.pageSize
  })
}
// 3. 添加活动
export function addStaffActivity(data) {
  return httpPost('/personnel/staffactivity/add', data)
}
// 4. 更新活动
export function updateStaffActivity(data) {
  return httpPost('/personnel/staffactivity/update', data)
}
// 5. 删除活动
export function deleteStaffActivity(id) {
  return httpGet('/personnel/staffactivity/delete', {
    id
  })
}

/**
 * 10. 小组管理
 **/
// 1. 获取小组列表
export function getGroupList(data) {
  return httpGet('/personnel/groupmanagement/list/only', {
    page: data.page,
    pageSize: data.pageSize
  })
}
// 2. 条件查询小组
export function queryGroup(data) {
  return httpGet('/personnel/groupmanagement/list/condition/only', {
    id: data.id,
    name: data.name,
    page: data.page,
    pageSize: data.pageSize
  })
}
// 3. 获取成员列表
export function getGroupMemberList(data) {
  return httpGet('/personnel/groupmanagement/list', {
    page: data.page,
    pageSize: data.pageSize
  })
}
// 4. 查询成员
export function queryGroupMember(data) {
  return httpGet('/personnel/groupmanagement/list/condition', {
    id: data.id,
    name: data.name,
    page: data.page,
    pageSize: data.pageSize
  })
}
// 5. 添加新的组
export function addGroup(data) {
  return httpPost('/personnel/groupmanagement/add', data)
}
// 6. 查询某个组的全部成员
export function queryGroupMemberById(data) {
  return httpGet('/personnel/groupmanagement/stafflist', {
    id: data.id,
    page: data.page,
    pageSize: data.pageSize
  })
}
// 7. 组添加成员
export function addGroupMember(data) {
  return httpGet('/personnel/groupmanagement/add/staff', {
    groupManagementId: data.groupManagementId,
    staffId: data.staffId,
    descs: data.descs
  })
}
// 8. 组员工删除
export function deleteGroupMember(data) {
  return httpGet('/personnel/groupmanagement/delete/staff', {
    staffId: data.staffId,
    groupManagementId: data.groupManagementId
  })
}
// 9. 更新组信息
export function updateGroup(data) {
  return httpPost('/personnel/groupmanagement/update', data)
}
// 10. 删除组
export function deleteGroup(id) {
  return httpGet('/personnel/groupmanagement/delete', {
    id
  })
}

/**
 * 11. 公告管理
 * */
// 1. 获取公告列表
export function getNoticeList(data) {
  return httpGet('/personnel/announcement/list', {
    page: data.page,
    pageSize: data.pageSize
  })
}
// 2. 查询某条公告
export function queryNoticeById(data) {
  return httpGet('/personnel/announcement/list/condition', {
    id: data.id,
    name: data.name,
    page: data.page,
    pageSize: data.pageSize
  })
}
// 3. 添加公告
export function addNotice(data) {
  return httpPost('/personnel/announcement/add', data)
}
// 4. 更新公告
export function updateNotice(data) {
  return httpPost('/personnel/announcement/update', data)
}
// 5. 删除公告
export function deleteNotice(id) {
  return httpGet('/personnel/announcement/delete', {
    id
  })
}
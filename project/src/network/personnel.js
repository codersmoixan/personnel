import {httpGet, httpPost, postform} from './quest'

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


// 3. 获取计划列表
export function getRecruitPlanList(page, pageSize) {
  return httpGet('/personnel/recruit/list', {
    page,
    pageSize
  })
}

// 4. 创建新计划
export function createPlan(planData) {
  return httpPost('/personnel/recruit/add', planData)
}

// 5. 根据 id 删除计划
export function deletePlan(id) {
  return httpGet('/personnel/recruit/delete', {
    id
  })
}

// 6. 根据指定信息查询计划
export function searchPlan(data) {
  return httpGet('/personnel/recruit/list/condition', {
    id: data.searcheId,
    name: data.searchName,
    page: data.page,
    pageSize: data.pageSize
  })
}

// 7. 修改计划
export function editPlanData(data) {
  return httpPost('/personnel/recruit/update', data)
}

// 8. 获取请假列表
export function getLeaveList(page, pageSize) {
  return httpGet('/personnel/leave/list', {
    page,
    pageSize
  })
}

// 9. 根据条件查询请假条
export function queryLeaveItem(data) {
  return httpGet('/personnel/leave/list', {
    id: data.id,
    type: data.type,
    page: data.page,
    pageSize: data.pageSize
  })
}
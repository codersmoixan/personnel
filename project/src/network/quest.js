// 数据请求的封装

import axios from 'axios'

// ES6 Promis 封装
export function request(config) {
  // 创建 axios 实例
  return new Promise((resolve, reject) => {
    // 1. 创建 axios 的实例对象
    const instance = axios.create({
      // baseURL: 'http://', // 备用接口
      // baseURL: 'http://',
      timeout: 10000
    })

    //过滤器（拦截器）
    instance.interceptors.response.use(res => {
      return res.data
    })

    // 通过实例发送网络请求
    instance(config).then(res => {
      resolve(res) // 请求成功 外部执行 then 获取数据
    }).catch(err => {
      reject(err) // 请求失败 返回错误信息
    })
  })
}
// 数据请求的封装

import axios from 'axios/index'
import qs from 'qs'

import options from './options'

// 域名地址
// axios.defaults.baseURL = options.loginURL //登录界面
axios.defaults.baseURL = options.personnelURL // 人事系统
// 默认请求头
// axios.defaults.headers.post['Content-type'] = 'application/json'
axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.timeout = 10000
// axios.defaults.transformRequest = [function (data) {
//   return qs.stringify(data)
// }]

const instance = axios.create({
  headers: {'content-type': 'multipart/form-data'}
})

// http request 拦截器
axios.interceptors.request.use(config => {
  if(config.method === 'post') {
    // 判断请求头的 content-type 处理相应的数据
    if(config.headers['Content-Type'] === 'application/json') {
      config.data = JSON.stringify(config.data)
    }else {
      config.data = qs.stringify(config.data)
    }
  }
  return config
}, err => {
  return Promise.reject(err)
})
// http response 拦截器
axios.interceptors.response.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

/*
* 封装 get 的方法
* @param url
* @param data
* @returns {Promise}
*
* */
export function httpGet(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then( res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}


/*
* 封装 post 请求
* @param url
* @param data
* @returns {Promise}
*
* */
export function httpPost(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      resolve(res.data)
    },err => {
      reject(err)
    })
  })
}


/*
* 封装 post 请求 FormData方式
* @param url
* @param data
* @returns {Promise}
*
* */
export function postform(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(res => {
      resolve(res.data)
    },err => {
      reject(err)
    })
  })
}








































// ES6 Promis 封装
// export function request(config) {
//   // 创建 axios 实例
//   return new Promise((resolve, reject) => {
//     // 1. 创建 axios 的实例对象
//     const instance = axios.create({
//       // baseURL: 'http://', // 备用接口
//       baseURL: 'http://121.41.67.25:8061',
//       // headers: { // 2.设置头 3. 在 vue.config.js 的 devServer proxy 配置跨域
//       //   post: {
//       //     'Content-Type': 'application/json'
//       //   }
//       // },
//       timeout: 10000
//     })
//
//     // request 过滤器
//     // instance.interceptors.request.use(config => {
//     //   config.headers['Content-Type'] = 'text/plain' // 关键所在
//     //   return config
//     // }, err => {
//     //   console.log(err)
//     //   Promise.reject(err)
//     // })
//     //response过滤器（拦截器）
//     instance.interceptors.response.use(res => {
//       return res.data
//     })
//
//     // 通过实例发送网络请求
//     instance(config).then(res => {
//       resolve(res) // 请求成功 外部执行 then 获取数据
//     }).catch(err => {
//       reject(err) // 请求失败 返回错误信息
//     })
//   })
// }
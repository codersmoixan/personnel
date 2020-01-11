import {httpGet, httpPost, postform} from "./quest"

/**
 * 1. 注册账号请求
 * */
export function registerNumber(data) {
  return httpPost('/signup', data)
}
/**
 * 2. 登录请求
 * */
export function loginRequest(data) {
  return httpPost('/login', data)
}
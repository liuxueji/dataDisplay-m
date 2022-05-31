// 请求接口的方法

// 导入网络请求
import axios from 'axios'
// 导入接口地址
import base from './base'
// 导入md5加密
import md5 from 'md5-js'

const api = {
  // 病毒信息获取
  getCovInfo() {
    return axios.get(base.host + base.covInfo)
  },
  getChinaData() {
    return axios.get(base.baseUrl + base.chinaData)
  },
  getWroldData() {
    return axios.get(base.baseUrl + base.worldData)
  },
  // 获得城市接口
  //参数 format=json&appid=14695&city_name=城市名称&sign=md5加密字符串
  getCity(city_name) {
    //md5加密规则：sign = MD5( appid1formatjsontime1545829466密钥) 查看加密规则说明 密钥不需要键名，请直接跟上32位的密钥
    //步骤：1. 安装 npm i md5-js -S  2. 引入md5模块  3. 使用加密处理 
    let sign = md5('appid14695city_name' + city_name + 'formatjson6e1a24d7ad475f0e3030d50e24cd9331')
    let canshu = 'format=json&appid=14695&city_name=' + city_name + '&sign=' + sign
    return axios.get(base.baseUrl + base.city + '?' + canshu)
  },
  //获取轮播图数据
  getSwiperBanner() {
    return axios.get(base.swiperBanner)
  },
  // 获取所有城市的数据
  getCitys() {
    return axios.get('/city.json')
  }
}

export default api
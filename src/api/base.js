// 公共请求的接口
const base = {
  host: 'http://api.tianapi.com',
  baseUrl: 'https://giea.api.storeapi.net', //国内疫情
  covInfo: '/ncov/index?key=b5919dd6f573907e378d0a6be7a78ff3', //疫情病毒信息
  chinaData: '/api/94/219?format=json&appid=14695&sign=1bc18d7a6b14d611796a51ac1be5fa71', //国内疫情接口
  worldData: '/api/94/220?format=json&appid=14695&sign=1bc18d7a6b14d611796a51ac1be5fa71', //国外疫情接口
  swiperBanner: 'http://iwenwiki.com/wapicovid19/ncovimg.php', //轮播图疫情
  city: '/api/94/221', //城市接口
  //format=json&appid=14695&city_name=城市名称&sign=md5加密字符串
}
export default base
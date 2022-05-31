<template>
  <div>
    <div class="title">疫情期间出行防疫政策</div>
    <!-- van-field
            v-model (value)	当前输入的值	number | string	-
            label	输入框左侧文本
            is-link	是否展示右侧箭头并开启点击反馈
            readonly	是否只读

        van-cascader
            title	顶部标题
            options	可选项数据源   数据格式=[] 
            active-color	选中状态的高亮颜色
            事件：  
            finish	全部选项选择完成后触发 { value, selectedOptions, tabIndex }
            close	点击关闭图标时触发
     -->
    <van-field v-model="goCity"
               is-link
               readonly
               label="出发城市"
               placeholder="请选择所在地区"
               @click="show = true" />
    <van-popup v-model="show"
               round
               position="bottom">
      <van-cascader v-model="cascaderValue"
                    title="请选择出发城市"
                    :options="options"
                    @close="show = false"
                    @finish="onFinish" />
    </van-popup>
    <van-field v-model="toCity"
               is-link
               readonly
               label="到达城市"
               placeholder="请选择所在地区"
               @click="show2 = true" />
    <van-popup v-model="show2"
               round
               position="bottom">
      <van-cascader v-model="cascaderValue2"
                    title="请选择出发城市"
                    :options="options"
                    @close="show2 = false"
                    @finish="toFinish" />
    </van-popup>
    <!-- 查询按钮 -->
    <div class="search">
      <van-button type="primary"
                  size="large"
                  @click="search">查询疫情防疫</van-button>
    </div>
    <!-- 政策查询结果 -->
    <div class="content">
      <div>出发城市:</div>
      <div>到达城市：</div>
    </div>
  </div>
</template>

<script>
import api from "../../api/index";
export default {
  data () {
    return {
      show: false, //弹框状态  false隐藏 true显示
      show2: false, //弹框状态  false隐藏 true显示
      goCity: "", //出发的值
      toCity: "", //到达的值
      from: "", //出发的id值
      to: "",
      cascaderValue: "",
      cascaderValue2: "",
      from_info: '',
      to_info: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish ({ value, selectedOptions }) {
      this.from = value;
      this.show = false;
      this.goCity = selectedOptions.map((option) => option.text).join("/");
    },
    toFinish ({ value, selectedOptions }) {
      this.to = value;
      this.show2 = false;
      this.toCity = selectedOptions.map((option) => option.text).join("/");
    },
    //----------------
    search () {
      console.log("查询城市疫情", this.from, this.to);
      //请求接口
      api.getTravelQuery({
        from: this.from,
        to: this.to
      })
        .then(res => {
          console.log('-查询城市疫情-', res.data);
          this.from_info = res.data.result.from_info;
          this.to_info = res.data.result.to_info;

        })
    },
  },
  created () {
    api.getTravel().then((res) => {
      console.log("---出行城市---", res.data.result);
      let result = res.data.result;
      //处理数据结构：[{text:'',value:'',children:[{}]},{}]
      let arr = [];
      result.forEach((item) => {
        let obj = {};
        obj.text = item.province; //省份名称
        obj.value = item.province_id; //省份的标识id
        obj.children = []; //二级区域
        item.citys.forEach((ele) => {
          let child = {};
          child.text = ele.city;
          child.value = ele.city_id;
          //追加给obj.children=[]
          obj.children.push(child);
        });
        // -----------
        arr.push(obj);
      });
      //打印处理后的数据
      console.log("打印处理后的数据", arr);
      this.options = arr;
    });
  },
};
</script>

<style lang='less' scoped>
  .title {
    padding: 0.2rem;
  }
  .search {
    margin: 0.2rem;
  }
</style>
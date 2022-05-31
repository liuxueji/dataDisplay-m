<template>
  <div>
    <van-index-bar :index-list="indexList">
      <template v-for="(item,index) in citys">
        <van-index-anchor :key="index"
                          index="1">{{item.initial}}
          <van-cell :title="i.name"
                    v-for="(i,index2) in item.list"
                    :key="index2"
                    @click="gotocity" />
        </van-index-anchor>
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  data () {
    return {
      list: [],
      citys: [],
      indexList: [],
    }
  },
  mounted () {
    api.getCitys().then((res) => {
      this.citys = res.data.city
      console.log(res.data.city)
      for (let i = 0; i < this.citys.length; i++) {
        let a = this.citys[i].initial
        this.indexList.push(a)
      }
      console.log('indexList', this.indexList);

    })
  },
  methods: {
    gotocity (e) {
      console.log(e.target.innerText);
      localStorage.setItem('city', e.target.innerText)
      this.$router.go(-1)
    }
  }
}
</script>

<style>
</style>

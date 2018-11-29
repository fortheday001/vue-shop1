<template>
  <div>
    <header class="top-header fixed-header">
      <a class="icona" href="javascript:history.go(-1)">
          <img src="../assets/images/left.png"/>
        </a>
      <h3>男装专区</h3>
        <a class="iconb" href="shopcar.html">
          <img src="../assets/images/shopbar.png"/>
        </a>
    </header>

    <div class="contaniner fixed-conta">
      <section class="list">
        <figure><img src="../assets/images/list-ban01.png"/></figure>
        <div class="search">
          <input v-model="search.keywords" type="search" placeholder="韩版卫衣" />
          <label><img @click="dosearch()" src="../assets/images/list-search.png"/></label>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">
                <span>全部</span>
              </a>
            </li>
            <li @click="setSort('id')" class="list-active">
              <a href="#">
                <span>新品</span>
                <img v-if="search.order=='desc'" src="../assets/images/up-red.png"/>
                <img v-else src="../assets/images/down-red.png"/>
              </a>
            </li>
            <li>
              <a href="#">
                <span>价格</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>评价</span>
              </a>
            </li>
          </ul>
        </nav>
        <ul class="wall"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="disableLoad"
          infinite-scroll-distance="50"
        >
          <li class="pic" v-for="(v,k) in goods" :key="k">
            <router-link :to="'/goods?id=' + v.id">
              <img :src="v.logo"/>
              <p>{{v.goods_name}}</p>
              <b>￥{{v.skus[0].price}}</b>
            </router-link>
          </li>
        </ul>
        <wv-loadmore id="stopLoad" v-if="isLastPage" type="lineDot" text="loading"></wv-loadmore>
        <wv-loadmore v-else></wv-loadmore>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      search:{
        "page":1,
        "per_page":10,
        "keywords":this.$route.query.keywords,
        "sorby":"id",
        "order":"desc"
      },
      goods: [],
      isLastPage: false,         // 是否已经到最后一页了
      disableLoad: false    // 是否禁止滚动加载
    }
  },
  // 当这个组件加载时会被自动调用（适用于对这个页面进行初始化的操作）
  created(){

    this.dosearch()

  },
  methods:{
    setSort(c){
      // 改变排序方式
      this.search.order = this.search.order == 'desc' ? 'asc' : 'desc'
      // 重新 加载数据
      this.dosearch()
    },
    // 当滚动条滚动到距离底部50像素时被调用
    loadMore(){
      // 先禁用滚动加载，否则的话会不停的加载
      this.disableLoad = true

      // 当当前页码+1
      this.search.page++
      this.axios.get('/goods', {params: this.search})
            .then(res=>{
              // 把新搜索出来的数据合并到原来的数组中
              this.goods = this.goods.concat(res.data.data.data)

              if(res.data.data.last_page > this.search.page)
              {
                // 设置允许继续加载
                this.disableLoad = false
              }
              else
              {
                // 设置已经到底，切换图标
                this.isLastPage = true
              }
            })

    },
    dosearch(){
      if( this.$route.query.keywords != "" )
      {
        // 重新激动自动加载（搜索条件初始化）
        this.search.page = 1
        this.isLastPage = false
        this.disableLoad = false

        /* 注意：当使用 axios 当 get 请求时，第二个参数必须要放到 params: 里面） */
        this.axios.get('/goods', {params: this.search})
            .then(res=>{
              this.goods = res.data.data.data
            })
      }
    }
  }
}
</script>

<style>
#stopLoad .weui-loadmore__tips{
  background-color: #efefef !important;
}
</style>

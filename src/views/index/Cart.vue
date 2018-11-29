<template>
  <div>
    <header class="page-header">
      <h3>购物车</h3>
    </header>

    <div class="contaniner fixed-contb">
      <section v-for="(v,k) in goods" :key="k" class="shopcar">
        <div class="shopcar-checkbox">
          <label @click="setChecked(v.id)" :class="{'shopcar-checkd':cart.find(v1=>v1.sku_id==v.id).checked}" for="shopcar" onselectstart="return false"></label>
          <input type="checkbox" id="shopcar"/>
        </div>
        <figure><img :src="v.goods.logo"/></figure>
        <dl>
          <dt>{{ v.goods.goods_name }}</dt>
          <dd>{{ v.sku_name }}</dd>
          <div class="add">
            <span>-</span>
            <input type="text" :value="cart.find(v1=>v1.sku_id==v.id).buy_count" />
            <span>+</span>
          </div>
          <h3>￥{{v.price}}</h3>
          <small><img src="../../assets/images/shopcar-icon01.png"/></small>
        </dl>
      </section>
      <!--去结算-->
      <div style="margin-bottom: 16%;"></div>

    </div>
    <div class="page-footer">
      <div class="shop-go">
        <b>合计：￥3223</b>
        <span><a href="buy.html">去结算（32）</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      goods:[],         // 服务器返回的商品信息
      cart: undefined   // 浏览器中购物车的数组
    }
  },
  methods:{
    setChecked(skuid){
      // 根据点击的商品ID找出购物车中对应的记录
      let cart = this.cart.find(v=>v.sku_id==skuid)
      // 修改勾选状态
      cart.checked = !cart.checked
      // 把内存中的数据写入浏览器
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  },
  created(){
    // 从浏览器中取出购物车数组
    let cart = localStorage.getItem('cart')
    // 如果购物车中有商品
    if(cart)
    {
      // 将 cart 转成 json 并保存到 vue 的数据对象中，这样就可以在页面中使用了
      this.cart = JSON.parse(cart)
      // 从购物车数组中提取出所有商品的 skuid 并且拼成一个字符串，格式；1,2,3....
      let skuIds = this.cart.flatMap(v => v.sku_id).join(',')
      this.axios.get('/goods?sku_ids='+skuIds)
                .then(res=>{

                  this.goods = res.data.data

                })
    }
    else
      this.$router.push('/')


  }
}
</script>

<style scoped>
.add span {
  padding: 0 8px !important;
}
.page-footer {
  position: fixed;
  bottom: 64px;
}
</style>

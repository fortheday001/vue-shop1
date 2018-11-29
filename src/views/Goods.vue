<template>
  <div>
    <header class="detail-header fixed-header">
      <router-link to="/category"><img src="../assets/images/detail-left.png"/></router-link>
      <a href="shopcar.html" class="right"><img src="../assets/images/shopbar.png"/></a>
    </header>
    <div class="contaniner fixed-contb">
      <section class="detail">
        <figure class="swiper-container">
          <wv-swipe :height="330" :autoplay="4000">
            <wv-swipe-item><img :src="goods.logo"></wv-swipe-item>
            <wv-swipe-item  v-for="(v,k) in goods.images" :key="k">
              <img :src="v.path">
            </wv-swipe-item>
          </wv-swipe>
        </figure>
        <dl class="jiage">
          <dt>
            <h3>{{goods.goods_name}}</h3>
            <div class="collect">
              <img src="../assets/images/detail-heart-hei.png"/>
              <p>收藏</p>
            </div>
          </dt>
          <dd v-if="goods.skus">
            <b>￥{{goods.skus[skuSelected].price}}</b>
            <p>（ 库存量：{{goods.skus[skuSelected].stock}} ）</p>
            <input type="button" value="￥10.00" readonly />
            <small>+356积分</small>
          </dd>
        </dl>

        <div class="chose">
          <ul>
            <li @click="skuSelected=k" :class="{'chose-active' : k==skuSelected}" v-for="(v,k) in goods.skus" :key="k">
              {{v.sku_name}}
            </li>
          </ul>
        </div>

        <div class="buy-count" v-if="goods.skus">
          购买数量：
          <wv-number-spinner
            :min="1"
            :max="goods.skus[skuSelected].stock"
            v-model="buyCount">
          </wv-number-spinner>
        </div>

        <ul class="same">
          <a href="#">
            <span>
              同类推荐
            </span>
            <li class="one">
              <img src="../assets/images/detail-pp01.png"/>
              <p>￥188.00</p>
            </li>
            <li>
              <img src="../assets/images/detail-pp02.png"/>
              <p>￥188.00</p>
            </li>
            <li>
              <img src="../assets/images/detail-pp03.png"/>
              <p>￥188.00</p>
            </li>
            <li>
              <img src="../assets/images/detail-pp04.png"/>
              <p>￥188.00</p>
            </li>
          </a>
        </ul>

        <article class="detail-article">
          <nav>
            <ul>
              <li>商品详情</li>
              <li class="article-active">评价</li>
            </ul>
          </nav>
          <section class="talkbox">
            <ul class="talk">
              <li>
                <figure><img src="../assets/images/detail-tou.png"/></figure>
                <dl>
                  <dt>
                    <p>弱小喵</p>
                    <time>2015.11.17</time>
                    <div class="star">
                      <span><img src="../assets/images/detail-iocn01.png"/></span>
                      <span><img src="../assets/images/detail-iocn01.png"/></span>
                      <span><img src="../assets/images/detail-iocn01.png"/></span>
                      <span><img src="../assets/images/detail-iocn001.png"/></span>
                      <span><img src="../assets/images/detail-iocn001.png"/></span>
                    </div>
                  </dt>
                  <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                  <small>颜色：豹纹凯特</small>
                </dl>
              </li>
              <li>
                <figure><img src="../assets/images/detail-tou.png"/></figure>
                <dl>
                  <dt>
                    <p>弱小喵</p>
                    <time>2015.11.17</time>
                    <div class="star">
                      <span><img src="../assets/images/detail-iocn01.png"/></span>
                      <span><img src="../assets/images/detail-iocn01.png"/></span>
                      <span><img src="../assets/images/detail-iocn01.png"/></span>
                      <span><img src="../assets/images/detail-iocn001.png"/></span>
                      <span><img src="../assets/images/detail-iocn001.png"/></span>
                    </div>
                  </dt>
                  <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                  <small>颜色：豹纹凯特</small>
                  <div class="picbox">
                    <img src="../assets/images/detail-pp01.png"/>
                    <img src="../assets/images/detail-pp02.png"/>
                    <img src="../assets/images/detail-pp03.png"/>
                    <img src="../assets/images/detail-pp04.png"/>
                  </div>
                </dl>
              </li>
              <li>
                <figure><img src="../assets/images/detail-tou.png"/></figure>
                <dl>
                  <dt>
                    <p>弱小喵</p>
                    <time>2015.11.17</time>
                    <div class="star">
                      <span><img src="../assets/images/detail-iocn01.png"/></span>
                      <span><img src="../assets/images/detail-iocn01.png"/></span>
                      <span><img src="../assets/images/detail-iocn01.png"/></span>
                      <span><img src="../assets/images/detail-iocn001.png"/></span>
                      <span><img src="../assets/images/detail-iocn001.png"/></span>
                    </div>
                  </dt>
                  <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                  <small>颜色：豹纹凯特</small>
                </dl>
              </li>
              <li>
                <figure><img src="../assets/images/detail-tou.png"/></figure>
                <dl>
                  <dt>
                    <p>弱小喵</p>
                    <time>2015.11.17</time>
                    <div class="star">
                      <span><img src="../assets/images/detail-iocn01.png"/></span>
                      <span><img src="../assets/images/detail-iocn01.png"/></span>
                      <span><img src="../assets/images/detail-iocn01.png"/></span>
                      <span><img src="../assets/images/detail-iocn001.png"/></span>
                      <span><img src="../assets/images/detail-iocn001.png"/></span>
                    </div>
                  </dt>
                  <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                  <small>颜色：豹纹凯特</small>
                  <div class="picbox">
                    <img src="../assets/images/detail-pp01.png"/>
                    <img src="../assets/images/detail-pp02.png"/>
                    <img src="../assets/images/detail-pp03.png"/>
                    <img src="../assets/images/detail-pp04.png"/>
                  </div>
                </dl>
              </li>
            </ul>
          </section>

        </article>
      </section>
    </div>

		<footer class="detail-footer fixed-footer">
			<div class="go-car">
				<input @click="addToCart" type="button" value="加入购物车"/>
			</div>
			<a href="buy.html" class="buy">
				立即购买
			</a>
		</footer>
  </div>
</template>

<script>
export default {
  data(){
    return {
      goods: {},
      buyCount: 1,       // 购买的数量
      skuSelected: 0     // 当前被选中的规格
    }
  },
  methods:{
    addToCart(){
      // 获取购物车数据
      let cart = localStorage.getItem('cart')
      // 将 cart 转成 json
      cart = cart ? JSON.parse(cart) : []
      // 获取当前勾选 skuid
      let skuid = this.goods.skus[this.skuSelected].id
      // 根据 skuid 从购物车中查找这件商品
      let searchInfo = cart.find((v)=> v.sku_id == skuid)
      if(searchInfo)
      {
        // 如果购物车中已经存在这件商品就直接在原来基础上加上这次购买的
        searchInfo.buy_count += this.buyCount
        // 如果超出库存就设置为最大库存量
        if(searchInfo.buy_count > this.goods.skus[this.skuSelected].stock)
          searchInfo.buy_count = this.goods.skus[this.skuSelected].stock
      }
      else
      {
        // 放到购物车数组中
        cart.push({
          "sku_id":skuid,
          "buy_count":this.buyCount,
          "checked":true
        })
      }
      // 把数组写回浏览器
      localStorage.setItem('cart', JSON.stringify(cart))
      // 跳转到购物车页面
      this.$router.push('/cart')
    }
  },
  created(){
    this.axios.get('/goods?id='+this.$route.query.id)
        .then(res=>{
          this.goods = res.data.data
        })
  }
}
</script>

<style>
.buy-count {
  background-color: #fff;
  padding: 20px;
  margin-top: 5px;
}
.buy-count .wv-number-spinner {
  width: 50%;
  float: right;
}
</style>

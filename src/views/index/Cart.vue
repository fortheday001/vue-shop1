<template>
  <div>
    <header class="page-header">
      <h3>购物车</h3>
    </header>

    <div class="contaniner fixed-contb">
      <section v-for="(v,k) in goods" :key="k" class="shopcar">
        <div class="shopcar-checkbox">
          <label @click="select(k)" :class="{'shopcar-checkd':v.checked}" for="shopcar" onselectstart="return false"></label>
          <input type="checkbox" id="shopcar"/>
        </div>
        <figure><img src="../../assets/images/shopcar-ph01.png"/></figure>
        <dl>
          <dt>{{v.title}}</dt>
          <dd v-for="(v1,k1) in v.attrs" :key="k1">{{v1}}</dd>
          <div class="add">
            <span @click="minus(k)">-</span>
            <input type="text" v-model="v.number">
            <span @click="add(k)">+</span>
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
        <b>合计：￥{{totalInfo.price}}</b>
        <span><a href="buy.html">去结算（{{totalInfo.count}}）</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 计算属性
  computed: {
    totalInfo(){
      let price = 0  // 总价
      let count = 0 // 总数
      for(let i=0;i<this.goods.length;i++){

        if(this.goods[i].checked) {
          price += this.goods[i].price * this.goods[i].number
          count += this.goods[i].number
        }

      }
      // 返回
      return {
        price:price,
        count:count
      }
    }
  },
  methods:{
    select(k){
      this.goods[k].checked = !this.goods[k].checked
    },
    minus(k){
      if(this.goods[k].number>1)
        this.goods[k].number--
    },
    add(k){
      this.goods[k].number++
    }
  },
  data(){
    return {
      goods:[
        {
          id:1,
          title:"超级大品牌服装，现在买只要998",
          attrs:[
            '颜色：经典绮丽款',
            '尺寸：L',
          ],
          price:653.00,
          number:3,
          logo:'../../assets/images/shopcar-icon01.png',
          checked:false
        },
        {
          id:2,
          title:"超级大品牌服装，现在买只要998",
          attrs:[
            '颜色：经典绮丽款',
            '尺寸：L',
          ],
          price:653.00,
          number:1,
          logo:'../../assets/images/shopcar-icon01.png',
          checked:true
        }
      ]
    }
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

<template>
  <div>
    <!-- 子视图 -->
    <router-view></router-view>

    <footer class="page-footer fixed-footer">
      <ul>
        <li :class="{'active':$route.name=='index'}">
          <router-link to="/">
            <img v-if="$route.name=='index'" src="../assets/images/footer01.png"/>
            <img v-else src="../assets/images/footer001.png"/>
            <p>首页</p>
          </router-link>
        </li>
        <li :class="{'active':$route.name=='category'}">
          <router-link to="/category">
            <img v-if="$route.name=='category'" src="../assets/images/footer02.png"/>
            <img v-else src="../assets/images/footer002.png"/>
            <p>分类</p>
          </router-link>
        </li>
        <li :class="{'active':$route.name=='cart'}">
          <router-link to="/cart">
            <img v-if="$route.name=='cart'" src="../assets/images/footer03.png"/>
            <img v-else src="../assets/images/footer003.png"/>
            <p>购物车</p>
          </router-link>
        </li>
        <li :class="{'active':$route.name=='profile'}">
          <router-link to="/profile">
            <img v-if="$route.name=='profile'" src="../assets/images/footer04.png"/>
            <img v-else src="../assets/images/footer004.png"/>
            <p>个人中心</p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

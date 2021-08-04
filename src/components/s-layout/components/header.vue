<template>
  <header class="header-menu flex flex-x-space-between p-lr20">
    <!-- left -->
    <section class="left flex">
      <!-- logo -->
      <header-left-logo></header-left-logo>
      <!-- 顶部菜单 -->
      <header-left-menu></header-left-menu>
    </section>

    <!-- right -->
    <section class="right flex flex-y-center m-t20">
      <!-- 社群 -->
      <header-right-group></header-right-group>
      <!-- 费用 -->
      <!-- <header-right-cost></header-right-cost> -->
      <!-- 工单 -->
      <header-right-order></header-right-order>
      <!-- 企业管理 -->
      <header-right-company></header-right-company>
      <!-- 购物车 -->
      <header-right-cart></header-right-cart>
      <!-- 消息中心 -->
      <header-right-message></header-right-message>
      <!-- 用户信息 -->
      <header-right-userinfo></header-right-userinfo>
      <!-- 切换主题 -->
      <header-right-theme></header-right-theme>
    </section>
  </header>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

import HeaderLeftLogo from './header-left-logo.vue'
import HeaderLeftMenu from './header-left-menu.vue'
import HeaderRightGroup from './header-right-group.vue'
// import HeaderRightCost from './header-right-cost.vue'
import HeaderRightOrder from './header-right-order.vue'
import HeaderRightCompany from './header-right-company.vue'
import HeaderRightCart from './header-right-cart.vue'
import HeaderRightMessage from './header-right-message.vue'
import HeaderRightUserinfo from './header-right-userinfo.vue'
import HeaderRightTheme from './header-right-theme.vue'

export default defineComponent({
  components: {
    HeaderLeftLogo,
    HeaderLeftMenu,
    HeaderRightGroup,
    // HeaderRightCost,
    HeaderRightOrder,
    HeaderRightCompany,
    HeaderRightCart,
    HeaderRightMessage,
    HeaderRightUserinfo,
    HeaderRightTheme
  },
  setup () {
    const full = computed(() => useStore()?.state?.ScreenFull?.full ?? '')

    return {
      full
    }
  }
})
</script>
<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
}
</style>

<template>
  <s-theme-popover>
    <template #handle>
      <span class="cursor-pointer m-l15">费用</span>
    </template>
    <div class="infos flex">
      <ul class="popper-menu">
        <li><a href="#">总览</a></li>
        <li><a href="#">收支</a></li>
        <li><a href="#">订单</a></li>
        <li><a href="#">我的产品</a></li>
        <li><a href="#">退订管理</a></li>
        <li><a href="#">合同管理</a></li>
        <li><a href="#">发票管理</a></li>
        <li><a href="#">进入费用中心</a></li>
      </ul>
    </div>
  </s-theme-popover>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <s-theme-popover>
    <template #handle>
      <span class="cursor-pointer m-l15">
        UserName
        <i class="el-icon-arrow-down"></i>
      </span>
    </template>
    <div class="infos flex">
      <ul class="popper-menu">
        <li><a href="#">修改密码</a></li>
        <li><a href="#">退出登录</a></li>
      </ul>
    </div>
  </s-theme-popover>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <s-theme-popover>
    <template #handle>
      <span class="cursor-pointer m-l15">功能</span>
    </template>
    <div class="infos flex">
      <ul class="popper-menu">
        <li><a href="#">全局组件</a></li>
        <li><a href="#">公共方法</a></li>
        <li><a href="#">全局脚本</a></li>
      </ul>
    </div>
  </s-theme-popover>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

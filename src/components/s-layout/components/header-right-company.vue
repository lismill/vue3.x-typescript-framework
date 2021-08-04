<template>
  <s-theme-popover>
    <template #handle>
      <span class="cursor-pointer m-l15">资源列表</span>
    </template>
    <div class="infos flex">
      <ul class="popper-menu">
        <li><a href="#">合作伙伴</a></li>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">在线文档</a></li>
      </ul>
    </div>
  </s-theme-popover>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

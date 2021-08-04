<template>
  <div class="logo flex flex-y-center">
    <!-- <img src="@/assets/images/common/logo.png" /> -->
    <s-svg-icon
      class="icon cursor-pointer"
      name="layergroup-fill"
      size="28px"
    />
    <span class="m-l16" id="title">Vue.js3.x + TypeScript 后台管理中心</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
<style lang="scss" scoped>
.icon {
  margin-left: -4px;
  opacity: 0.85;
  &:hover {
    opacity: 1;
  }
}
</style>

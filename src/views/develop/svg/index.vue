<template>
  <div class="icon flex bg-w">
    <div v-for="icon in icons" :key="icon">
      <dl>
        <el-tooltip
          effect="dark"
          :show-after="800"
          :content="`<s-svg-icon name='${icon}' />`"
          placement="bottom"
        >
          <dt><s-svg-icon :name="icon" size="26px" /></dt>
        </el-tooltip>
        <dd class="m-t15">{{ icon }}</dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    // eslint-disable-next-line no-undef
    const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys()
    const req = require.context('@/assets/svg', true, /\.svg$/)
    const icons = requireAll(req).map(item => item
      .replaceAll('./basic/', '')
      .replaceAll('.svg', ''))
    return {
      icons
    }
  }
})
</script>
<style lang="scss" scoped>
.icon {
  justify-content: space-between;
  text-align: center;
  dl {
    width: 130px;
    padding: 35px 0;
    &:hover {
      cursor: pointer;
      color: $color-primary;
    }
  }
}
</style>

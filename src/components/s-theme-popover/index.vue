<template>
  <el-popover
    @show="show"
    :popper-class="`${theme}-popper`"
    :trigger="trigger"
    :title="title"
    :width="width"
    :placement="placement"
    :showArrow="showArrow"
  >
    <template #reference>
      <span>
        <slot name="handle"></slot>
      </span>
    </template>
    <slot>Popover</slot>
  </el-popover>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  // element-plus Popover 配置
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '200px'
    },
    placement: {
      type: String,
      default: 'bottom-end'
    },
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  setup () {
    // 根据当前主题设置动态class
    const theme = ref(
      localStorage.getItem('syy_theme') ?? 'theme-dark' ?? 'theme-dark'
    )
    const show = () =>
      (theme.value = localStorage.getItem('syy_theme') ?? 'theme-dark')
    return {
      theme,
      show
    }
  }
})
</script>

<template>
  <svg
    :class="svgClass"
    :style="{
      color: color,
      width: size,
      height: size
    }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    // svg name
    name: {
      type: String,
      required: true
    },
    // svg 颜色
    color: {
      type: String,
      default: ''
    },
    // svg 大小
    size: {
      type: String,
      default: '16px'
    }
  },
  setup (props) {
    const iconName = computed(() => `#icon-${props.name}`)
    const svgClass = computed(() =>
      props.name ? `svg-icon icon-${props.name}` : 'svg-icon'
    )
    return {
      iconName,
      svgClass
    }
  }
})
</script>

<style lang="scss">
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>

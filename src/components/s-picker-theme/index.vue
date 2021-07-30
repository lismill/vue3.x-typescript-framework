<template>
  <el-color-picker
    v-model="defaultColor"
    show-alpha
    :predefine="predefineColors"
    @change="changeColor"
  ></el-color-picker>
  {{ color }}
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String,
      default: '#001529'
    },
    predefineColors: {
      type: Array,
      default: () => [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgb(255, 120, 0)',
        'hsl(181, 100%, 37%)',
        'hsv(51, 100, 98)'
      ]
    }
  },
  setup (props) {
    const defaultColor = ref(props.color)
    const changeColor = (color: string) => {
      color === null && (defaultColor.value = '#001529')
      console.log('SetupContext')
    }

    return {
      defaultColor,
      changeColor
    }
  }
})
</script>

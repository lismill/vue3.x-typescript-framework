<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div class="theme flex">
      切换主题:
      <s-picker-theme></s-picker-theme>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import SPickerTheme from '@/components/s-picker-theme/index.vue'

export default defineComponent({
  components: {
    HelloWorld,
    SPickerTheme
  },
  setup () {
    const color = ref('#001529')
    const predefineColors = [
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
    const changeColor = (color: string) => {
      console.log(color)
    }

    return {
      color,
      predefineColors,
      changeColor
    }
  }
})
</script>

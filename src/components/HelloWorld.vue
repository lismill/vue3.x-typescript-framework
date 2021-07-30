<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: 'Hello'
    }
  },
  setup (props) {
    console.log('props', props)
    const a = 1
    console.log(a)
  }
})
</script>

<template>
  <div class="dashboard">
    <h1>Welcome！</h1>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { HomeConfig } from '@/api/dashboard/index'

export default defineComponent({
  setup () {
    HomeConfig({}).then((res: any) => {
      console.log(res)
    }).catch((error: any) => console.log(error))
  }
})
</script>

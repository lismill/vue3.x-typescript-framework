<template>
  <div class="dashboard">
    <h1 @click="handleSetConfig">Welcome！</h1>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { homeConfig, setConfig } from '@/api/dashboard/index'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    console.log('store.state?.screenFull?.full', store.state?.screenFull?.full)
    store.dispatch('changeScreenFull')

    const init = async () => {
      try {
        const config = await homeConfig({})
        console.log('config', config)
      } catch (error) {
        console.log('error', error)
      }
    }
    init()

    const handleSetConfig = async() => {
      try {
        const config = await setConfig({})
        console.log('config', config)
      } catch (error) {
        console.log('error', error)
      }
    }

    return {
      handleSetConfig
    }
  }
})
</script>

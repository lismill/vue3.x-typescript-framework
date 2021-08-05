<template>
  <div class="breadcrumb p-lr16 bg-w">
    <el-breadcrumb separator="-">
      <el-breadcrumb-item
        v-for="(route, index) in currentRoute"
        :key="route.path"
      >
        <template
          v-if="
            index === currentRoute.length - 1 ||
              index === currentRoute.length - 2
          "
        >
          {{ route.meta.title }}
        </template>
        <template v-else>
          <a :href="`#${route.path}`">{{ route.meta.title }}</a>
        </template>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, toRaw } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup () {
    const route = useRoute()
    const currentRoute = ref(toRaw(toRaw(route).matched))

    return {
      currentRoute
    }
  }
})
</script>

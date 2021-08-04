<template>
  <section class="container">
    <layout-header />
    <footer class="container-footer bg-w-2">
      <layout-aside />
      <section class="main-container">
        <layout-breadcrumb />
        <section class="m-16">
          <layout-main />
        </section>
      </section>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutHeader from './components/header.vue'
import LayoutAside from './components/aside.vue'
import LayoutBreadcrumb from './components/breadcrumb.vue'
import LayoutMain from './components/main.vue'

export default defineComponent({
  components: {
    LayoutHeader,
    LayoutAside,
    LayoutBreadcrumb,
    LayoutMain
  }
})
</script>

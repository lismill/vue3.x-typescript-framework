<template>
  <aside class="aside-menu">
    <!-- 左侧图标菜单 -->
    <section class="left">
      <section class="icon">
        <!-- 鼠标经过显示隐藏菜单 -->
        <section class="hidden-menu text-center">
          <section
            class="hidden-menu-item cursor-pointer"
            v-for="item in routes"
            :key="item.path"
            :class="{ active: item.path === currentRoute[0]?.path }"
            @click="changeRoutes(item)"
          >
            <template v-if="!item?.meta?.hidden">
              <div class="left-icon">
                <s-svg-icon
                  :name="item?.meta?.icon ?? 'menu'"
                  :size="item?.meta?.size ?? '18px'"
                />
              </div>
              <div class="right-title flex flex-center">
                {{ item?.meta?.title }}
                <s-svg-icon
                  class="m-l4"
                  name="angle-right"
                  size="11px"
                ></s-svg-icon>
              </div>
            </template>
          </section>
        </section>
      </section>

      <!-- 底部折叠按钮 -->
      <footer
        v-if="currentRoute[0]?.children.length"
        @click="collapse = !collapse"
      >
        <s-svg-icon :name="collapse ? 'caret-left' : 'caret-right'" />
      </footer>
    </section>

    <!-- 右侧文字菜单 -->
    <section
      v-if="currentRoute[0]?.children.length"
      class="right"
      :style="{
        width: collapse ? '135px' : '0',
        left: collapse ? '0' : '-135px'
      }"
    >
      <div class="title p-lr20 p-tb14">{{ currentRoute[0]?.meta?.title }}</div>
      <el-menu
        :default-active="active"
        class="el-menu-vertical-demo"
        background-color="#fff"
        text-color="#595961"
        active-text-color="#1890ff"
      >
        <section
          v-for="(route, index) in currentRoute[0]?.children"
          :key="route.path"
        >
          <!-- 三级菜单 -->
          <template v-if="route?.children?.length">
            <!-- 是否隐藏二级菜单 -->
            <template v-if="!route?.meta?.hidden">
              <el-submenu :index="index.toString()">
                <template #title>
                  <span>{{ route?.meta?.title ?? "" }}</span>
                </template>
                <section
                  v-for="(three, threeIndex) in route?.children ?? []"
                  :key="three.path"
                >
                  <!-- 是否隐藏三级菜单 -->
                  <template v-if="!three?.meta?.hidden">
                    <el-menu-item
                      :index="`${index}-${threeIndex}`"
                      @click="changeRoutes(three)"
                    >
                      {{ three?.meta?.title ?? "" }}
                    </el-menu-item>
                  </template>
                </section>
              </el-submenu>
            </template>
          </template>

          <!-- 二级菜单 -->
          <template v-else>
            <!-- 是否隐藏二级菜单 -->
            <template v-if="!route?.meta?.hidden">
              <el-menu-item
                :index="index.toString()"
                @click="changeRoutes(route)"
              >
                {{ route?.meta?.title ?? "" }}
              </el-menu-item>
            </template>
          </template>
        </section>
      </el-menu>
    </section>
  </aside>
</template>
<script lang="ts">
import { defineComponent, ref, toRaw, watch } from 'vue'
import { useRouter, useRoute, RouteLocationRaw } from 'vue-router'

export default defineComponent({
  setup () {
    /**
     * 展开&收缩二级菜单
     */
    const collapse = ref(true)

    /**
     * 所有路由
     * 过滤掉!['/:catchAll(.*)']
     */
    const router = useRouter()
    const routes = router.options.routes.filter(
      (item) => !['/:catchAll(.*)', '/login'].includes(item.path)
    )

    /**
     * 获取当前路由
     */
    const route = useRoute()
    const currentRoute = ref(toRaw(toRaw(route).matched))

    /**
     * 默认激活菜单
     */
    const active = ref('0')
    watch(
      () => route.path,
      () => {
        const LENGTH = currentRoute.value.length
        if (LENGTH === 2) {
          const INDEX = currentRoute.value[0].children.findIndex(
            (item) => item.path === route.path
          )
          active.value = `${INDEX}`
        } else if (LENGTH === 3) {
          const INDEX = currentRoute.value[0].children.findIndex((item) =>
            route.path.includes(item.path)
          )
          const SUB_INDEX = currentRoute.value[1].children.findIndex(
            (item) => item.path === route.path
          )
          active.value = `${INDEX}-${SUB_INDEX}`
        }
      }
    )
    /**
     * 切换菜单
     */
    const changeRoutes = (route: { path: RouteLocationRaw }) => {
      router.push(route.path)
    }

    return {
      collapse,
      active,
      routes,
      currentRoute,
      changeRoutes
    }
  }
})
</script>

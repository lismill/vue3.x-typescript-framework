<template>
  <aside class="aside-menu">
    <!-- 左侧图标菜单 -->
    <section class="left">
      <section
        class="icon"
        @mouseenter="enterHiddenMenu"
        @mouseleave="leaveHiddenMenu"
      >
        <!-- 图标菜单 -->
        <template v-if="!hiddenMenu">
          <section
            v-for="item in routes"
            :key="item.path"
            class="item"
            :class="{ active: item.path === currentRoute[0]?.path }"
            @click="changeRoutes(item)"
          >
            <!-- 是否隐藏 -->
            <template v-if="!item?.meta?.hidden">
              <section class="tooltip flex-center">
                <s-svg-icon
                  :name="item?.meta?.icon ?? 'menu'"
                  :size="item?.meta?.size ?? '18px'"
                />
              </section>
            </template>
          </section>
        </template>

        <!-- 鼠标经过显示隐藏菜单 -->
        <section class="hidden-menu" v-show="hiddenMenu">
          <section
            class="hidden-menu-item flex cursor-pointer"
            v-for="item in routes"
            :key="item.path"
            :class="{ active: item.path === currentRoute[0]?.path }"
            @click="changeRoutes(item)"
          >
            <div class="left-icon text-center flex-center">
              <s-svg-icon
                :name="item?.meta?.icon ?? 'menu'"
                :size="item?.meta?.size ?? '18px'"
              />
            </div>
            <div class="right-title">{{ item?.meta?.title }}</div>
          </section>
        </section>
      </section>

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
        :unique-opened="true"
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
                      {{ three?.meta?.title ?? ""
                      }}{{ `${index}-${threeIndex}` }}
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
      hiddenMenu.value = false
    }

    /**
     * 鼠标进入左侧一级菜单
     */
    const hiddenMenu = ref(false)
    const enterHiddenMenu = () => {
      !hiddenMenu.value && (hiddenMenu.value = true)
    }
    /**
     * 鼠标离开左侧一级菜单
     */
    const leaveHiddenMenu = () => {
      hiddenMenu.value = false
    }

    return {
      collapse,
      active,
      routes,
      currentRoute,
      changeRoutes,
      hiddenMenu,
      enterHiddenMenu,
      leaveHiddenMenu
    }
  }
})
</script>
<style lang="scss" scoped>
.container-enter-to,
.container-leave-active {
  width: 195px;
}
</style>

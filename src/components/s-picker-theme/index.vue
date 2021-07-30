<template>
  <el-popover popper-class="popper-theme" title="主题色" trigger="hover">
    <template #reference>
      <slot></slot>
    </template>
    <div class="themes flex">
      <div
        class="theme"
        v-for="theme in themes"
        :key="theme.key"
        @click="changeTheme(theme)"
      >
        <el-tooltip :content="theme.value">
          <div
            :class="theme.key"
            :style="{ backgroundColor: theme.color }"
          ></div>
        </el-tooltip>
      </div>
    </div>
  </el-popover>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { ElLoading } from 'element-plus'

export default defineComponent({
  setup () {
    // 默认主题色
    const themes = ref([
      { key: 'theme-dark', value: '深色', color: '#001529' },
      { key: 'theme-light', value: '浅色', color: '#ffffff' },
      { key: 'theme-blue', value: '蓝色', color: '#1890ff' },
      { key: 'theme-orange', value: '橙色', color: '#ed6827' }
    ])

    // 切换主题色
    const changeTheme = (item: { key: string}) => {
      // 设置本地存储 & 修改app class
      localStorage.setItem('syy_theme', item.key)
      const app = document.querySelector('#app')
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      app!.className = item.key

      // 开启切换主题提示
      const loadingInstance = ElLoading.service({
        text: '切换主题中...'
      })

      // 关闭切换主题提示
      setTimeout(() => loadingInstance.close(), 360)
    }

    return {
      themes,
      changeTheme
    }
  }
})
</script>
<style scoped lang="scss">
.themes {
  .theme {
    width: 26px;
    height: 26px;
    padding: 1px;
    margin-right: 4px;
    border-radius: 2px;
    border: 1px solid #dddddd;
    & > div {
      opacity: 1;
      width: 100%;
      height: 100%;
      cursor: pointer;
      border-radius: 2px;
    }
    & > div:hover {
      opacity: 0.75;
    }
  }
}
</style>

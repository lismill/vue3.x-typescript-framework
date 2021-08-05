<template>
  <s-theme-popover title="主题色" width="150px">
    <template #handle>
      <span class="cursor-pointer m-l15">切换主题</span>
    </template>
    <div class="themes flex">
      <div
        class="theme"
        v-for="theme in themes"
        :key="theme.key"
        @click="changeTheme(theme)"
      >
        <el-tooltip :content="theme.value" :show-after="360">
          <div
            :class="theme.key"
            :style="{ backgroundColor: theme.color, color: theme.color }"
          >
            .
          </div>
        </el-tooltip>
      </div>
    </div>
  </s-theme-popover>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElLoading } from 'element-plus'

export default defineComponent({
  setup () {
    // 默认主题色
    const themes = ref([
      { key: 'theme-dark', value: '深色', color: '#001529' },
      { key: 'theme-blue', value: '蓝色', color: '#1890ff' },
      { key: 'theme-orange', value: '橙色', color: '#ed6827' },
      { key: 'theme-blue-1', value: '深蓝', color: '#1C3FAA' }
    ])

    // 切换主题色
    const changeTheme = (item: { key: string }) => {
      // 设置本地存储 & 修改app class
      localStorage.setItem('syy_theme', item.key)
      const app = document.querySelector('#app')
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      app!.className = item.key

      // 开启切换主题提示
      const loadingInstance = ElLoading.service({
        text: '切换主题中...',
        background: 'rgba(0, 0, 0, .8)'
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
  justify-content: space-between;
  .theme {
    width: 26px;
    height: 26px;
    padding: 1px;
    border-radius: 2px;
    border: 1px solid #eee;
    &:hover {
      border-color: #ddd;
    }
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

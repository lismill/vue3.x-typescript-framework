/**
 * 设置为本地存储的主题色
 * {default} - theme-dark
 */
export const renderTheme = (): void => {
  const theme = localStorage.getItem('syy_theme') || 'theme-dark'
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.querySelector('#app')!.className = theme
}

// 引入 @/assets/svg 下的所有 svg 文件
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg', true, /\.svg$/)
requireAll(req)

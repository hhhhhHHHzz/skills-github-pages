import comp from "D:/周旭航/study/blog/vuepress-starter/docs/.vuepress/.temp/pages/posts/sticky2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/sticky2.html\",\"title\":\"今天学习Java day01\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-11-29T00:00:00.000Z\",\"category\":[\"CategoryC\"],\"tag\":[\"tag E\"],\"sticky\":10},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/sticky2.md\",\"excerpt\":\"\\n<p>Excerpt information which is added manually.</p>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

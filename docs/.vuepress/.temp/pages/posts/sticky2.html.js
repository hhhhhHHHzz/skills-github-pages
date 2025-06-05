import comp from "D:/周旭航/study/blog/vuepress-starter/docs/.vuepress/.temp/pages/posts/sticky2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/sticky2.html\",\"title\":\"今天学习Java day01\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-11-29T00:00:00.000Z\",\"category\":[\"CategoryC\"],\"tag\":[\"tag E\"],\"sticky\":10},\"headers\":[],\"git\":{\"updatedTime\":1732870188000,\"contributors\":[{\"name\":\"阳光开朗大男孩\",\"email\":\"2628990597@qq.com\",\"commits\":1}]},\"filePathRelative\":\"posts/sticky2.md\",\"excerpt\":\"\\n<h1>数据类型</h1>\\n<p>boolean布尔型\\nint整数型\\ndouble小数型\\nchar字符型</p>\\n<!-- oneday -->\\n<p>public class HelloWorld {\\npublic static void main(String[] args) {\\nSystem.out.println(\\\"Hello World!\\\");\\n}\\n}\\n在表达式中byte shirt char 都是转成int类型运算</p>\\n\"}")
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

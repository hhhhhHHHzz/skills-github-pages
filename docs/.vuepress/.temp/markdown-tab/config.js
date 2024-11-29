import { CodeTabs } from "D:/周旭航/study/blog/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.60_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_hkgsm5wfjxpzjzqwsjnxsi5nqi/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/周旭航/study/blog/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.60_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_hkgsm5wfjxpzjzqwsjnxsi5nqi/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/周旭航/study/blog/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.60_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_hkgsm5wfjxpzjzqwsjnxsi5nqi/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};

import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Ryan's Blog",
      description: "Ryan's blog.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Ryan的博客",
      description: "Ryan的博客",
    },
  },

  theme,

  shouldPrefetch: false,
});

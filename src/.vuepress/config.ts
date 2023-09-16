import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Ryan's Open Source",
      description: "Ryan's open source website.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Ryan 开源网站",
      description: "Ryan 开源网站",
    },
  },

  theme,

  shouldPrefetch: false,
});

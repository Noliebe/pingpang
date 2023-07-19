import typeScript from "rollup-plugin-typescript2";
import { eslint } from "rollup-plugin-eslint";
import html from "@rollup/plugin-html";

export default {
  input: "src/main.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true, //生成bundle.map.js文件，方便调试
  },
  plugins: [
    eslint(),
    typeScript(),
    html({
      title: "乒乓",
      scripts: `<div #id='rootDom'></div><script src="./index.js"></script>`,
    }),
  ],
};

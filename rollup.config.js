import typeScript from "rollup-plugin-typescript2";
import { eslint } from "rollup-plugin-eslint";
console.log("🚀 ~ file: rollup.config.js:3 ~ eslint:", eslint);

export default {
  input: "src/main.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true, //生成bundle.map.js文件，方便调试
  },
  plugins: [typeScript(), eslint()],
};

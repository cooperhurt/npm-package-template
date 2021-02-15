import pkg from "./package.json";
import typescript from "rollup-plugin-typescript"
import { nodeResolve} from "@rollup/plugin-node-resolve"
import peerDeepsExternal from "rollup-plugin-peer-deps-external"

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    typescript(),
    nodeResolve(),
    peerDeepsExternal()
  ]
}
import path from "path";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";

// const isProduction = process.env.NODE_ENV === "production";
async function run() {
  const compiled = new Date().toUTCString().replace(/GMT/g, "UTC");

  const results = [];

  const { name, version, source, main, module, types, dependencies, devDependencies } = pkg;

  const banner = [
    `/*!`,
    ` * ${name} - v${version}`,
    ` * Compiled ${compiled}`,
    ` *`,
    ` * ${name} is licensed under the MIT License.`,
    ` * https://opensource.org/licenses/MIT`,
    ` */`
  ].join("\n");

  const basePath = path.relative(__dirname, "");
  const input = path.join(basePath, source);

  results.push({
    input,
    external: [...Object.keys(dependencies), ...Object.keys(devDependencies)],
    output: [
      { banner, file: path.join(basePath, main), format: "cjs" },
      { banner, file: path.join(basePath, module), format: "esm" }
    ],
    plugins: [commonjs(), typescript()],
    watch: {
      exclude: "node_modules"
    }
  });

  results.push({
    input,
    output: [{ banner, file: path.join(basePath, types), format: "esm" }],
    plugins: [dts()]
  });

  return results;
}

export default run();

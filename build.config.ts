import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  declaration: true,
  outDir: "dist",
  clean: true,
  rollup: {
    emitCJS: true,
  },
  entries: ["src/index"],
});

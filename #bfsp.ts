import { defineConfig } from "@bfchain/pkgm-bfsp";
export default defineConfig((info) => {
  const config: Bfsp.UserConfig = {
    name: "ajax-hook",
    exports: {
      ".": "./index.ts",
    },
    packageJson: {
      license: "MIT",
      author: "mac",
      dependencies: {},
      devDependencies: {
        "@types/jquery": "3.5.14",
      },
    },
    tsConfig: {
      compilerOptions: {
        lib: ["ES2020", "dom"],
      },
    },
  };
  return config;
});

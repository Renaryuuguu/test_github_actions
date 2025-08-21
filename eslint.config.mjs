import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import airbnbBase from "eslint-config-airbnb-base";
// import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { FlatCompat } from "@eslint/eslintrc";
// export default defineConfig([
//   {
//     files: ["**/*.{js,mjs,cjs}"],
//     plugins: { js },
//     extends: ["js/recommended"],
//     languageOptions: { globals: globals.browser }
//   },
// ]);
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const compact = new FlatCompat({
  baseDirectory: __dirname,
});
export default defineConfig([
  ...compact.config({
    extends: ["airbnb-base"],
  }),
]);

import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from 'eslint-plugin-import';
import unusedImports from "eslint-plugin-unused-imports";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  // Next.js recommended rules
  ...nextVitals,
  ...nextTs,

  // Flat plugin setup
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      "import": importPlugin,
      "unused-imports": unusedImports,
      "prettier": prettier,
    },
    extends: [],
    languageOptions: { globals: {...globals.browser, ...globals.node} },
    rules: {
      // ---- Prettier ----
      "prettier/prettier": "error",
  
      // ---- React ----
      "react/prop-types": "off", // Using TS, no PropTypes
  
      // ---- TypeScript ----
      "@typescript-eslint/explicit-module-boundary-types": "off",
  
      // ---- Unused imports ----
      "unused-imports/no-unused-imports": "error",

      // ---- Import order ----
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
        },
      ],

      // ---- JSX A11y ----
      "jsx-a11y/alt-text": "warn",
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig,

  // Global ignores
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

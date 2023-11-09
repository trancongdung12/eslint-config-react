module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    react: {
      version: "detect",
    },
    "import/ignore": ["node_modules"],
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  overrides: [{ extends: "plugin:jest/all", files: ["src"] }],
  plugins: [
    "@typescript-eslint",
    "jest",
    "unused-imports",
    "import",
    "react-hooks",
    "sort-keys-fix",
  ],
  root: true,
  ignorePatterns: [
    "*.js",
    "node_modules",
    "**/schemas.tsx",
    "**/translationKeys.ts",
  ],
  rules: {
    "sort-keys-fix/sort-keys-fix": "error",
    "import/order": [
      "error",
      { groups: ["builtin", "external", "parent", "sibling", "index"] },
    ],
    "no-console": "warn",
    "import/no-unresolved": [2, { ignore: ["~react-pages"] }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: ["objectLiteralProperty", "typeProperty"],
        format: ["camelCase"],
      },
      {
        selector: ["enum", "enumMember", "class", "interface", "typeAlias"],
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "react/display-name": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-fragments": "error",
    "react/no-unused-prop-types": "error",
    "max-lines": ["error", 500],
    "no-nested-ternary": ["error"],
    "arrow-body-style": ["error", "as-needed"],
    "import/newline-after-import": "error",
    "no-unneeded-ternary": ["error"],
    "no-else-return": ["error", { allowElseIf: false }],
    "no-lonely-if": ["error"],
    "max-params": ["error", 3],
    "array-callback-return": "error",
    "no-param-reassign": "error",
    "prefer-destructuring": ["error"],
    "object-shorthand": "error",
    "dot-notation": "error",
    "multiline-comment-style": ["error", "starred-block"],
    "prefer-template": "error",
    "sort-keys": "error",
    "no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true },
    ],
    "default-case-last": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "unused-imports/no-unused-vars-ts": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
      },
    ],
    "react/button-has-type": "error",
    "react/hook-use-state": "error",
    "react/jsx-sort-props": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/destructuring-assignment": "error",
    "import/newline-after-import": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["lodash"],
            message: "Please use import from 'lodash-es' instead.",
          },
          {
            group: ["moment"],
            message: "Please use import from 'dayjs' instead.",
          },
          {
            group: ["../../*"],
            message: "Please use alias import instead of deep parent import",
          },
        ],
      },
    ],
  },
};

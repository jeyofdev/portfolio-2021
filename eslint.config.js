import tsPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
	{
		ignores: ["dist", "eslint.config.js", "vite.config.ts"],
		files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			parser: typescriptEslintParser,
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
		},
		settings: {
			react: { version: "detect" },
			"import/resolver": {
				typescript: {
					alwaysTryTypes: true,
					project: "./tsconfig.json",
				},
				alias: {
					map: [
						["@styles", "./src/styles"],
						["@components", "./src/components"],
            ["@interfaces", "./src/interfaces"],
            ["@datas", "./src/datas"],
            ["@hooks", "./src/hooks"],
            ["@utils", "./src/utils"],
            ["@assets", "./src/assets"],
					],
					extensions: [".js", ".jsx", ".ts", ".tsx"],
				},
			},
		},
		plugins: {
			react,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			"jsx-a11y": jsxA11y,
			import: importPlugin,
			"@typescript-eslint": tsPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...jsxA11y.configs.recommended.rules,
			...importPlugin.configs.recommended.rules,
			...tsPlugin.configs.recommended.rules,
			...prettierConfig.rules,
			"prettier/prettier": ["error", { endOfLine: "auto" }],
			"react/react-in-jsx-scope": "off",
			"react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
			"import/no-unresolved": "error",
			"import/extensions": [
				"error",
				"ignorePackages",
				{
					js: "never",
					jsx: "never",
					ts: "never",
					tsx: "never",
				},
			],
			"@typescript-eslint/no-unused-vars": ["warn"],
			"no-console": ["warn", { allow: ["warn", "error"] }],
			"no-debugger": ["warn"],
			"react/prop-types": "off",
			"react/jsx-props-no-spreading": "off",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			"prefer-const": "warn",
			'import/named': 'warn',
		},
	},
];
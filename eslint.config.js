import tsPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser"; // Assurez-vous d'importer le parser correctement
import airbnbBase from "eslint-config-airbnb-base";
import airbnbHooks from "eslint-config-airbnb/hooks";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
	{
		ignores: ["dist", "eslint.config.js", "vite.config.ts"], // Ignorer certains fichiers
		files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			parser: typescriptEslintParser, // Utilisation correcte du parser
			parserOptions: {
				ecmaFeatures: { jsx: true }, // Activer JSX
			},
		},
		settings: {
			react: { version: "detect" }, // Détection automatique de la version React
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
			...airbnbBase.rules,
			...airbnbHooks.rules,
			...importPlugin.configs.recommended.rules,
			...tsPlugin.configs.recommended.rules,
			...prettierConfig.rules,
			"prettier/prettier": ["error", { endOfLine: "auto" }],
			"react/react-in-jsx-scope": "off", // React 17+ et Vite n'ont pas besoin d'import explicite
			"react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
			"import/no-unresolved": "error", // Garantit que les imports sont corrects
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
			"@typescript-eslint/no-unused-vars": ["warn"], // Pour éviter les variables inutilisées
			"no-console": ["warn", { allow: ["warn", "error"] }], // Autorise console.warn et console.error
			"react/prop-types": "off", // Désactiver car on utilise TypeScript pour les props
			"react/jsx-props-no-spreading": "off", // Désactiver l'interdiction du spread pour les props
			"react-hooks/rules-of-hooks": "error", // Valide l'utilisation correcte des hooks
			"react-hooks/exhaustive-deps": "warn", // Avertit sur les dépendances manquantes
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
		},
	},
];
import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@datas": path.resolve(__dirname, "./src/datas"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@assets": path.resolve(__dirname, "./src/assets"),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@use "@styles/core/mixins" as *;
					@use "@styles/core/layout" as *;
					@use "@styles/app/variables" as *;
					@use "@styles/app/index" as *;
          @use "@styles/app/animations" as *;
				`,
			},
		},
	},
	build: {
		outDir: "dist",
		sourcemap: true,
		cssMinify: true,
	},
});

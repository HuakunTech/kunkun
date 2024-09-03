import path from "node:path"
import vue from "@vitejs/plugin-vue"
import autoprefixer from "autoprefixer"
import tailwind from "tailwindcss"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		postcss: {
			plugins: [tailwind(), autoprefixer()]
		}
	},
	plugins: [vue()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	},
	// TODO: change this to your identifier
	base: "/template-ext-vue/dist"
})

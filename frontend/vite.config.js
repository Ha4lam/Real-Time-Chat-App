import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: './', // If your app is deployed under a subpath
	server: {
		port: 5000,
		proxy: {
			"/api": {
				target: "http://localhost:8000",
			},
		},
	},
});

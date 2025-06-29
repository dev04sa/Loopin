// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	server: {
// 		port: 3000,
// 		// Get rid of the CORS error
// 		proxy: {
// 			"/api": {
// 				target: "https://loopin-backend-an46.onrender.com",
// 				changeOrigin: true,
// 				secure: false,
// 			},
// 		},
// 	},
// });


// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // ✅ keep your dev port
  },
});


import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      tailwindcss(),
      TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
      react(),
    ],
    base: env.VITE_BASE_PATH ? env.VITE_BASE_PATH : "/",
  };
});

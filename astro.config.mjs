// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  site: 'https://andresalmeida.github.io',
  base: '/maths-program',
  vite: {
    plugins: [tailwindcss()],
  },
});
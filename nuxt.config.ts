import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss"],
  build: {
    transpile: ["@headlessui/vue"], // https://github.com/nuxt/framework/issues/2326#issuecomment-1009620007
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: [
        "@headlessui/vue",
        "@heroicons/vue/solid",
        "@heroicons/vue/outline",
        "vue",
      ],
    },
  },
  tailwindcss: { configPath: "~/tailwind.config.ts" },
});

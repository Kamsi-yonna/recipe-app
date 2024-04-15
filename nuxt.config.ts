// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  pages: true,

  ssr: true,

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
    },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      apiKey: process.env.SPOONACULAR_API_KEY,
      imgURL: process.env.SPOONACULAR_IMG_URL,
    },
  },

  routeRules: {
    "/**": {
      isr: 60 * 60 * 24,
    },
  },

  image: {
    providers: {
      spoonacular: {
        name: "spoonacular",
        provider: "~/providers/spoonacular.ts",
        options: {
          baseURL: process.env.BASE_URL,
          imgURL: process.env.SPOONACULAR_IMG_URL,
        },
      },
    },
  },

  $development: {
    nitro: {
      storage: {
        recipes: {
          driver: "fs",
          base: "recipes",
        },
      },
    },
  },

  modules: ["@nuxt/ui", "@nuxt/image"],
});

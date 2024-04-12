// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  pages: true,

  app: {
    head: {
      title: "Recipe App",
    },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
    spoonacular: {
      apiKey: process.env.SPOONACULAR_API_KEY,
    },
  },

  routeRules: {
    "/**": {
      isr: 60 * 60 * 24,
    },
  },

  // image: {
  //   providers: {
  //     spoonacular: {
  //       provider: "~/providers/spoonacular.ts",
  //     },
  //   },
  // },

  image: {
    providers: {
      spoonacular: {
        name: "spoonacular",
        provider: "~/providers/spoonacular.ts",
        options: {
          baseURL: process.env.BASE_URL,
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

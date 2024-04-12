// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

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
      baseURL: process.env.BASE_URL,
    },
  },

  image: {
    providers: {
      spoonacular: {
        provider: "~/providers/spoonacular.ts",
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

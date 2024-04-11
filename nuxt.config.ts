// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Recipe App",
    },
  },

  runtimeConfig: {
    spoonacular: {
      apiKey: process.env.SPOONACULAR_API_KEY,
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
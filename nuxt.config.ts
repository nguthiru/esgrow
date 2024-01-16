// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src: "https://kit.fontawesome.com/57e958ae72.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
});

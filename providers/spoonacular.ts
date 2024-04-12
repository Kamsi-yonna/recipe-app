// import { joinURL } from "ufo";
import type { ProviderGetImage } from "@nuxt/image";
import { createOperationsGenerator } from "#image";

const operationsGenerator = createOperationsGenerator();

export const getImage: ProviderGetImage = (
  src,
  { modifiers = {}, baseURL = useRuntimeConfig().public.baseURL } = {}
) => {
  const sizes = [100, 250, 500];
  const size = modifiers.width || modifiers.height;
  const nextBiggest = sizes.find((s) => s >= size!) || sizes[sizes.length - 1];
  const prefix = `ingredients_${nextBiggest}x${nextBiggest}`;

  const operations = operationsGenerator(modifiers);
  const url = `${baseURL}/${prefix}${src}`;
  return {
    url,
  };
};

// ? Method 2, adding the baseUrl link directly.
// import { joinURL } from "ufo";
// import type { ProviderGetImage } from "@nuxt/image";
// import { createOperationsGenerator } from "#image";

// const operationsGenerator = createOperationsGenerator();

// export const getImage: ProviderGetImage = (
//   src,
//   { modifiers = {}, baseURL = "https://img.spoonacular.com" } = {}
// ) => {
//   const sizes = [100, 250, 500];
//   const size = modifiers.width || modifiers.height;
//   const nextBiggest = sizes.find((s) => s >= size!) || sizes[sizes.length - 1];
//   const prefix = `ingredients_${nextBiggest}x${nextBiggest}`;

//   return {
//     url: joinURL(baseURL, prefix, src),
//   };
// };

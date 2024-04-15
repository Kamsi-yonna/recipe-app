const defaults = {
  meta: {
    title: "Recipe Hub",
    ogTitle: "Recipe Hub",
    description: "Recipe Hub",
    ogDescription: "Recipe Hub",
    ogImage: "/favicon.ico",
    twitterCard: "summary_large_image",
  } as Parameters<typeof useSeoMeta>[0],
};

type DefaultKeys = keyof typeof defaults;

type DefaultValues = typeof defaults;

export const useDefault = <K extends DefaultKeys>(
  defaultName: K
): DefaultValues[K] => defaults[defaultName];

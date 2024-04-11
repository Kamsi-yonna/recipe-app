import { z } from "valibot";

export interface Recipe {
  id: number;
  title: string;
  image?: string;
  imageType?: string;
  servings: number;
  readyInMinutes: number;
  sourceUrl: string;
  sourceName: string;
  summary: string;
  analyzedInstructions: RecipeInstruction[];
  extendedIngredients: RecipeIngredient[];
  diets: string[];
  dishTypes: string[];
  cuisines: string[];
  instructions: string;
}

interface RecipeInstruction {
  name: string;
  steps: RecipeStep[];
}

interface RecipeStep {
  number: number;
  step: string;
  ingredients: RecipeIngredient[];
  equipment: RecipeEquipment[];
}

interface RecipeIngredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

interface RecipeEquipment {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export const recipeType = z.object({
  id: z.number(),
  title: z.string(),
  image: z.optional(z.string()),
  imageType: z.optional(z.string()),
  servings: z.number(),
  readyInMinutes: z.number(),
  sourceUrl: z.string(),
  sourceName: z.string(),
  summary: z.string(),
  analyzedInstructions: z.array(
    z.object({
      name: z.string(),
      steps: z.array(
        z.object({
          number: z.number(),
          step: z.string(),
          ingredients: z.array(
            z.object({
              id: z.number(),
              name: z.string(),
              localizedName: z.string(),
              image: z.string(),
            })
          ),
          equipment: z.array(
            z.object({
              id: z.number(),
              name: z.string(),
              localizedName: z.string(),
              image: z.string(),
            })
          ),
        })
      ),
    })
  ),
  extendedIngredients: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      nameClean: z.nullable(z.string()),
      original: z.string(),
      originalName: z.string(),
      amount: z.number(),
      unit: z.string(),
      image: z.nullable(z.string()),
      meta: z.array(z.string()),
      measures: z.object({
        us: z.object({
          amount: z.number(),
          unitShort: z.string(),
          unitLong: z.string(),
        }),
        metric: z.object({
          amount: z.number(),
          unitShort: z.string(),
          unitLong: z.string(),
        }),
      }),
    })
  ),
  diets: z.array(z.string()),
  dishTypes: z.array(z.string()),
  cuisines: z.array(z.string()),
  instructions: z.string(),
});

export interface RecipeResponse {
  recipes: Recipe[];
}

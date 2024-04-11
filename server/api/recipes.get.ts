import { RecipeResponse } from "~/types/recipe";
import * as z from "valibot";
const sampleData = [
  {
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 3,
    gaps: "no",
    preparationMinutes: -1,
    cookingMinutes: -1,
    aggregateLikes: 3,
    healthScore: 6,
    creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    license: "CC BY 3.0",
    sourceName: "Foodista",
    pricePerServing: 223.11,
    extendedIngredients: [
      {
        id: 1123,
        aisle: "Milk, Eggs, Other Dairy",
        image: "egg.png",
        consistency: "SOLID",
        name: "eggs",
        nameClean: "egg",
        original: "2 large eggs",
        originalName: "eggs",
        amount: 2,
        unit: "large",
        meta: [],
        measures: {
          us: {
            amount: 2,
            unitShort: "large",
            unitLong: "larges",
          },
          metric: {
            amount: 2,
            unitShort: "large",
            unitLong: "larges",
          },
        },
      },
      {
        id: 1124,
        aisle: "Milk, Eggs, Other Dairy",
        image: "egg-white.jpg",
        consistency: "SOLID",
        name: "egg whites",
        nameClean: "egg whites",
        original: "2 large egg whites",
        originalName: "egg whites",
        amount: 2,
        unit: "large",
        meta: [],
        measures: {
          us: {
            amount: 2,
            unitShort: "large",
            unitLong: "larges",
          },
          metric: {
            amount: 2,
            unitShort: "large",
            unitLong: "larges",
          },
        },
      },
      {
        id: 11955,
        aisle: "Produce",
        image: "sundried-tomatoes.jpg",
        consistency: "SOLID",
        name: "sun tomato",
        nameClean: "sun dried tomatoes",
        original: "2 tablespoons sun dried tomato, finely chopped",
        originalName: "sun dried tomato, finely chopped",
        amount: 2,
        unit: "tablespoons",
        meta: ["dried", "finely chopped"],
        measures: {
          us: {
            amount: 2,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
          metric: {
            amount: 2,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
        },
      },
      {
        id: 11282,
        aisle: "Produce",
        image: "brown-onion.png",
        consistency: "SOLID",
        name: "onion",
        nameClean: "onion",
        original: "2 tablespoons onion , finely chopped",
        originalName: "onion , finely chopped",
        amount: 2,
        unit: "tablespoons",
        meta: ["finely chopped"],
        measures: {
          us: {
            amount: 2,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
          metric: {
            amount: 2,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
        },
      },
      {
        id: 2049,
        aisle: "Produce",
        image: "thyme.jpg",
        consistency: "SOLID",
        name: "thyme",
        nameClean: "thyme",
        original: "1 teaspoon thyme, minced",
        originalName: "thyme, minced",
        amount: 1,
        unit: "teaspoon",
        meta: ["minced"],
        measures: {
          us: {
            amount: 1,
            unitShort: "tsp",
            unitLong: "teaspoon",
          },
          metric: {
            amount: 1,
            unitShort: "tsp",
            unitLong: "teaspoon",
          },
        },
      },
      {
        id: 93676,
        aisle: "Milk, Eggs, Other Dairy",
        image: "white-cream-fluffy.jpg",
        consistency: "SOLID",
        name: "quark",
        nameClean: "quark",
        original:
          "1/2 cup quark (a creamy cheese that can be found in your grocery dairy section)",
        originalName:
          "quark (a creamy cheese that can be found in your grocery dairy section)",
        amount: 0.5,
        unit: "cup",
        meta: [
          "canned",
          "(a creamy cheese that can be found in your grocery dairy section)",
        ],
        measures: {
          us: {
            amount: 0.5,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 125,
            unitShort: "ml",
            unitLong: "milliliters",
          },
        },
      },
      {
        id: 1033,
        aisle: "Cheese",
        image: "parmesan.jpg",
        consistency: "SOLID",
        name: "parmesan cheese",
        nameClean: "parmesan",
        original: "2 tablespoons parmesan cheese , shredded",
        originalName: "parmesan cheese , shredded",
        amount: 2,
        unit: "tablespoons",
        meta: ["shredded"],
        measures: {
          us: {
            amount: 2,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
          metric: {
            amount: 2,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
        },
      },
      {
        id: 11011,
        aisle: "Produce",
        image: "asparagus.png",
        consistency: "SOLID",
        name: "spinach",
        nameClean: "asparagus",
        original: "8 smalls spinach or asparagus",
        originalName: "s spinach or asparagus",
        amount: 8,
        unit: "small",
        meta: [],
        measures: {
          us: {
            amount: 8,
            unitShort: "small",
            unitLong: "smalls",
          },
          metric: {
            amount: 8,
            unitShort: "small",
            unitLong: "smalls",
          },
        },
      },
    ],
    id: 633595,
    title: "Baked Eggs With Asparagus and Sun Dried Tomatoes",
    readyInMinutes: 45,
    servings: 2,
    sourceUrl:
      "https://www.foodista.com/recipe/B5DH4SJK/baked-eggs-with-asparagus-and-sun-dried-tomatoes",
    image: "https://img.spoonacular.com/recipes/633595-556x370.jpg",
    imageType: "jpg",
    summary:
      'Need a <b>gluten free and primal main course</b>? Baked Eggs With Asparagus and Sun Dried Tomatoes could be a super recipe to try. This recipe serves 2 and costs $2.23 per serving. One portion of this dish contains approximately <b>21g of protein</b>, <b>7g of fat</b>, and a total of <b>178 calories</b>. If you have spinach, quark, sun tomato, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Not a lot of people made this recipe, and 3 would say it hit the spot. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 38%</b>. This score is not so outstanding. Similar recipes are <a href="https://spoonacular.com/recipes/creamy-baked-eggs-with-asparagus-and-sun-dried-tomatoes-530611">Creamy Baked Eggs with Asparagus and Sun Dried Tomatoes</a>, <a href="https://spoonacular.com/recipes/baked-eggs-with-garlic-kale-and-sun-dried-tomatoes-537955">Baked Eggs with Garlic Kale and Sun-dried Tomatoes</a>, and <a href="https://spoonacular.com/recipes/baked-eggs-with-garlic-kale-and-sun-dried-tomatoes-1241145">Baked Eggs with Garlic Kale and Sun-dried Tomatoes</a>.',
    cuisines: [],
    dishTypes: [
      "lunch",
      "main course",
      "morning meal",
      "brunch",
      "main dish",
      "breakfast",
      "dinner",
    ],
    diets: ["gluten free", "primal"],
    occasions: [],
    instructions:
      "Preheat oven to 375.\nSteam asparagus until tender.\nWhip eggs with quark, thyme and salt and pepper to your taste.\nHeat non-stick skillet over medium heat and spray with cooking spray. Saute onion and tomato for 4 minutes until onion is translucent.\nSpray small baking dish with cooking spray and add onion and tomato. Add eggs. Top with spinach or asparagus and parmesan cheese.\nBake for 10 - 15 minutes until egg is set.",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Preheat oven to 37",
            ingredients: [],
            equipment: [
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
              },
            ],
          },
          {
            number: 2,
            step: "Steam asparagus until tender.",
            ingredients: [
              {
                id: 11011,
                name: "asparagus",
                localizedName: "asparagus",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/asparagus.png",
              },
            ],
            equipment: [],
          },
          {
            number: 3,
            step: "Whip eggs with quark, thyme and salt and pepper to your taste.",
            ingredients: [
              {
                id: 1102047,
                name: "salt and pepper",
                localizedName: "salt and pepper",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg",
              },
              {
                id: 93676,
                name: "quark",
                localizedName: "quark",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/white-cream-fluffy.jpg",
              },
              {
                id: 2049,
                name: "thyme",
                localizedName: "thyme",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/thyme.jpg",
              },
              {
                id: 1123,
                name: "egg",
                localizedName: "egg",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
              },
            ],
            equipment: [],
          },
          {
            number: 4,
            step: "Heat non-stick skillet over medium heat and spray with cooking spray.",
            ingredients: [
              {
                id: 4679,
                name: "cooking spray",
                localizedName: "cooking spray",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/cooking-spray.png",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "https://spoonacular.com/cdn/equipment_100x100/pan.png",
              },
            ],
          },
          {
            number: 5,
            step: "Saute onion and tomato for 4 minutes until onion is translucent.",
            ingredients: [
              {
                id: 11529,
                name: "tomato",
                localizedName: "tomato",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/tomato.png",
              },
              {
                id: 11282,
                name: "onion",
                localizedName: "onion",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
              },
            ],
            equipment: [],
            length: {
              number: 4,
              unit: "minutes",
            },
          },
          {
            number: 6,
            step: "Spray small baking dish with cooking spray and add onion and tomato.",
            ingredients: [
              {
                id: 4679,
                name: "cooking spray",
                localizedName: "cooking spray",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/cooking-spray.png",
              },
              {
                id: 11529,
                name: "tomato",
                localizedName: "tomato",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/tomato.png",
              },
              {
                id: 11282,
                name: "onion",
                localizedName: "onion",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
              },
            ],
            equipment: [
              {
                id: 404646,
                name: "baking pan",
                localizedName: "baking pan",
                image:
                  "https://spoonacular.com/cdn/equipment_100x100/roasting-pan.jpg",
              },
            ],
          },
          {
            number: 7,
            step: "Add eggs. Top with spinach or asparagus and parmesan cheese.",
            ingredients: [
              {
                id: 1033,
                name: "parmesan",
                localizedName: "parmesan",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg",
              },
              {
                id: 11011,
                name: "asparagus",
                localizedName: "asparagus",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/asparagus.png",
              },
              {
                id: 10011457,
                name: "spinach",
                localizedName: "spinach",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg",
              },
              {
                id: 1123,
                name: "egg",
                localizedName: "egg",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
              },
            ],
            equipment: [],
          },
          {
            number: 8,
            step: "Bake for 10 - 15 minutes until egg is set.",
            ingredients: [
              {
                id: 1123,
                name: "egg",
                localizedName: "egg",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
              },
            ],
            equipment: [
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
              },
            ],
            length: {
              number: 15,
              unit: "minutes",
            },
          },
        ],
      },
    ],
    originalId: null,
    spoonacularScore: 46.061492919921875,
    spoonacularSourceUrl:
      "https://spoonacular.com/baked-eggs-with-asparagus-and-sun-dried-tomatoes-633595",
  },
];

const recipeSchema = z.object({
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

export default defineCachedEventHandler(
  async (event) => {
    const { recipes } = await $fetch<{ recipes: RecipeResponse }>(
      "https://api.spoonacular.com/recipes/random",
      {
        query: {
          limitLicense: true,
          number: 100,
          apiKey: useRuntimeConfig().spoonacular.apiKey,
        },
      }
    );
    try {
      return z.parse(z.array(recipeSchema), recipes);
    } catch (e) {
      console.log(e);
      return [];
    }
  },
  {
    base: "recipes",
    getKey: () => "recipes",
    shouldBypassCache: () => false,
    maxAge: 1000 * 60 * 60 * 24,
  }
);

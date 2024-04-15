<template>
  <UContainer>
    <section class="mt-12">
      <h1 class="font-bold capitalize text-2xl">
        {{ recipe.title }}
      </h1>

      <div class="mt-2 capitalize flex justify-between">
        <div class="flex items-center gap-2">
          <UBadge v-for="label in recipe.dishTypes" :label="label" />
        </div>

        <NuxtLink to="/meals">
          <UButton label="Meals" color="green">
            <UIcon name="i-heroicons-arrow-right-20-solid" />
          </UButton>
        </NuxtLink>
      </div>
    </section>

    <section class="mt-8 flex flex-col md:flex-row-reversed gap-8">
      <img
        v-if="recipe.image"
        :src="recipe.image"
        :alt="recipe.title"
        class="object-cover rounded-3xl w-full"
        v-bind="recipe.image.match(/-(?<width>\d+)x(?<height>\d+)\./)?.groups"
      />
      <div class="flex flex-col gap-4 border border-gray-500 rounded-2xl p-4">
        <h1 class="uppercase text-xl">Dish Summary</h1>
        <p class="text-lg max-w-[90ch]" v-html="recipe.summary"></p>
      </div>
    </section>

    <section class="mt-8">
      <div class="flex flex-col gap-4 border border-gray-500 rounded-2xl p-4">
        <div class="flex flex-col md:flex-row justify-between md:items-center">
          <h2 class="uppercase text-xl">Ingredients</h2>
        </div>

        <UTable
          class="uppercase"
          :rows="recipe.extendedIngredients"
          :columns="columns"
        >
          <template #name-data="{ row }">
            <div class="flex flex-row gap-4 items-center">
              <NuxtImg
                provider="spoonacular"
                class="rounded-xl"
                :src="row.image"
                height="40"
                width="40"
                :alt="`Image of ${row.name}`"
              />

              <h1 class="capitalize">
                {{ row.name }}
                ({{
                  [row.measures[unit].amount, row.measures[unit].unitLong]
                    .filter(Boolean)
                    .join(" ")
                }})
              </h1>
            </div>
          </template>
        </UTable>
      </div>
    </section>

    <section class="mt-8">
      <div class="flex flex-col gap-4 border border-gray-500 rounded-2xl p-4">
        <h1 class="font-bold capitalize text-2xl">Steps</h1>
        <ol>
          <li
            class="flex items-baseline gap-2 mt-2"
            v-for="{ step, number } in recipe.analyzedInstructions?.[0].steps"
            :key="number"
          >
            <span
              class="flex-shrink-0 inline-flex items-center justify-center rounded-full text-xs px-2 py-2 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25 font-bold h-5 w-5"
            >
              {{ number }}.</span
            >{{ step }}
          </li>
        </ol>
      </div>
    </section>

    <section class="mt-8 mb-8">
      <div class="items-center text-xl">
        Original Ingredient -
        <UButton
          class="text-xl"
          :to="recipe.sourceUrl"
          target="_blank"
          :label="recipe.sourceName"
        >
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
          </template>
        </UButton>
      </div>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
import type { InternalApi } from "nitropack";
import type { Recipe } from "~/types/recipe";

const route = useRoute();
const recipeId = route.params.id;
const apiKey = useRuntimeConfig().public.apiKey;
const baseURL = useRuntimeConfig().public.baseURL;

const { data: recipes } = await useFetch(
  `${baseURL}/recipes/${recipeId}/information/`,
  {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
  }
);
const recipe = recipes.value as Recipe;

const columnsToShow: Array<
  keyof InternalApi["/api/recipes"]["get"][number]["extendedIngredients"][number]
> = ["name"];

const columns = columnsToShow.map((col) => ({ key: col, label: col }));

const metric = ref(true);
const unit = computed(() => (metric.value ? "metric" : "us"));

const metaDef = useDefault("meta");

useSeoMeta({ ...metaDef });
</script>

<style scoped></style>

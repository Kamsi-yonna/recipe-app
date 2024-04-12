<template>
  <UContainer>
    <h1 class="mt-4 font-bold capitalize text-2xl pt-12">
      {{ recipe.title }}
    </h1>

    <div class="flex gap-2 mt-2 capitalize">
      <UBadge v-for="label in recipe.dishTypes" :label="label" />
    </div>

    <section class="mt-8 flex flex-col md:flex-row-reversed gap-4">
      <NuxtImg
        :src="recipe.image"
        :alt="recipe.title"
        class="object-cover rounded-3xl w-full"
      />
      <p class="text-lg mt-4 max-w-[90ch]" v-html="recipe.summary"></p>
    </section>

    <section>
      <div
        class="flex flex-col gap-4 mt-8 border border-gray-500 rounded-2xl p-4"
      >
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
  </UContainer>
</template>

<script setup lang="ts">
import type { InternalApi } from "nitropack";

const { data: recipes } = await useFetch("/api/recipes");
// const randomRecipeIndex = Math.floor(Math.random() * recipes.value!.length);
// const recipe = computed(() => recipes.value![randomRecipeIndex]);
const recipe = recipes.value![30];

const columnsToShow: Array<
  keyof InternalApi["/api/recipes"]["get"][number]["extendedIngredients"][number]
> = ["name"];

const columns = columnsToShow.map((col) => ({ key: col, label: col }));

const metric = ref(true);
const unit = computed(() => (metric.value ? "metric" : "us"));
</script>

<style scoped></style>

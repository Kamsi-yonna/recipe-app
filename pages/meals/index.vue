<template>
  <UContainer>
    <section class="mt-12">
      <h1 class="font-bold capitalize text-2xl">Meal Hub</h1>
      <h2 class="font-bold capitalize text-l mt-2">
        What random meal would you like to prepare today?
      </h2>
    </section>

    <section class="flex flex-col md:grid md:grid-cols-3 gap-3 mt-4">
      <div v-for="recipe in recipes!.slice(0, 18)">
        <nuxt-link :to="`/meals/${recipe.id}`">
          <UTooltip :text="recipe.title" :popper="{ placement: 'bottom' }" \>
            <img
              :src="recipe.image"
              :alt="recipe.title"
              class="object-cover rounded-sm"
            />
          </UTooltip>
        </nuxt-link>
      </div>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
const { data: recipes } = await useFetch("/api/recipes", {});

const metaDef = useDefault("meta");

useSeoMeta({ ...metaDef });
</script>

<style scoped></style>

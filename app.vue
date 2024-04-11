<template>
  <UContainer>
    <h1 class="mt-4 font-bold capitalize text-2xl pt-12">
      {{ recipe.title }}
    </h1>

    <div class="flex gap-1 mt-2">
      <UBadge v-for="label in recipe.dishTypes" :label="label" />
    </div>

    <section class="mt-4 flex flex-col md:flex-row-reversed gap-4">
      <NuxtImg
        :src="recipe.image"
        :alt="recipe.title"
        class="object-cover rounded-3xl w-full"
      />
      <p class="text-lg max-w-[50ch]" v-html="recipe.summary"></p>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
const { data: recipes } = await useFetch("/api/recipes");
const recipe = recipes.value![5];
</script>

<style scoped></style>

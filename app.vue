<template>
  <div>Hey there</div>
  <pre>{{ recipe }}</pre>
</template>

<script setup lang="ts">
const { data: recipes } = await useFetch("/api/recipes");
const recipe = recipes.value![0];
</script>

<style scoped></style>

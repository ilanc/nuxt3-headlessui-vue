<template>
  <NuxtLink v-bind="$props">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to?: string;
}>();
</script>

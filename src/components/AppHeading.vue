<template>
  <div class="space-y-3">
    <h1 class="text-[#02295A] font-bold text-3xl">{{ heading }}</h1>
    <p class="text-[#9699AB]">
      {{ desc }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ heading: string; desc: string }>();
</script>

<style lang="scss" scoped></style>

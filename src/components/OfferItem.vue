<template>
  <ul>
    <li v-for="offer in offers" :key="offer.id" class="flex justify-between">
      <!-- {{ offer }} -->
      <p class="text-[#9699ab]">{{ offer.title }}</p>
      <span class="text-[#02295A] font-thin"
        >+${{ typeof selectedPlan === "string" && offer[selectedPlan] }}/{{
          selectedPlan === "Monthly" ? "mo" : "yl"
        }}</span
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps(["offers"]);
import { useMutation } from "../composables";
const { selectedPlan } = useMutation();
</script>

<style scoped></style>

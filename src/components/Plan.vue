<template>
  <section class="pr-24 pt-4 pl-10 flex flex-col gap-8">
    <AppHeading v-bind="plan" />
    <PlanContent />
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const plan = reactive({
  heading: "Select your plan",
  desc: "You have the option of monthly or yearly biling",
});
</script>

<style scoped></style>

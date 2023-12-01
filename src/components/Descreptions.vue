<template>
  <section class="pr-24 pt-4 pl-10 flex flex-col gap-8">
    <AppHeading :heading="title" :desc="descreptions" />
    <FormInputs />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title: {
  value: string;
} = ref("Personal info");
const descreptions: { value: string } = ref(
  "Please provide your name,enail address, and phone number"
);
</script>

<style lang="scss" scoped></style>

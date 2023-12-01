<template>
  <section class="p-4 bg-blue-100">
    <div class="flex justify-between">
      <div>
        <h3 class="text-[#02295A] font-bold">
          {{ mainPlan?.name }} ({{ mainPlan?.timeStamp }})
        </h3>
        <a href="#" class="text-[#9699ab] underline">Change</a>
      </div>
      <span class="text-[#152436] font-bold"
        >${{ mainPlan?.price }}/{{ shortCut }}</span
      >
    </div>
    <div class="border">&nbsp;</div>
    <OfferItem :offers="offers" />
  </section>
  <div class="flex justify-between pl-4 w-[108%] mb-32">
    <p class="text-[#9699ab]">Total (per {{ "month" }})</p>
    <p class="text-[#4f76e0] text-lg font-bold">+${{ total }}/{{ shortCut }}</p>
  </div>
  <AppButton :width="110 + '%'" @click="nextPage" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useMutation } from "../composables";
const { nextPage, mainPlan, offers, total } = useMutation();

const shortCut = computed(() =>
  mainPlan?.timeStamp === "Monthly" ? "mo" : "yl"
);
</script>

<style scoped>
.border {
  border-bottom: 1px solid rgb(218, 211, 211);
  width: 100%;
  margin: 12px 0;
  height: 1px;
}
section {
  width: 110%;
}
</style>

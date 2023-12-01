<template>
  <div
    v-for="offer in offers"
    :key="offer.id"
    :class="[
      'offer',
      {
        selected: offer.isChecked,
      },
    ]"
    @click="offer.isChecked = !offer.isChecked"
  >
    <div class="flex gap-6 justify-center items-center">
      <input type="checkbox" :id="offer.id" :checked="offer.isChecked" />
      <div>
        <h3 class="text-[#02295A] font-bold">{{ offer.title }}</h3>
        <p class="text-sm text-[#9699AB]">{{ offer.body }}</p>
      </div>
    </div>
    <div>
      <!-- try to seacrch about index in TS -->
      <span class="text-[#3476c7]">
        +${{ typeof selectedPlan === "string" && offer[selectedPlan] }}/{{
          selectedPlan === "Monthly" ? "mo" : "yl"
        }}</span
      >
    </div>
  </div>

  <AppButton @click="contine" />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useMutation } from "../composables/index";
const { selectedPlan, getPrices, nextPage, addTooffer } = useMutation();
const offers = reactive([
  {
    id: "online-service",
    title: "Online service",
    body: "Access to multiplayer games",
    isChecked: false,
    ...getPrices!({ mo: 1, yl: 10 }),
  },
  {
    id: "larger-storage",
    title: "Larger storage",
    body: "Extra 1TB of cloud save",
    isChecked: false,
    ...getPrices!({ mo: 2, yl: 20 }),
  },
  {
    id: "customizable-profile",
    title: "Customizable profile",
    body: "Custom theme on youe profile",
    isChecked: false,
    ...getPrices!({ mo: 2, yl: 20 }),
  },
]);
const contine = function () {
  const anySelectd = offers.filter((e) => e.isChecked);
  anySelectd.forEach((e) => {
    addTooffer!(e);
  });

  !!anySelectd && nextPage!();
};
</script>

<style lang="scss" scoped>
.offer {
  @apply flex justify-between items-center;
  border: 1px solid #d1d0d0f6;
  padding: 1rem 1.2rem;
  width: 120%;
  border-radius: 10px;
}
.selected {
  background-color: #ddecfd;
}
</style>

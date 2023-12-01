<template>
  <section v-for="det in details" class="flex gap-4 pl-8 pr-28 pt-8">
    <div
      :class="[
        'num',
        {
          active: getActiveStep(det.num)?.num === curNumber,
        },
      ]"
    >
      <span class="text-lg font-semibold">{{ det.num }}</span>
    </div>
    <div class="w-[250%]">
      <p class="text-[#9699AB]">STEP {{ det.num }}</p>
      <h3 class="text-white uppercase font-semibold w-[250%]">
        {{ det.title }}
      </h3>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMutation } from "../composables/index";
const { curNumber } = useMutation();

type reseve = {
  num: number;
  title: string;
};

const props = defineProps<{ details: reseve[] }>();
const getActiveStep = function (stepNum: number) {
  return props.details.find((e) => e.num === stepNum);
};
</script>

<style lang="scss" scoped>
.num {
  @apply border border-x-white text-white px-5 py-2 rounded-full h-12;
  &.active {
    @apply bg-[#ADBEFF] text-black;
  }
}
</style>

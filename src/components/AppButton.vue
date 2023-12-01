<template>
  <div class="cont flex justify-between">
    <button
      type="button"
      :class="['back', { 'not-allowed': !canBack }]"
      :disabled="!canBack"
      @click="previousPage!()"
    >
      Go Back
    </button>
    <button class="btn" v-bind="$attrs">{{ btnText }}</button>
  </div>
</template>

<script setup lang="ts">
defineProps(["width"]);
import { useMutation } from "../composables/index";
import { computed } from "vue";

const { curNumber, previousPage } = useMutation();
defineOptions({
  inheritAttrs: false,
});
const canBack = computed(
  () => typeof curNumber === "object" && curNumber?.value > 1
);
const btnText = computed(() =>
  typeof curNumber === "object" && curNumber?.value === 4
    ? "Confirm"
    : "Next Step"
);
</script>

<style lang="scss" scoped>
.cont {
  width: v-bind(width);
}

.btn {
  padding: 0.8rem 1.7rem;
  background-color: hsl(213, 96%, 18%);
  border-radius: 10px;
  color: white;

  &:hover {
    background-color: hsl(213, 97%, 28%);
  }
}

.back {
  @apply text-gray-400 hover:bg-slate-300 hover:text-slate-800  hover:font-semibold;
  padding: 0.8rem 1.7rem;
  border-radius: 10px;
}
.not-allowed {
  cursor: not-allowed;
}
</style>

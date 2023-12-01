<template>
  <div class="check-box">
    <input
      type="checkbox"
      v-bind="$attrs"
      @change="changePlan"
      v-model="selectedPlan"
      true-value="Yearly"
      false-value="Monthly"
    />
  </div>
</template>

<script setup lang="ts">
// import { useAttrs } from "vue";
import { ref } from "vue";

// const attrs = useAttrs();
const emits = defineEmits(["slected-plan"]);
const selectedPlan = ref(null);
const changePlan = function () {
  emits("slected-plan", selectedPlan.value);
};
</script>

<style lang="scss" scoped>
.check-box {
  transform: scale(1);
}

input[type="checkbox"] {
  position: relative;
  appearance: none;
  width: 50px;
  height: 25px;
  background: #02295a;
  border-radius: 50px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.4s;
}

input:checked[type="checkbox"] {
  background: #02295a;
}

input[type="checkbox"]::after {
  position: absolute;
  content: "";
  width: 18px;
  height: 18px;
  top: 3px;
  left: 3px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
  transition: 0.4s;
}

input:checked[type="checkbox"]::after {
  left: 60%;
}
</style>

<template>
  <p class="text-right text-red-600 font-bold" v-if="showError">
    Please select atleast one plane
  </p>
  <div class="flex gap-8">
    <div
      v-for="plan in plans"
      :key="plan.name"
      class="single"
      @click="slectPlan"
    >
      <div>
        <img :src="plan.icon" :alt="plan.name" />
      </div>
      <div class="cash">
        <h3 class="text-[#02295A] font-bold name">{{ plan.name }}</h3>
        <span>$</span>
        <span class="price">{{
          typeof selectedPlan === "string" && plan[selectedPlan]
        }}</span>
        <span>/{{ shortcutPlan }}</span>
        <Transition>
          <p v-show="selectedPlan === 'Yearly'" class="offer">2 monthes free</p>
        </Transition>
      </div>
    </div>
  </div>
  <div class="flex justify-center bg-[#f2f5ff] gap-4 mb-32">
    <span :class="{ 'active-plan': selectedPlan === 'Monthly' }">Monthly</span>
    <AppToggleBtn @slected-plan="setSelectedPlan" />
    <span :class="{ 'active-plan': selectedPlan === 'Yearly' }">Yearly</span>
  </div>
  <AppButton @click="nexPage" />
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { useMutation } from "../composables/index";
const { nextPage, setSelectedPlan, selectedPlan, getPrices, mainPlan } =
  useMutation();

const plans = reactive({
  arcade: {
    icon: "../images/icon-arcade.svg",
    name: "Arcade",
    ...getPrices!({ mo: 9, yl: 90 }),
  },
  advanced: {
    icon: "../images/icon-advanced.svg",
    name: "Advanced",
    ...getPrices!({ mo: 10, yl: 100 }),
  },
  pro: {
    icon: "../images/icon-pro.svg",
    name: "Pro",
    ...getPrices!({ mo: 12, yl: 120 }),
  },
});

const showError = ref(false);
const anyPlanSelected = ref(false);
const slectPlan = function (e: any) {
  document
    .querySelectorAll(".single")
    .forEach((e) => e.classList.remove("selected"));

  const planName = e.target
    .closest(".single")
    .querySelector(".name").textContent;

  const planePrice = e.target
    .closest(".single")
    .querySelector(".price").textContent;

  e.target?.closest(".single").classList.add("selected");
  anyPlanSelected.value = true;

  mainPlan!.name = planName;
  mainPlan!.price = planePrice;
};

const shortcutPlan = computed(() => {
  if (typeof selectedPlan === "object") {
    return selectedPlan!.value === "Monthly" ? "mo" : "yr";
  }
});

const nexPage = function () {
  showError.value = false;
  if (anyPlanSelected.value && typeof selectedPlan === "object") {
    mainPlan!.timeStamp = selectedPlan?.value;
    nextPage!();
  } else {
    showError.value = true;
  }
};
</script>

<style lang="scss" scoped>
.single {
  @apply flex flex-col gap-6 w-1/3 pl-4 py-4 pr-10 cursor-pointer;
  border: 1px solid #9699ab8f;
  border-radius: 10px;

  &:hover {
    border: 1px solid #0468e2;
    background-color: hsl(215, 61%, 93%);
  }
}
.selected {
  border: 1px solid #0468e2;
  background-color: hsl(215, 61%, 93%);
}
span {
  color: #9699ab;
}

.active-plan {
  color: #022a5aa8;
  font-weight: 600;
}

.offer {
  @apply text-[#034494c0] font-bold text-sm;
  transition: all 2s;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

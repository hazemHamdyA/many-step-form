<template>
  <transition mode="out-in">
    <Descreptions v-if="curNumber === 1" />
    <Plan v-else-if="curNumber === 2" />
    <GameExp v-else-if="curNumber === 3" />
    <CheckOut v-else-if="curNumber === 4" />
    <Final v-else />
  </transition>
</template>

<script setup lang="ts">
import { useMutation } from "../composables";
const { curNumber } = useMutation();
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

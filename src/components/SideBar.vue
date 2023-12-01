<template>
  <div class="sidebar">
    <Steps :details="stepsDetails" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const stepsDetails = reactive([
  {
    num: 1,
    title: "your info",
    active: false,
  },
  {
    num: 2,
    title: "select plan",
    active: false,
  },
  {
    num: 3,
    title: "add-ons",
    active: false,
  },
  {
    num: 4,
    title: "summary",
    active: false,
  },
]);
</script>

<style lang="scss" scoped>
.sidebar {
  background-image: url(../assets/images/bg-sidebar-desktop.svg);
  background-size: contain;
  background-repeat: no-repeat;
  height: 85vh;
  margin-left: 0.8rem;
}
</style>

<template>
  <form @submit.prevent="submitForm">
    <div class="inputs-group">
      <label for="name"> Name</label>
      <input
        :class="['inputs-feild', { 'error-feild': !form.name.isValid }]"
        type="text"
        id="name"
        v-model.trim="form.name.val"
      />
      <p v-if="!form.name.isValid" class="error">This field is required</p>
    </div>
    <div class="inputs-group">
      <label for="email"> Email Address</label>
      <input
        :class="['inputs-feild', { 'error-feild': !form.email.isValid }]"
        type="email"
        id="email"
        v-model="form.email.val"
      />
      <p v-if="!form.email.isValid" class="error">This field is required</p>
    </div>
    <div class="inputs-group">
      <label for="phone"> Phone Number</label>
      <input
        :class="['inputs-feild', { 'error-feild': !form.phone.isValid }]"
        type="tel"
        id="phone"
        v-model.trim="form.phone.val"
        min="10"
      />
      <p v-if="!form.phone.isValid" class="error">This field is required</p>
    </div>

    <AppButton @click="previousPage!" />
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useMutation } from "../composables/index";

const { nextPage, previousPage } = useMutation();
interface FormType {
  name: {
    val: string;
    isValid: boolean;
  };
  email: {
    val: string;
    isValid: boolean;
  };
  phone: {
    val: string;
    isValid: boolean;
  };
}

const form: FormType = reactive({
  name: {
    val: "",
    isValid: true,
  },
  email: {
    val: "",
    isValid: true,
  },
  phone: {
    val: "",
    isValid: true,
  },
});

const submitForm = function (): void {
  if (form.name.val === "") {
    form.name.isValid = false;
    return;
  }
  if (form.email.val === "" || !form.email.val.includes("@")) {
    form.email.isValid = false;
    return;
  }
  if (form.phone.val === "") {
    form.phone.isValid = false;
    return;
  }
  nextPage!();
};
</script>

<style lang="scss" scoped>
.inputs-group {
  @apply flex flex-col gap-1 mb-6;
  color: hsl(213, 96%, 18%);
  font-weight: 500;
  .inputs-feild {
    border: 1px solid hsl(229, 24%, 87%);
    color: hsl(213, 96%, 18%);
    font-weight: 700;
    padding: 8px;
    border-radius: 8px;

    &:focus {
      outline: none;
      border: 1px solid hsl(243, 100%, 62%);
    }
    .error-feild {
      border: 1px solid red;
    }
  }

  .error {
    color: red;
    text-align: right;
    font-weight: 500;
  }
}
</style>

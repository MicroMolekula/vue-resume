<script setup>
import { ref, watch } from 'vue';

const model = defineModel();
const error = ref(true);

watch(model, () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(model.value)) {
    console.log(model)
    error.value = false
  } else {
    error.value = true
  }
})
</script>

<template>
  <div class="mb-3">
    <label for="email-input">Email</label>
    <input v-model="model" id="email-input" type="email" class="form-control" placeholder="Email" aria-label="Email">
    <div v-if="error" class="text-danger">
      Введите корректный email.
    </div>
  </div>
</template>

<style scoped></style>
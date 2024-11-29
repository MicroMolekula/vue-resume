<script setup>
import IMask from "imask";
import { onMounted, ref, watch } from "vue";

let maskString = '+7 (000) 000-00-00'

let maskOptions = {
  mask: maskString,
}
const inputRef = ref(null)
const error = ref(true)

let mask = null

onMounted(() => {
  mask = new IMask(inputRef.value, maskOptions);
})

const model = defineModel();

watch(model, () => {
  if (model.value.length > maskString.length) {
    model.value = model.value.slice(0, -1)
  }
  if (model.value.length === maskString.length) {
    error.value = false
  } else {
    error.value = true
  }
})
</script>

<template>
  <div class="mb-3">
    <label for="input-phone">Номер телефона</label>
    <input v-model="model" ref="inputRef" id="input-phone" type="text" class="form-control" :placeholder="maskString">
    <div v-if="error" class="text-danger">
      Введите корректный номер телефона.
    </div>
  </div>
</template>

<style scoped></style>
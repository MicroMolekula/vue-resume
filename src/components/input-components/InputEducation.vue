<script setup>
import {ref, watch} from "vue";
import InputText from "@/components/input-components/InputText.vue";
import InputDate from "@/components/input-components/InputDate.vue";

const educationLevel = ref(['Среднее', 'Среднее специальное', 'Неоконченное высшее', 'Высшее'])
const level = ref('Выберете уровень образования...')
const model = defineModel()

model.value = {
  level: 'Выберете уровень образования...',
  univer: '',
  fac: '',
  spec: '',
  date: ''
}

watch(model, () => {
  console.log(model.value)
})

function checkEdu(edu) {
  return edu !== 'Выберете уровень образования...' && edu !== 'Среднее';
}
</script>

<template>
<div class="mb-3">
  <label for="select-id">Уровень образования</label>
  <select id="select-id" class="form-select" v-model="model.level">
    <option selected>Выберете уровень образования...</option>
    <option v-for="levelEdu in educationLevel" :value="levelEdu">{{ levelEdu }}</option>
  </select>
</div>
  <div class="mb-3" v-if="checkEdu(model.level)">
    <InputText v-model="model.univer" title="Университет"></InputText>
    <InputText v-model="model.fac" title="Факультет"></InputText>
    <InputText v-model="model.spec" title="Специализация"></InputText>
    <InputText v-model="model.date" title="Дата окончания"></InputText>
  </div>
</template>

<style scoped>

</style>
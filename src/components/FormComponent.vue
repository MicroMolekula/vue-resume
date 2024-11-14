<script setup>
import InputText from "@/components/input-components/InputText.vue"
import InputTextArea from "./input-components/InputTextArea.vue";
import InputUrl from "./input-components/InputUrl.vue";
import InputSelect from "./input-components/InputSelect.vue";
import { ref, watch } from "vue";

const data = ref({
  proffession: '',
  about: '',
  city: '',
  photo: '',
  name: '',
  phone: '',
  email: '',
  dateBirth: '',
  education: '',
  salary: '',
  skills: '',
})
</script>

<template>
  <div>
    <InputText title="Проффесия" v-model="data.proffession"></InputText>
    <InputTextArea title="О себе" v-model="data.about"></InputTextArea>
    <InputText title="Город" v-model="data.city"></InputText>
    <InputUrl title="Фото" v-model="data.photo"></InputUrl>
    <InputText title="ФИО" v-model="data.name"></InputText>
  </div>
</template>

<style scoped></style>
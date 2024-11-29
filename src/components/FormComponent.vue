<script setup>
import InputText from "@/components/input-components/InputText.vue"
import InputTextArea from "./input-components/InputTextArea.vue";
import InputUrl from "./input-components/InputUrl.vue";
import InputSelect from "./input-components/InputSelect.vue";
import { ref, watch } from "vue";
import InputEmail from "@/components/input-components/InputEmail.vue";
import InputSkills from "@/components/input-components/InputSkills.vue";
import InputPhone from "@/components/input-components/InputPhone.vue";
import InputSalary from "@/components/input-components/InputSalary.vue";
import InputDate from "@/components/input-components/InputDate.vue";
import InputEducation from "@/components/input-components/InputEducation.vue";


const data = defineModel()
data.value = {
  proffession: '',
  about: '',
  city: '',
  photo: '',
  name: '',
  phone: '',
  email: '',
  dateBirth: '',
  education: {
    level: 'Выберете уровень образования...',
    univer: '',
    fac: '',
    spec: '',
    date: ''
  },
  salary: '',
  skills: '',
}

const emit = defineEmits(['data-form'])

function submitForm() {
  // validation
  emit('data-form', data.value)
}


</script>

<template>
  <div>
    <InputText title="Проффесия" v-model="data.proffession"></InputText>
    <InputTextArea title="О себе" v-model="data.about"></InputTextArea>
    <InputText title="Город" v-model="data.city"></InputText>
    <InputUrl title="Фото" v-model="data.photo"></InputUrl>
    <InputText title="ФИО" v-model="data.name"></InputText>
    <InputEmail v-model="data.email"></InputEmail>
    <InputSkills v-model="data.skills"></InputSkills>
    <InputPhone v-model="data.phone"></InputPhone>
    <InputSalary v-model="data.salary"></InputSalary>
    <InputDate title="Дата рождения" v-model="data.dateBirth"></InputDate>
    <InputEducation v-model="data.education"></InputEducation>
    <!-- <button type="button" class="btn btn-primary" @click="submitForm">Применить</button> -->
  </div>
</template>


<style scoped></style>
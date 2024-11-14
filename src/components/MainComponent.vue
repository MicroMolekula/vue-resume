<script setup>
import FormComponent from "@/components/FormComponent.vue"
import ResumeComponent from "@/components/ResumeComponent.vue"
import {ref} from "vue";

const dataFromForm = ref({
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

function getDataFromForm(data) {
  dataFromForm.value = data
}
</script>

<template>
    <div class="main">
        <FormComponent v-model="dataFromForm" class="form"></FormComponent>
        <ResumeComponent :data="dataFromForm" class="resume"></ResumeComponent>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
}

.form {
    width: 30%;
}

.resume {
    width: 70%;
}
</style>
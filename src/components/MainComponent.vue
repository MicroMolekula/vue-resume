<script setup>
import FormComponent from "@/components/FormComponent.vue"
import ResumeComponent from "@/components/ResumeComponent.vue"
</script>

<template>
    <div class="main">
        <FormComponent class="form"></FormComponent>
        <ResumeComponent class="resume"></ResumeComponent>
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
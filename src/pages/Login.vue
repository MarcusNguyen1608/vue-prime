<script setup>
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import { useRouter } from "vue-router";
const username = ref("");
const value = ref(null);

const router = useRouter();

const navigateToDashboard = () => {
  router.push({ name: "Dashboard" });
};
</script>

<template>
  <div class="flex flex-col justify-center h-screen items-center gap-2">
    <div class="flex flex-col">
      <label for="username" class="text-primary-500">Username</label>
      <InputText id="username" v-model="username" />
    </div>
    <span class="flex flex-col">
      <label for="password" class="text-primary-500">Password</label>
      <Password class="w-full" v-model="value" inputId="password" />
    </span>
    <Button label="Login" @click="console.log('Login')" />
    <Button label="Dashboard" @click="navigateToDashboard" />
  </div>
</template>

<script setup>
import Button from "primevue/button";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToLogin = () => {
  router.push({ name: "Login" });
};
</script>

<template>
  <div class="min-h-screen">
    <div class="flex flex-col justify-center h-screen items-center gap-7">
      <h1 class="text-5xl font-extrabold text-gray-400">
        JavaScript Playground
      </h1>
      <div>
        <Button label="Start Coding" @click="navigateToLogin" />
      </div>
    </div>
  </div>
</template>

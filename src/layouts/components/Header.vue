<template>
  <div class="flex w-full h-fit py-1 px-10 justify-between bg-primary-500">
    <div class="flex items-center">
      <i class="pi pi-bitcoin" />
    </div>
    <div class="h-full flex items-center gap-4 w-1/5">
      <InputText class="bg-surface-100" v-model="search" placeholder="Search" />
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputText from "primevue/inputtext";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";

const search = ref("");
</script>

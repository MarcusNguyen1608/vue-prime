<template>
  <div class="h-full card flex justify-end p-2">
    <button
      type="button"
      class="flex transition-all bg-primary-400 border-none text-black rounded-full p-3 hover:bg-primary-500/70 cursor-pointer transition-duration-200 shadow-inner"
      @click="toggleDark()"
    >
      <i
        :class="`pi ${isDark ? 'pi-sun' : 'pi-moon'}`"
        style="color: 'rgb(var(--surface-900))'"
      />
    </button>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

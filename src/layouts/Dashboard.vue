<!-- src/layouts/Dashboard.vue -->
<script>
import Header from '@/layouts/components/Header.vue';

export default {
    name: "Dashboard",
    components: { Header }
};
</script>
<template>
  <div>
    <Header />
    <slot />
  </div>
</template>

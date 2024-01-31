<script setup>
import { provide, shallowRef } from "vue";
import router from "./router";
import layouts from "./layouts";

const layout = shallowRef("div");

router.afterEach((to) => {
  layout.value = layouts[to.meta.layout] || "div";
});

provide("app:layout", layout);
</script>
<template>
  <div id="app" class="bg-surface-0">
    <component :is="layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<style></style>

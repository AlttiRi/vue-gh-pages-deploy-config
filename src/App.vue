<template>
  <Text :text="'Hello World!'"/>
</template>

<script setup>
import Text from "./Text.vue";
</script>

<style>
:root {
  --gray-1: rgba(240, 248, 255, 0.5);
}
body {
  background: var(--gray-1);
}
</style>

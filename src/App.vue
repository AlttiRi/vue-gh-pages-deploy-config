<template>
  <ColoredText :text="'Hello World!'"/>
  <ClickCounter/>
</template>

<script setup>
import ColoredText from "./components/ColoredText.vue";
import ClickCounter from "./components/ClickCounter.vue";
</script>

<style>
:root {
  --gray-1: rgba(240, 248, 255, 0.5);
}
body {
  background: var(--gray-1);
}
</style>

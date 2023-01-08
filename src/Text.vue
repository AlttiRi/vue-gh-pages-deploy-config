<template>
  <h1 @click="setNewColor">
    <span class="text" title="Click on me">{{text}}</span>
  </h1>
</template>

<script setup lang="ts">
import {ref, Ref} from "vue";
import {getRandomColor} from "./util.js";

defineProps({
  text: {
    type: String,
    required: true
  }
});

const color: Ref<string> = ref("#000");
function setNewColor() {
  color.value = getRandomColor();
}
</script>

<style scoped lang="scss">
h1 {
  .text {
    color: v-bind(color);
    cursor: pointer;
    user-select: none;
  }
}
</style>

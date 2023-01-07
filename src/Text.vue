<template>
  <div class="text" @click="setNewColor">
    <h1 title="Click on me">{{text}}</h1>
  </div>
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
.text {
  h1 {
    color: v-bind(color);
    cursor: pointer;
    user-select: none;
  }
}
</style>

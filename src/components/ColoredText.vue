<template>
  <h1 @click="setNewColor">
    <span class="text" title="Click on me">{{text}}</span>
  </h1>
</template>

<script setup lang="ts">
import {ref, Ref, toRefs} from "vue";
import {getRandomColor, webBlue, webColor} from "../util.js";

const props = defineProps({
  text: {
    type: String,
    required: true
  }
});

const {text} = toRefs(props)
console.log(...webBlue(text.value));

const color: Ref<string> = ref("#000");
function setNewColor() {
  color.value = getRandomColor();
  console.log(...webColor(text.value, color.value));
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

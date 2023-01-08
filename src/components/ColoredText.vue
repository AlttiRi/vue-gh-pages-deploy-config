<template>
  <h1 @click="onClick">
    <span class="text" title="Click on me">{{text}}</span>
  </h1>
</template>

<script setup lang="ts">
import {toRefs} from "vue";
import {getRandomColor, webBlue, webColor} from "../util.js";
import {clickCount, color} from "../state/core";

const props = defineProps({
  text: {
    type: String,
    required: true
  }
});

const {text} = toRefs(props);
console.log(...webBlue(text.value));

function setNewColor() {
  color.value = getRandomColor();
  console.log(...webColor(text.value, color.value));
}
function onClick() {
  clickCount.value++;
  setNewColor();
}
</script>

<style scoped lang="scss">
h1 {
  font-size: 34px;
  .text {
    color: v-bind(color);
    cursor: pointer;
    user-select: none;
  }
}
</style>

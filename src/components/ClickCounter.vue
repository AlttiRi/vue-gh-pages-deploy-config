<template>
  <div class="counter">{{clickCount}}</div>
</template>

<script setup>
import {clickCount} from "../state/core";
</script>

<style scoped>
.counter {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 12px;
  color: gray;
}
</style>

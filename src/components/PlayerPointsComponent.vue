<script setup lang="ts">
const props = defineProps(["player"]);
</script>

<template>
  <div
    class="player-points-wrapper relative text-neutral"
    :style="'background-color:' + player.backgroundColor"
  >
    <h1 class="absolute top-3 left-4 text-3xl font-bold">{{ player.name }}</h1>
    <div class="score grid grid-cols-3 items-center text-4xl h-full">
      <button class="min-h-full" @click="player.score--">-</button>
      <div class="text-center font-bold text-8xl">{{ player.score }}</div>
      <button class="min-h-full" @click="player.score++">+</button>
    </div>
  </div>
</template>

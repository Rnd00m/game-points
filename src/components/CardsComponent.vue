<script setup lang="ts">
import PlayerPoints from "@/components/PlayerPointsComponent.vue";
</script>

<template>
  <div class="grid grid-cols-2 gap-6">
    <PlayerPoints v-for="n in 8" />
  </div>
</template>

<script setup lang="ts">
import PlayerPoints from "@/components/PlayerPointsComponent.vue";
</script>

<template>
  <div class="grid sm:grid-cols-2 grid-cols-1 min-h-[90vh]">
    <PlayerPoints v-for="n in 4" />
  </div>
</template>

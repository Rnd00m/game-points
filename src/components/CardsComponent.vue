<script setup lang="ts">
import PlayerPoints from "@/components/PlayerPointsComponent.vue";
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
</script>

<template>
  <div class="grid sm:grid-cols-2 grid-cols-1">
    <PlayerPoints
      :player="player"
      :key="player.name"
      v-for="player in counterStore.players"
    />
  </div>
</template>

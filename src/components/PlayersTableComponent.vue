<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
</script>

<template>
  <div>
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Color</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr
            v-for="(player, index) in counterStore.players"
            :key="`player-${index}`"
          >
            <th>{{ index + 1 }}</th>
            <td>{{ player.name }}</td>
            <td>{{ player.backgroundColor }}</td>
            <td>{{ player.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- The button to open modal -->
    <label for="my-modal-4" class="btn">Add new player</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
    <label for="my-modal-4" class="modal modal-bottom sm:modal-middle">
      <label class="modal-box relative" for="">
        <h3 class="text-lg font-bold">New player</h3>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Color</span>
          </label>
          <div class="grid grid-cols-8 gap-3">
            <div class="h-8" style="background-color: #1abc9c"></div>
            <div class="h-8" style="background-color: #2ecc71"></div>
            <div class="h-8" style="background-color: #3498db"></div>
            <div class="h-8" style="background-color: #9b59b6"></div>
            <div class="h-8" style="background-color: #2c3e50"></div>
            <div class="h-8" style="background-color: #f1c40f"></div>
            <div class="h-8" style="background-color: #e67e22"></div>
            <div class="h-8" style="background-color: #e74c3c"></div>
          </div>
        </div>
      </label>
    </label>
  </div>
</template>

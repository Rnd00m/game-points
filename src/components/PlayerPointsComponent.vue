<script setup lang="ts"></script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body items-center text-center">
      <h2 class="card-title">Player name</h2>
      <div class="form-control">
        <div class="input-group input-group-lg">
          <button class="btn btn-lg">-</button>
          <input
            type="text"
            placeholder="10"
            class="input input-lg input-bordered w-24 text-center"
          />
          <button class="btn btn-lg">+</button>
        </div>
      </div>
      <div class="card-actions">
        <!--        <button class="btn btn-primary">Buy Now</button>-->
      </div>
    </div>
  </div>
</template>

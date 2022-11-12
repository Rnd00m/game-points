import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    players: [
      {
        name: "Player 1",
        backgroundColor: "#ffa726",
        score: 0,
      },
      {
        name: "Player 2",
        backgroundColor: "#0288d1",
        score: 0,
      },
    ] as Player[],
  }),
  getters: {},
  actions: {},
});

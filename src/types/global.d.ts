export {};

declare global {
  type Player = {
    name: string;
    backgroundColor: string;
    score: number | 0;
  };
}

import { create } from "zustand";
import { Game } from "../model/game";

interface GameStore {
  savedGames: Game[];
  ignoredGames: Game[];
  setSavedGame: (game: Game) => void;
  setIgnoredGame: (game: Game) => void;
}

const gameStore = create<GameStore>((set) => ({
  savedGames: [],
  ignoredGames: [],
  setSavedGame: (game) =>
    set((state) => ({
      savedGames: state.savedGames.includes(game)
        ? state.savedGames.filter((g) => g !== game)
        : [...state.savedGames, game],
    })),
  setIgnoredGame: (game) =>
    set((state) => ({
      ignoredGames: state.ignoredGames.includes(game)
        ? state.ignoredGames.filter((g) => g !== game)
        : [...state.ignoredGames, game],
    })),
}));

export default gameStore;

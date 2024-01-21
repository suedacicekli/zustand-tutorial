import { create } from "zustand";

interface Theme {
  theme: string;
  setTheme: (theme: string) => void;
}

const themeStore = create<Theme>((set) => ({
  theme: localStorage.getItem("theme") || "wireframe",
  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));

export default themeStore;

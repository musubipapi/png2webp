import { create } from "zustand";
import { APPS } from "@/lib/consts";

type AppType = (typeof APPS)[keyof typeof APPS];

interface AppState {
  selectedApp: AppType;
  setSelectedApp: (app: AppType) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedApp: APPS.PNG2WEBP,
  setSelectedApp: (app) => set({ selectedApp: app }),
}));

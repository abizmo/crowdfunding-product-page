import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { User } from "@/types";

interface UserState {
  user: User;
}

interface UserActions {
  actions: {
    addToBookmarks: (projectId: string) => void;
    removeFromBookmarks: (projectId: string) => void;
  };
}

const userStore = create<UserState & UserActions>()(
  immer((set) => ({
    user: {
      id: "userId",
      bookmarks: [],
    },
    actions: {
      addToBookmarks: (projectId) =>
        set((state) => {
          if (!state.user.bookmarks.includes(projectId)) {
            state.user.bookmarks.push(projectId);
          }
        }),
      removeFromBookmarks: (projectId) =>
        set((state) => {
          state.user.bookmarks = state.user.bookmarks.filter(
            (p) => p !== projectId,
          );
        }),
    },
  })),
);

export const useUserState = () => userStore().user;
export const useUserActions = () => userStore().actions;

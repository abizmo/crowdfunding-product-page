import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { Pledge, Project } from "@/types";

interface ProjectState {
  project: Project | null;
}

interface ProjectActions {
  actions: {
    setProject: (project: Project) => void;
    pledgeToProject: (pledgeId: string, pledgeAmount: number) => void;
  };
}

const projectStore = create<ProjectState & ProjectActions>()(
  immer((set) => ({
    project: null,
    actions: {
      setProject: (project) =>
        set((state) => {
          state.project = project;
        }),
      pledgeToProject: (pledgeId, pledgeAmount) =>
        set((state) => {
          if (!state.project) return;

          const pledgeIndex = state.project.pledgeOptions.findIndex(
            (p: Pledge) => p.id === pledgeId,
          );
          if (pledgeIndex === -1) return;

          state.project.stats.backedAmount += pledgeAmount;
          state.project.stats.backers += 1;

          state.project.pledgeOptions[pledgeIndex].remaining -= 1;
        }),
    },
  })),
);

export const useProjectState = () => projectStore().project;
export const useProjectActions = () => projectStore().actions;

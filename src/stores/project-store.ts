import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { Pledge, Project } from "@/types";

interface ProjectState {
  project: Project;
}

interface ProjectActions {
  actions: {
    setProject: (project: Project) => void;
    pledgeToProject: (pledgeId: string, pledgeAmount: number) => void;
  };
}

const projectStore = create<ProjectState & ProjectActions>()(
  immer((set) => {
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + 56);

    return {
      project: {
        id: "mastercraft-bamboo-monitor-riser",
        name: "Mastercraft bamboo monitor riser",
        description:
          "A beautiful & handcrafted monitor stand to reduce neck and eye strain.",
        about: [
          "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve  your posture and make you more comfortable while at work, helping you stay focused on the task at hand.",
          "Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
        ],
        image: {
          desktop: "/images/hero-desktop.jpg",
          mobile: "/images/hero-mobile.jpg",
        },
        stats: {
          goal: 100000,
          backedAmount: 89914,
          backers: 5007,
          targetDate,
        },
        pledgeOptions: [
          {
            id: "no-reward",
            name: "Pledge with no reward",
            description:
              "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
          },
        ],
      },
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

            if (state.project.pledgeOptions[pledgeIndex].remaining != null) {
              state.project.pledgeOptions[pledgeIndex].remaining -= 1;
            }
          }),
      },
    };
  }),
);

export const useProjectState = () => projectStore().project;
export const useProjectActions = () => projectStore().actions;

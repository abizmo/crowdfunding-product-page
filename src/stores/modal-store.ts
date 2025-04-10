import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { Pledge } from "@/types";

enum ModalType {
  PLEDGE_OPTION = "PLEDGE_OPTION",
  THANK_YOU = "THANK_YOU",
}

type ModalPropsMap = {
  PLEDGE_OPTION: { pledgeOptions: Pledge[] };
  THANK_YOU: { name: string };
};

type ModalUnion =
  | {
      isOpen: true;
      modalType: ModalType.PLEDGE_OPTION;
      modalProps: ModalPropsMap[ModalType.PLEDGE_OPTION];
    }
  | {
      isOpen: true;
      modalType: ModalType.THANK_YOU;
      modalProps: ModalPropsMap[ModalType.THANK_YOU];
    }
  | { isOpen: false; modalType: null; modalProps: {} };

interface ModalState {
  modal: ModalUnion;
}

interface ModalActions {
  actions: {
    openModal: () => void;
    closeModal: () => void;
    toggleModal: () => void;
  };
}

const modalStore = create<ModalState & ModalActions>()(
  immer((set) => ({
    modal: {
      isOpen: false,
      modalType: null,
      modalProps: {},
    },
    actions: {
      openModal: () =>
        set((state) => {
          state.modal.isOpen = true;
        }),
      closeModal: () =>
        set((state) => {
          state.modal.isOpen = false;
        }),
      toggleModal: () =>
        set((state) => {
          state.modal.isOpen = !state.modal.isOpen;
        }),
    },
  })),
);

export const useModalState = () => modalStore().modal;
export const useModalActions = () => modalStore().actions;

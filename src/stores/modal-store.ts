import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { Pledge } from "@/types";

export enum ModalType {
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
      type: ModalType.PLEDGE_OPTION;
      props: ModalPropsMap[ModalType.PLEDGE_OPTION];
    }
  | {
      isOpen: true;
      type: ModalType.THANK_YOU;
      props: ModalPropsMap[ModalType.THANK_YOU];
    }
  | { isOpen: false; type: null; props: {} };

interface ModalState {
  modal: ModalUnion;
}

interface ModalActions {
  actions: {
    openModal: (props: Omit<ModalUnion, "isOpen">) => void;
    closeModal: () => void;
    toggleModal: () => void;
  };
}

const modalStore = create<ModalState & ModalActions>()(
  immer((set) => ({
    modal: {
      isOpen: false,
      type: null,
      props: {},
    },
    actions: {
      openModal: ({ type: modalType, props: modalProps }) =>
        set((state) => {
          state.modal.isOpen = true;
          state.modal.type = modalType;
          state.modal.props = modalProps;
        }),
      closeModal: () =>
        set((state) => {
          state.modal.isOpen = false;
          state.modal.props = {};
          state.modal.type = null;
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

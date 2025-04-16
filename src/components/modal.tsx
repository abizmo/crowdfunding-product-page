import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  ModalType,
  useModalActions,
  useModalState,
} from "@/stores/modal-store";

import BackProject from "./back-project";
import ThankYou from "./thank-you";

function Modal() {
  const { isOpen, type } = useModalState();
  const { closeModal } = useModalActions();

  const handleOpenChange = () => {
    closeModal();
  };

  const isBackingProject = type === ModalType.PLEDGE_OPTION;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent closeButton={isBackingProject}>
        {isBackingProject ? <BackProject /> : <ThankYou />}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;

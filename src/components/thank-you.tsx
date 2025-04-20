import { useModalActions } from "@/stores/modal-store";
import { useProjectState } from "@/stores/project-store";

import { Button } from "./ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

function ThankYou() {
  const { closeModal } = useModalActions();
  const { name } = useProjectState();

  return (
    <>
      <DialogHeader className="items-center text-center">
        <img
          className="size-16 sm:mb-8 sm:size-20"
          src="/images/check.svg"
          alt=""
        />
        <DialogTitle>Thanks for your support!</DialogTitle>
        <DialogDescription>
          Your pledge brings us one step closer to sharing{" "}
          <span className="capitalize">{name}</span> worldwide. You will get an
          email once our campaign is completed.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="mt-2 items-center !justify-center">
        <Button className="max-w-fit" size="sm" onClick={closeModal}>
          Got it
        </Button>
      </DialogFooter>
    </>
  );
}

export default ThankYou;

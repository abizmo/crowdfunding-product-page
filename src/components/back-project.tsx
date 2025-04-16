import { useModalState } from "@/stores/modal-store";
import { Pledge } from "@/types";

import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

function BackProject() {
  const { props: modalProps } = useModalState();
  const { pledgeOptions } = modalProps as { pledgeOptions: Pledge[] };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Back this project</DialogTitle>
        <DialogDescription>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </DialogDescription>
      </DialogHeader>
      {pledgeOptions && pledgeOptions.map((p) => <p key={p.id}>{p.name}</p>)}
    </>
  );
}

export default BackProject;

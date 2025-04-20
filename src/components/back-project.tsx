import PledgeList from "./product/pledge-list";
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

function BackProject() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Back this project</DialogTitle>
        <DialogDescription>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </DialogDescription>
      </DialogHeader>
      <PledgeList withForm className="flex-grow overflow-auto" />
    </>
  );
}

export default BackProject;

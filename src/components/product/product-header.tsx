import ProductBookmark from "@/components/product/product-bookmark";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ModalType, useModalActions } from "@/stores/modal-store";
import { useProjectState } from "@/stores/project-store";

function ProductHeader() {
  const { pledgeOptions } = useProjectState();
  const { openModal } = useModalActions();

  const handleOpenPledges = () => {
    openModal({
      type: ModalType.PLEDGE_OPTION,
      props: { pledgeOptions },
    });
  };

  return (
    <Card className="relative pt-14">
      <div className="absolute top-0 left-1/2 -translate-1/2">
        <img src="/images/mastercraft.svg" alt="mastercraft" />
      </div>
      <CardContent className="text-center text-balance">
        <h1 className="mb-4 text-xl font-bold sm:text-3xl">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="text-neutral-500">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </CardContent>
      <CardFooter className="flex-wrap justify-between">
        <Button onClick={handleOpenPledges} size="lg">
          Back this project
        </Button>
        <ProductBookmark />
      </CardFooter>
    </Card>
  );
}

export default ProductHeader;

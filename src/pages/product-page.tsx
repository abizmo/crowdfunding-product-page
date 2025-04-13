import ProductBanner from "@/components/product/product-banner";
import ProductHeader from "@/components/product/product-header";
import { useModalState } from "@/stores/modal-store";
import { Pledge } from "@/types";

function ProductPage() {
  const { isOpen, modalProps } = useModalState();
  const { pledgeOptions } = modalProps as { pledgeOptions: Pledge[] };
  return (
    <main>
      <ProductBanner />
      <div className="container -mt-14 !max-w-3xl sm:-mt-20">
        <ProductHeader />
      </div>
      <p>This is the product page.</p>
      <dialog open={isOpen}>
        {pledgeOptions && pledgeOptions.map((p) => <p>{p.name}</p>)}
      </dialog>
    </main>
  );
}

export default ProductPage;

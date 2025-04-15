import ProductBanner from "@/components/product/product-banner";
import ProductBody from "@/components/product/product-body";
import ProductHeader from "@/components/product/product-header";
import ProductStats from "@/components/product/product-stats";
import { useModalState } from "@/stores/modal-store";
import { Pledge } from "@/types";

function ProductPage() {
  const { isOpen, modalProps } = useModalState();
  const { pledgeOptions } = modalProps as { pledgeOptions: Pledge[] };
  return (
    <main>
      <ProductBanner />
      <div className="container -mt-14 mb-20 grid !max-w-3xl gap-6 sm:-mt-20">
        <ProductHeader />
        <ProductStats />
        <ProductBody />
      </div>
      <dialog open={isOpen}>
        {pledgeOptions && pledgeOptions.map((p) => <p>{p.name}</p>)}
      </dialog>
    </main>
  );
}

export default ProductPage;

import ProductBanner from "@/components/product/product-banner";
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
      <div className="container -mt-14 grid !max-w-3xl gap-6 sm:-mt-20">
        <ProductHeader />
        <ProductStats />
      </div>
      <p>This is the product page.</p>
      <dialog open={isOpen}>
        {pledgeOptions && pledgeOptions.map((p) => <p>{p.name}</p>)}
      </dialog>
    </main>
  );
}

export default ProductPage;

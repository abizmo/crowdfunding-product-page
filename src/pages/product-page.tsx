import Modal from "@/components/modal";
import ProductBanner from "@/components/product/product-banner";
import ProductBody from "@/components/product/product-body";
import ProductHeader from "@/components/product/product-header";
import ProductStats from "@/components/product/product-stats";

function ProductPage() {
  return (
    <main>
      <ProductBanner />
      <div className="container -mt-14 mb-20 grid !max-w-3xl gap-6 sm:-mt-20">
        <ProductHeader />
        <ProductStats />
        <ProductBody />
      </div>
      <Modal />
    </main>
  );
}

export default ProductPage;

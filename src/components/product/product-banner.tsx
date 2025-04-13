import { useProjectState } from "@/stores/project-store";

function ProductBanner() {
  const { image } = useProjectState();
  return (
    <picture className="relative top-0 -z-10">
      <source srcSet={image.desktop} media="(width>= 640px)" />
      <img src={image.mobile} alt="mastercraft-bamboo-monitor-raiser" />
    </picture>
  );
}

export default ProductBanner;

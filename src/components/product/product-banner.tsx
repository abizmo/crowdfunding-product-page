import { useProjectState } from "@/stores/project-store";

function ProductBanner() {
  const { image, name } = useProjectState();
  return (
    <picture className="relative top-0 -z-10">
      <source srcSet={image.desktop} media="(width>= 640px)" />
      <img className="mx-auto" src={image.mobile} alt={name} />
    </picture>
  );
}

export default ProductBanner;

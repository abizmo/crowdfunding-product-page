interface ProductStatProps {
  stat: number | string;
  label: string;
}

function ProductStat({ stat, label }: ProductStatProps) {
  return (
    <article className="grid content-between gap-2">
      <span className="text-3xl font-bold">{stat}</span>
      <span className="text-sm text-neutral-500 sm:text-base">{label}</span>
    </article>
  );
}

export default ProductStat;

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import calculateDaysLeft from "@/lib/calculate-days-left";
import { formatToCurrency, formatToDecimal } from "@/lib/format";
import { useProjectState } from "@/stores/project-store";

import ProductStat from "./product-stat";

function ProductStats() {
  const { stats } = useProjectState();

  return (
    <Card>
      <CardContent>
        <div className="grid justify-center gap-12 divide-y text-center sm:grid-cols-3 sm:justify-start sm:divide-x sm:divide-y-0 sm:text-left">
          <ProductStat
            stat={formatToCurrency(stats.backedAmount)}
            label={`of ${formatToCurrency(stats.goal)} backed`}
          />
          <ProductStat
            stat={formatToDecimal(stats.backers)}
            label="total backers"
          />
          <ProductStat
            stat={formatToDecimal(calculateDaysLeft(stats.targetDate))}
            label="days left"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Progress value={(stats.backedAmount / stats.goal) * 100} />
      </CardFooter>
    </Card>
  );
}

export default ProductStats;

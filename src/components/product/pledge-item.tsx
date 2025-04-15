import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatToCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Pledge } from "@/types";

function PledgeItem({ id, name, remaining, minPledge, description }: Pledge) {
  const handleClick = () => {
    console.log("pledge:", id);
  };

  return (
    <Card
      className={cn(
        `gap-y-6 text-sm sm:text-base`,
        !remaining && "pointer-events-none opacity-50",
      )}
    >
      <CardHeader className="items-center justify-between sm:flex">
        <CardTitle className="sm:text-lg">{name}</CardTitle>
        <CardDescription className="text-primary-500">
          Pledge {formatToCurrency(minPledge as number)} or more
        </CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter className="flex-col flex-wrap items-start justify-between gap-8 sm:flex-row sm:items-center">
        <span className="flex items-center gap-2">
          <strong className="text-3xl">{remaining}</strong>
          left
        </span>
        <Button onClick={handleClick} disabled={!remaining}>
          {!remaining ? "Out of stock" : "Select Reward"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PledgeItem;

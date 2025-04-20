import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProjectState } from "@/stores/project-store";

import PledgeList from "./pledge-list";

function ProductBody() {
  const { about } = useProjectState();
  return (
    <Card>
      <CardHeader className="gap-6 sm:gap-8">
        <CardTitle className="text-lg sm:text-xl">About this project</CardTitle>
        {about.map((paragraph, index) => (
          <CardDescription key={index} className="sm:text-base">
            {paragraph}
          </CardDescription>
        ))}
      </CardHeader>
      <CardContent>
        <PledgeList withRewards />
      </CardContent>
    </Card>
  );
}

export default ProductBody;

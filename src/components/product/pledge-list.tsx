import { useProjectState } from "@/stores/project-store";

import PledgeItem from "./pledge-item";

function PledgeList() {
  const { pledgeOptions } = useProjectState();

  const pledgesWithReward = pledgeOptions.filter((p) => p.minPledge);

  return (
    <ul>
      {pledgesWithReward.map((pledge) => (
        <li key={pledge.id} className="not-last:mb-6">
          <PledgeItem {...pledge} />
        </li>
      ))}
    </ul>
  );
}

export default PledgeList;

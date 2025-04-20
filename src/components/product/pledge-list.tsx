import {
  ModalPropsMap,
  ModalType,
  useModalActions,
  useModalState,
} from "@/stores/modal-store";
import { useProjectState } from "@/stores/project-store";

import { RadioGroup } from "../ui/radio-group";
import PledgeForm from "./pledge-form";
import PledgeItem from "./pledge-item";

interface PledgeListProps {
  withRewards?: boolean;
  withForm?: boolean;
  className?: string;
}

function PledgeList({
  withRewards = false,
  withForm = false,
  className,
}: PledgeListProps) {
  let { pledgeOptions: pledgesToShown } = useProjectState();
  const { changeSelected } = useModalActions();
  const { pledgeSelected } = useModalState()
    .props as ModalPropsMap[ModalType.PLEDGE_OPTION];

  const handleChange = (id: string) => {
    changeSelected(id);
  };

  if (withRewards) pledgesToShown = pledgesToShown.filter((p) => p.minPledge);

  if (withForm)
    return (
      <RadioGroup
        className={className}
        defaultValue={pledgeSelected}
        onValueChange={handleChange}
      >
        {pledgesToShown.map((pledge) => (
          <div key={pledge.id} className="not-last:mb-6">
            <PledgeForm {...pledge} />
          </div>
        ))}
      </RadioGroup>
    );

  return (
    <ul className={className}>
      {pledgesToShown.map((pledge) => (
        <li key={pledge.id} className="not-last:mb-6">
          <PledgeItem {...pledge} />
        </li>
      ))}
    </ul>
  );
}

export default PledgeList;

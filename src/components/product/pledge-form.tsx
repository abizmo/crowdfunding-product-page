import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useMediaQuery from "@/hooks/use-media-query";
import { formatToCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";
import {
  ModalPropsMap,
  ModalType,
  useModalActions,
  useModalState,
} from "@/stores/modal-store";
import { useProjectActions } from "@/stores/project-store";
import { Pledge } from "@/types";

import { RadioGroupItem } from "../ui/radio-group";
import Form from "./form";

function PledgeForm({ id, name, remaining, minPledge, description }: Pledge) {
  const { pledgeToProject } = useProjectActions();
  const { closeModal, openModal } = useModalActions();
  const isDesktop = useMediaQuery("(width >= 768px)");
  const { pledgeSelected } = useModalState()
    .props as ModalPropsMap[ModalType.PLEDGE_OPTION];
  const isSelected = id === pledgeSelected;
  const handleSubmit = ({ amount }: { amount: number }) => {
    pledgeToProject(id, amount);
    closeModal();
    openModal({ type: ModalType.THANK_YOU, props: { name } });
  };

  return (
    <Card
      className={cn(
        `has-[button[aria-checked='true']]:border-primary-500 gap-y-6 text-sm [--btn-size:--spacing(6)] [--gap-size:--spacing(4)] sm:gap-y-4 sm:text-base`,
        remaining === 0 && "pointer-events-none opacity-50",
      )}
    >
      <CardHeader className="grid-cols-[var(--btn-size)_1fr] items-center gap-(--gap-size)">
        <RadioGroupItem value={id} id={id} />
        <label
          className="group items-center justify-between sm:flex"
          htmlFor={id}
        >
          <div className="group-hover:text-primary-500 grid items-center gap-2 sm:grid-cols-[repeat(2,max-content)] sm:gap-x-4 sm:gap-y-0">
            <CardTitle className="sm:text-base">{name}</CardTitle>
            {!!minPledge ? (
              <CardDescription className="text-primary-500 sm:text-base">
                Pledge {formatToCurrency(minPledge as number)} or more
              </CardDescription>
            ) : null}
          </div>
          {remaining !== undefined && isDesktop ? (
            <span className="flex items-center gap-2">
              <strong className="text-lg">{remaining}</strong>
              left
            </span>
          ) : null}
        </label>
      </CardHeader>
      <CardContent className="sm:ml-[calc(var(--gap-size)_+_var(--btn-size))]">
        {description}
        {remaining !== undefined && !isDesktop ? (
          <span className="mt-6 flex items-center gap-2">
            <strong className="text-lg">{remaining}</strong>
            left
          </span>
        ) : null}
      </CardContent>
      {isSelected && (
        <CardFooter className="border-t">
          <Form initialValue={minPledge || 0} onSubmit={handleSubmit} />
        </CardFooter>
      )}
    </Card>
  );
}

export default PledgeForm;

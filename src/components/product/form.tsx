"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  Form as FormShadcn,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  amount: z.coerce.number(),
});

interface FormProps {
  initialValue: number;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

function Form({ initialValue, onSubmit }: FormProps) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: initialValue,
    },
  });

  return (
    <FormShadcn {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full gap-4 sm:grid-cols-[repeat(2,max-content)] sm:items-center sm:justify-between"
      >
        <span className="block text-center">Enter your pledge</span>
        <div className="flex w-full items-center justify-between gap-4">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} type="number" min={initialValue} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button size="sm" type="submit">
            Continue
          </Button>
        </div>
      </form>
    </FormShadcn>
  );
}

export default Form;

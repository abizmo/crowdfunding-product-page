import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 px-6",
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex h-12 w-full max-w-24 min-w-0 rounded-full border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "font-bold text-neutral-500",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
    >
      $
      <input
        type={type}
        data-slot="input"
        className={cn(
          "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground w-full bg-transparent text-base text-neutral-700 transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
        )}
        {...props}
      />
    </div>
  );
}

export { Input };

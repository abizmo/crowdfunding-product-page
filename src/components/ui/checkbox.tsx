import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { cn } from '@/lib/utils'
import IconBookmark from '@/assets/icon-bookmark'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'group peer h-14 w-14 shrink-0 rounded-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    <IconBookmark className='checkbox-icon group-hover:opacity-75 group-aria-checked:checked' />
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

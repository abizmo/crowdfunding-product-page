'use client'

import { Checkbox } from '@/components/ui/checkbox'

export default function Bookmark() {
  return (
    <div className='flex items-center gap-4 bg-bookmark h-14 rounded-full md:pr-6'>
      <Checkbox id='bookmark' />
      <label
        htmlFor='bookmark'
        className='sr-only md:not-sr-only text-base font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-aria-checked:text-bookmark-checked'
      >
        Bookmark
      </label>
    </div>
  )
}

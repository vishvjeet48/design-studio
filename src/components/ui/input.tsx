import * as React from 'react'

import { cn } from '@/lib/utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-12 w-full rounded-xl border border-charcoal/10 bg-white/50 px-4 text-sm text-charcoal transition-all duration-500 placeholder:text-charcoal/35 focus-visible:border-olive/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-olive/30 dark:border-white/10 dark:bg-white/5 dark:text-ivory dark:placeholder:text-ivory/35',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }

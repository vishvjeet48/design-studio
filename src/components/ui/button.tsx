import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium tracking-wide transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-charcoal text-ivory shadow-soft hover:bg-charcoal/90 dark:bg-ivory dark:text-charcoal dark:hover:bg-ivory/90',
        outline:
          'border border-charcoal/15 bg-ivory/40 text-charcoal backdrop-blur-sm hover:border-charcoal/25 dark:border-ivory/15 dark:bg-white/5 dark:text-ivory',
        ghost: 'text-charcoal hover:bg-charcoal/5 dark:text-ivory dark:hover:bg-white/10',
        subtle:
          'bg-sand/60 text-charcoal hover:bg-sand dark:bg-white/10 dark:text-ivory dark:hover:bg-white/15',
      },
      size: {
        default: 'h-12 px-7',
        sm: 'h-10 rounded-lg px-4 text-xs',
        lg: 'h-14 rounded-2xl px-10 text-base',
        icon: 'size-11 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  },
)
Button.displayName = 'Button'

export { Button }

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-all duration-700 ease-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-bg px-8 py-4 hover:bg-gold hover:text-ink",
        outline:
          "border border-ink/20 bg-transparent text-ink px-8 py-4 hover:border-gold hover:text-gold",
        ghost: "bg-transparent text-ink px-4 py-2 hover:text-gold",
        gold: "bg-gold text-ink px-10 py-5 hover:bg-beige",
      },
      size: {
        default: "min-h-12",
        lg: "min-h-14 text-base",
        sm: "min-h-10 px-5 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

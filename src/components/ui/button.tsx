import React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        ghost: "bg-transparent hover:bg-primary-hover/10",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        lg: " h-12 px-6 py-3 text-base",
        icon: "size-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  },
);

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  asChild,
  className,
  variant,
  size,
  fullWidth,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "",
        buttonVariants({ variant, size, fullWidth }),
        className,
      )}
      {...props}
    />
  );
};

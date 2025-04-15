"use client";

import React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  "rounded-full transition-all duration-300 flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5",
  {
    variants: {
      variant: {
        primary: "bg-[#0000ff] text-white hover:bg-[#0000cc] hover:shadow-[0_0_15px_rgba(0,0,255,0.5)] border border-solid border-transparent",
        secondary: "border border-solid border-[#0000ff]/30 text-white hover:bg-[#0000ff]/10 hover:border-[#0000ff]/50",
      },
      size: {
        default: "w-full sm:w-auto",
        fixed: "w-full sm:w-auto md:w-[158px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, external, children, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={buttonVariants({ variant, size, className })}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

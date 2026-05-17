import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700",
  secondary:
    "border border-blue-200 bg-white text-blue-700 shadow-sm hover:border-blue-300 hover:bg-blue-50",
  ghost: "border border-slate-200 bg-white text-slate-950 shadow-sm hover:bg-slate-50",
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

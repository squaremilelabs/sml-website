import React from "react"
import { ClassNameValue, twMerge } from "tailwind-merge"

export default function Box({
  className,
  children,
}: {
  className?: ClassNameValue
  children: React.ReactNode
}) {
  return (
    <div
      className={twMerge(
        "rounded border-1 border-default-300 bg-background/80 p-4 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  )
}

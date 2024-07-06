"use client"

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import { twMerge } from "tailwind-merge"

export default function StyleProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className={twMerge("flex h-screen w-screen flex-col font-sans")}>
      <NextThemeProvider attribute="class">{children}</NextThemeProvider>
    </NextUIProvider>
  )
}

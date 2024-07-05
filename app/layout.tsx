"use client"

import "lib/styles/global.css"
import React from "react"
import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import { twMerge } from "tailwind-merge"
import { fontsClassName } from "lib/styles/fonts"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={fontsClassName}>
      <body>
        <NextUIProvider className={twMerge("flex h-screen w-screen flex-col font-sans")}>
          <NextThemeProvider attribute="class">{children}</NextThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}

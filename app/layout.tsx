import "lib/styles/global.css"
import React from "react"
import { Metadata } from "next"
import { fontsClassName } from "lib/styles/fonts"
import StyleProvider from "lib/styles/provider"

export const metadata: Metadata = {
  title: "Square Mile Labs",
  description: "Tech/Fin/Ops Consulting & Development",
  keywords: [
    "Hoboken",
    "Services",
    "Technology",
    "Accounting",
    "Square Mile Labs",
    "SML",
    "Engineer",
    "Data",
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={fontsClassName}>
      <body>
        <StyleProvider>{children}</StyleProvider>
      </body>
    </html>
  )
}

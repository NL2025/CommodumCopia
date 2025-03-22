"use client"

import type { ReactNode } from "react"
import GlobalStyles from "./global-styles"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}


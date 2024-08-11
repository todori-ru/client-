import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import type { PropsWithChildren } from "react"
import { cn } from "~/lib/utils"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Todori",
  description: "Generated by create next app", // todo: description
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-montserrat antialiased",
          montserrat.className
        )}
      >
        {children}
      </body>
    </html>
  )
}

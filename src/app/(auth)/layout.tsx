import type { PropsWithChildren } from "react"

export default function AuthLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <main>
      <h1>AuthLayout</h1>
      {children}
    </main>
  )
}

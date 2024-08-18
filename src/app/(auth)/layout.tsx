import type { PropsWithChildren } from "react"
import { ModeToggle } from "~/ui/mode-toggle"

export default function AuthLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="h-screen flex flex-col">
      <header className="shadow-md p-2">
        <ModeToggle />
      </header>
      <main className="flex-1 flex items-center justify-center">
        {children}
      </main>
    </div>
  )
}

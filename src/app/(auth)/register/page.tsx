import { RegisterCredentials } from "~/components/auth/registerCredentials"
import Link from "next/link"
import { Button } from "~/ui/button"
import { GithubIcon } from "~/components/icons/github"
import { GoogleIcon } from "~/components/icons/google"

export default function RegisterPage() {
  return (
    <div className="px-3 w-full max-w-screen-sm space-y-6">
      <div>
        <h2 className="text-center xs:text-4xl">Sign up for a new account</h2>
        <p className="text-lg mt-2 text-center text-muted-foreground">
          Or{" "}
          <Link href="/login" className="font-medium text-foreground underline">
            sign in to your account
          </Link>
        </p>
      </div>
      <RegisterCredentials />
      <div className="flex items-center">
        <div className="h-0.5 flex-1 bg-muted-foreground" />
        <p className="font-medium text-muted-foreground px-2">
          Or sign in with
        </p>
        <div className="h-0.5 flex-1 bg-muted-foreground" />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button variant="outline" className="flex-1 flex items-center gap-2">
          <GithubIcon className="h-5 w-5" />
          GitHub
        </Button>
        <Button variant="outline" className="flex-1 flex items-center gap-2">
          <GoogleIcon className="h-5 w-5" />
          Google
        </Button>
      </div>
    </div>
  )
}

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "~/ui/form"
import { Input } from "~/ui/input"
import { Button } from "~/ui/button"

const credentialsSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field is required." })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
})

type CredentialsSchema = z.infer<typeof credentialsSchema>

const FIELDS = [
  {
    name: "email",
    label: "Email",
    placeholder: "example@gmail.com",
    description: null,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "your password here",
    description: "Password must be at least 8 symbols long",
  },
] as const

export function RegisterCredentials() {
  const form = useForm<CredentialsSchema>({
    resolver: zodResolver(credentialsSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: CredentialsSchema) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {FIELDS.map((fieldMeta) => (
          <FormField
            key={fieldMeta.name}
            control={form.control}
            name={fieldMeta.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fieldMeta.label}</FormLabel>
                <FormControl>
                  <Input placeholder={fieldMeta.placeholder} {...field} />
                </FormControl>
                {fieldMeta.description !== null ? (
                  <FormDescription>{fieldMeta.description}</FormDescription>
                ) : null}
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

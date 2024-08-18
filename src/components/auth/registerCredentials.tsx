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
import ky from "ky"

const credentialsSchema = z.object({
  username: z
    .string()
    .min(1, { message: "This field is required." })
    .min(3, { message: "Username must be at least 3 characters." }),
  email: z
    .string()
    .min(1, { message: "This field is required." })
    .email({ message: "This is not a valid email." }),
  password: z
    .string()
    .min(1, { message: "This field is required." })
    .min(8, { message: "Password must be at least 8 characters." }),
})

type CredentialsSchema = z.infer<typeof credentialsSchema>

const FIELDS = [
  {
    name: "username",
    label: "Username",
    placeholder: "Username",
    description: "Username must be at least 3 symbols long",
  },
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
      username: "",
    },
  })

  async function onSubmit(values: CredentialsSchema) {
    const res = await ky
      .post("http://localhost:4000/api/v1/user/registration", {
        method: "post",
        json: {
          email: values.email,
          password: values.password,
          username: values.username,
        },
      })
      .json<{ error: string } | { token: string }>()
    console.log(res)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {FIELDS.map((fieldMeta) => (
          <FormField
            key={fieldMeta.name}
            control={form.control}
            name={fieldMeta.name}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>{fieldMeta.label}</FormLabel>
                <FormControl>
                  <Input placeholder={fieldMeta.placeholder} {...field} />
                </FormControl>
                {fieldMeta.description !== null ? (
                  <FormDescription>{fieldMeta.description}</FormDescription>
                ) : null}
                {fieldState.error ? (
                  <p className="text-destructive">{fieldState.error.message}</p>
                ) : null}
              </FormItem>
            )}
          />
        ))}
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}

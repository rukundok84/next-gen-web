"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IconFidgetSpinner } from "@tabler/icons-react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { toast } from "sonner"

export default function Page() {


  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData(e.currentTarget)
    const fullName = formData.get("fullName") as string
    const email = formData.get("email") as string
    const phoneNumber = formData.get("phoneNumber") as string
    const password = formData.get("password") as string
    const dob = formData.get("dateOfBirth") as string
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ fullName, email, phoneNumber, password, dob })

    })

    if (res.ok) {
      console.log("user added successfully")
      setIsLoading(false)
      router.push("/admin")
    } else {
      console.log("failed to add a user")
      toast.error("failed to add a user")
      setIsLoading(false)
    }
  }
  return (
    <div className="container flex align-middle justify-center my-[20px]">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <Card className="w-full ">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Create an account</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  name="fullName"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="phone"
                  name="phoneNumber"
                  placeholder="+250 | --- --- ---"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dateOfBirth">Date Of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  name="password"
                  required

                />
              </div>

            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" disabled={isLoading} className="w-full cursor-pointer">
              {isLoading? (<IconFidgetSpinner className="animate-spin"/>) : ""}Signup
            </Button>
            <Button variant="outline" className="w-full cursor-pointer">
              Login with Google
            </Button>
            <div className="flex items-center">
              <CardDescription>
                Already have an account &nbsp;
              </CardDescription>
              <span> </span>
              <a
                href="/login"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Login?
              </a>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

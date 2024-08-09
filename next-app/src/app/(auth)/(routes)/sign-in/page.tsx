"use client"

import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"

export default function Component() {
  const handleOnsubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    event.currentTarget.reset()
    const data = {
      email: formData.get("email") as string | null,
      password: formData.get("password") as string | null,
    }

    console.log("data: ", data)

    try {
      const response = await axios.post("/api/sign-in", data)
      // const response = await axios.post("https://11d7259e-0d92-45e8-a068-e8ffc67f77a2.mock.pstmn.io/api/sign-in", data)
      console.log("Form submitted successfully:", response.data)
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email and password to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleOnsubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email" // Add name attribute
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password" // Add name attribute
                type="password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

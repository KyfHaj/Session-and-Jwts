import { CssVarsProvider } from "@mui/joy/styles"
import Sheet from "@mui/joy/Sheet"
import Typography from "@mui/joy/Typography"
import FormControl from "@mui/joy/FormControl"
import FormLabel from "@mui/joy/FormLabel"
import Input from "@mui/joy/Input"
import Button from "@mui/joy/Button"
import Link from "@mui/joy/Link"

import "./LoginForm.css"

export default function Login() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // prevent auto reload
    const formData = new FormData(event.currentTarget)
    event.currentTarget.reset()
    const data = {
      email: formData.get("email") as string | null,
      password: formData.get("password") as string | null,
    }
    console.log("submit login: ", data)
  }

  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          width: 300,
          mx: "auto", // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
      >
        <Typography level="h3" sx={{ textAlign: "center", color: "blue" }}>
          Welcome!
        </Typography>
        <Typography level="body-sm" sx={{ textAlign: "center" }}>
          Sign in to continue.
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" placeholder="password" />
          </FormControl>
          <Button type="submit" sx={{ mt: 1 /* margin top */ }}>
            Log in
          </Button>
        </form>
        <Typography
          endDecorator={<Link href="/sign-up">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          Don't have an account?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  )
}

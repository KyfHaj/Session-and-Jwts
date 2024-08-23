import * as React from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useColorScheme } from "@mui/joy/styles"
import Sheet from "@mui/joy/Sheet"
import CssBaseline from "@mui/joy/CssBaseline"
import Typography from "@mui/joy/Typography"
import FormControl from "@mui/joy/FormControl"
import FormLabel from "@mui/joy/FormLabel"
import Input from "@mui/joy/Input"
import Button from "@mui/joy/Button"
import Link from "@mui/joy/Link"
import { API_ROOT } from "../../utils/constants"

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = React.useState(false)

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return <Button variant="soft">Change mode</Button>
  }

  return (
    <Button
      variant="soft"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light")
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  )
}

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

    try {
      const res = await axios.post(`${API_ROOT}/v1/users/login`, data)
      console.log(res.data)
      toast.success("Login API success!")
    } catch (error: any) {
      toast.error(error.response?.data?.message || error?.message)
    }
  }

  return (
    <main>
      <ModeToggle />
      <CssBaseline />
      <form onSubmit={handleSubmit}>
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
          variant="outlined"
        >
          <div>
            <Typography
              level="h4"
              component="h1"
              sx={{ textAlign: "center", color: "blue" }}
            >
              <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm" sx={{ textAlign: "center" }}>
              Sign in to continue.
            </Typography>
          </div>

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
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>
          <Button type="submit" sx={{ mt: 1 /* margin top */ }}>
            Log in
          </Button>

          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </form>
    </main>
  )
}

import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import { CssVarsProvider } from "@mui/joy/styles"
import Dashboard from "./pages/Dashboard/Dashboard"
import Login from "./pages/Login/Login"

const ProtectedRoute = () => {
  const user = localStorage.getItem("userInfo")
  if (!user) return <Navigate to="/login" replace={true} />
  return <Outlet />
}

// const UnauthorizedRoutes = () => {
//   const user = localStorage.getItem("userInfo")
//   console.log("user: ", user)
//   if (user) return <Navigate to="/dashboard" replace={true} />
//   return <Outlet />
// }

function App() {
  return (
    <CssVarsProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
        {/* <Route element={<UnauthorizedRoutes />}> */}
        <Route path="/login" element={<Login />} />
        {/* </Route> */}
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* </Route> */}
      </Routes>
    </CssVarsProvider>
  )
}

export default App

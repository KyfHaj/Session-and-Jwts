import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import Login from "./pages/Login/Login"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace={true} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App

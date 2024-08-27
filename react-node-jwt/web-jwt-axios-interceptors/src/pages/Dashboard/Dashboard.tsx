import authorizedAxiosInstance from "../../utils/authorizedAxios"
import { useEffect, useState } from "react"
import { API_ROOT } from "../../utils/constants"
import { Button } from "@mui/joy"
import { useNavigate } from "react-router-dom"
import { handleLogoutAPI } from "../../apis"
// import axios from "axios"

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const res = await authorizedAxiosInstance.get(
        `${API_ROOT}/v1/dashboard/access`
      )
      setUser(res.data.id)
    }
    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      const res = await authorizedAxiosInstance.get(
        `${API_ROOT}/v1/dashboard/access`
      )
      setUser(res.data.id)
    }
    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      const res = await authorizedAxiosInstance.get(
        `${API_ROOT}/v1/dashboard/access`
      )
      setUser(res.data.id)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await authorizedAxiosInstance.get(
        `${API_ROOT}/v1/dashboard/access`
      )
      setUser(res.data.id)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await authorizedAxiosInstance.get(
        `${API_ROOT}/v1/dashboard/access`
      )
      setUser(res.data.id)
    }
    fetchData()
  }, [])

  const handleLogout = async () => {
    await handleLogoutAPI()
    setUser(null)
    navigate("/login")
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Hi {user || "????"} </h2>
      <Button variant="soft" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  )
}

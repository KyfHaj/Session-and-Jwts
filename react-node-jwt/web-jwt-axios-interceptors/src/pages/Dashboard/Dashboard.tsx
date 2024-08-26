import authorizedAxiosInstance from "../../utils/authorizedAxios"
import { useEffect, useState } from "react"
import { API_ROOT } from "../../utils/constants"
import { Button } from "@mui/joy"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_ROOT}/v1/dashboard/access`)
        setUser(res.data.id)
      } catch (error: any) {
        console.log(error.response?.status)
        if (error.response?.status === 401) {
          navigate("/login")
          return
        }
      }
    }
    fetchData()
  }, [])

  const handleLogout = async () => {
    // Dùng Storage: Chỉ cần xóa thông tin ở local Storage
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")

    // dùng Http only cookie cần call api phía backend gỡ bỏ cookie và ...
    await authorizedAxiosInstance.delete(`${API_ROOT}/v1/users/logout`)
    localStorage.removeItem("UserInfor")
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

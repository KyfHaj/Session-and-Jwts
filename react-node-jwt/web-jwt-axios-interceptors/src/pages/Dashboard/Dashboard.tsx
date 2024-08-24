import authorizedAxiosInstance from "../../utils/authorizedAxios"
import { useEffect, useState } from "react"
import { API_ROOT } from "../../utils/constants"

export default function Dashboard() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const res = await authorizedAxiosInstance.get(
        `${API_ROOT}/v1/dashboard/access`
      )
      setUser(res.data.id)
    }
    fetchData()
  }, [])
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Hi {user || "????"} </h2>
    </div>
  )
}

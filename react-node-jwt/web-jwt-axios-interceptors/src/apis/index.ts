import authorizedAxiosInstance from "../utils/authorizedAxios"
import { API_ROOT } from "../utils/constants"

export const handleLogoutAPI = async () => {
  // Dùng Storage: Chỉ cần xóa thông tin ở local Storage
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")

  // dùng Http only cookie cần call api phía backend gỡ bỏ cookie và ...
  localStorage.removeItem("userInfo")
  return await authorizedAxiosInstance.delete(`${API_ROOT}/v1/users/logout`)
}

export const refreshTokenAPI = async (refreshToken: any) => {
  return await authorizedAxiosInstance.put(
    `${API_ROOT}/v1/users/refreshToken`,
    { refreshToken }
  )
}

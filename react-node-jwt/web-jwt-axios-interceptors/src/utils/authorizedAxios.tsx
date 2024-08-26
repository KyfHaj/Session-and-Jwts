import axios from "axios"
import { toast } from "react-toastify"
import { handleLogoutAPI, refreshTokenAPI } from "../apis/index"

let authorizedAxiosInstance = axios.create()

// Thời gian chờ 1 request
authorizedAxiosInstance.defaults.timeout = 1000 * 60 * 10

/**
 * Mang theo credentials trong mỗi request.
 * Khi phía backend res.cookie và
 * authorizedAxiosInstance.defaults.withCredentials = true
 * cookie sẽ được set tự động value mà backend set
 *
 * Phải mở CORS ở backend credentials: true*/
authorizedAxiosInstance.defaults.withCredentials = true

// Nếu dùng localStorage để lưu token, mỗi request gửi đi sẽ thêm vào 1 interceptor
// authorizedAxiosInstance.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem("accessToken")
//     if (accessToken) {
//       // config.headers.Authorization = accessToken
//       config.headers.Authorization = `Bearer ${accessToken}`
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

// Mỗi respone nhận về sẽ thêm vào 1 interceptor
// Có thể ko dùng try catch khi call api mà xử lý ở đây
// authorizedAxiosInstance.interceptors.response.use(
//   (response) => {
//     console.log(response.data)
//     toast.success("Login API success!")
//     return response
//   },
//   (error) => {
//     if (error.response?.status === 401) {
//       // Handle the 401 error silently
//       return Promise.resolve(null)
//     }

//     // Handle other errors normally
//     toast.error(error.response?.data?.message || error?.message)
//     console.log(error.response?.status)
//     console.log(error.response?.data?.message || error?.message)

//     return Promise.reject(error)
//   }
// )

authorizedAxiosInstance.interceptors.response.use(
  (response) => {
    console.log(response.data)
    toast.success("Login API success!")
    return response
  },
  (error) => {
    // Handle other errors normally
    toast.error(error.response?.data?.message || error?.message)
    console.log(error.response?.status)
    console.log(error.response?.data?.message || error?.message)

    if (error.response?.status === 401) {
      handleLogoutAPI().then(() => {
        location.href = "/login"
      })
    }
    const originnalRequest = error.config
    console.log("originnalRequest: ", originnalRequest)

    if (error.response?.status === 410 && !originnalRequest._retry) {
      originnalRequest._retry = true
      // Cho cả localStorage và cookie
      const refreshToken = localStorage.getItem("refreshToken")
      return refreshTokenAPI(refreshToken)
        .then((res) => {
          // Trường hợp dùng localStorage
          const { accessToken } = res.data
          localStorage.setItem("accessToken", accessToken)
          authorizedAxiosInstance.defaults.headers.Authoriztion = `Bear ${accessToken}`
          // Cookie thì nó được auto gán ở cookie
          // Gọi request tới trang cần
          return authorizedAxiosInstance(originnalRequest)
        })
        .catch(() => {
          // Logout nếu có bất kỳ lỗi nào trong quá trình refresh token
          handleLogoutAPI().then(() => {
            location.href = "/login"
          })
        })
    }
    return Promise.reject(error)
  }
)

export default authorizedAxiosInstance

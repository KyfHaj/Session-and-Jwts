import { StatusCodes } from "http-status-codes"
import { JwtProvider } from "@/providers/JwtProvider"

// Lấy token và xác thực đẻ xem nó hợp lệ hay ko
// Lấy accessToken từ cookie
const isAuthorized = async (req, res, next) => {
  const accessTokenFromCookie = req.cookies?.accessToken
  console.log("accessTokenFromCookie", accessTokenFromCookie)

  if (!accessTokenFromCookie) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Unauthorized: (Token not found)" })
    return
  }
  // Hoặc lấy từ local storage
  //   const accessTokenFromHeader = req.headers.authorization
  //   console.log("accessTokenFromCookie", accessTokenFromCookie)

  // verify token
  try {
    console.log("1")
    const accessTokenDecoded = await JwtProvider.verifyToken(
      accessTokenFromCookie,
      process.env.ACCESS_TOKEN_SECRET_KEY
    )
    console.log("2")
    // if verify token thành công
    next()
  } catch (error) {
    // console.log("Error from Middleware: ", error)
    // Nếu lỗi do token hết hạn
    if (error.message?.includes("jwt expired")) {
      console.log("3")
      res
        .status(StatusCodes.GONE)
        .json({ message: "Unauthorized: (Need to refresh Token" })
      return
    }
    // Nếu token ko hợp lệ, thì đăng nhập lại
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ message: "Unauthorized: (Token not verified)" })
  }
}

// Lấy accessToken từ LocalStorage
// const isAuthorized = async (req, res, next) => {

//   const accessTokenFromHeader = req.headers.authorization
//   console.log("accessTokenFromHeader: ", accessTokenFromHeader)

//   if (!accessTokenFromHeader) {
//     res
//       .status(StatusCodes.UNAUTHORIZED)
//       .json({ message: "Unauthorized: (Token not found)" })
//     return
//   }

//   // verify token
//   try {
//     console.log("1")
//     const accessTokenDecoded = await JwtProvider.verifyToken(
//       accessTokenFromHeader.substring("Bearer ".length),
//       process.env.ACCESS_TOKEN_SECRET_KEY
//     )
//     // if verify token thành công
//     console.log("2")
//     next()
//   } catch (error) {
//     // console.log("Error from Middleware: ", error)
//     // Nếu lỗi do token hết hạn
//     if (error.message?.includes("jwt expired")) {
//       console.log("3")
//       res
//         .status(StatusCodes.GONE)
//         .json({ message: "Unauthorized: (Need to refresh Token" })
//       return
//     }
//     // Nếu token ko hợp lệ, thì đăng nhập lại
//     res
//       .status(StatusCodes.NOT_ACCEPTABLE)
//       .json({ message: "Unauthorized: (Token not verified)" })
//   }
// }

export const authMiddleware = { isAuthorized }

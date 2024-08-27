import { JwtProvider } from "@/providers/JwtProvider"
import { StatusCodes } from "http-status-codes"
import ms from "ms"

const MockDataBase = {
  USER: {
    id: "admin123",
    email: "tuliver2611@gmail.com",
    password: "1",
  },
}

const login = async (req, res) => {
  try {
    if (
      req.body.email !== MockDataBase.USER.email ||
      req.body.password !== MockDataBase.USER.password
    ) {
      res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "Your email or password is incorrect!" })
      return
    }

    //  Nếu login thành công, lấy thông tin user và tạo access token, refresh token trả về client
    const userInfor = {
      id: MockDataBase.USER.id,
      email: MockDataBase.USER.email,
    }

    const accessToken = await JwtProvider.generateToken(
      userInfor,
      process.env.ACCESS_TOKEN_SECRET_KEY,
      5
      // "1h"
    )

    const refreshToken = await JwtProvider.generateToken(
      userInfor,
      process.env.REFRESH_TOKEN_SECRET_KEY,
      "14 days"
    )

    // Trả về cookie và set http only, maxAge, secure
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: ms("14 days"),
    })

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: ms("14 days"),
    })

    // res.status(StatusCodes.OK).json({ message: "Login API success!" })
    // voi localStorage
    // res.status(StatusCodes.OK).json({ ...userInfor, accessToken, refreshToken })
    // voi cookie
    res.status(StatusCodes.OK).json({ ...userInfor })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}

const logout = async (req, res) => {
  try {
    res.clearCookie("accessToken")
    res.clearCookie("refreshToken")
    return res.status(StatusCodes.OK).json({ message: "logout" })
  } catch {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}

/**
 * Call tới /refreshToken khi accessToken hết hạn
 * Check refreshToken
 * if valid
 *  Check userId có trong DB hay ko
 *  Tạo lại đồng thời 2 token và set lại cho Cookie
 * if not valid
 *  if refreshToken expired
 *    => Session hết hạn, kêu nó login lại
 *  If fake Token
 *    => Chửi nó dùng fake token, kêu nó vẫn login lại
 * Chung quy lại là logout nếu refreshToken ko valid
 * @param {*} req
 * @param {*} res
 */

const refreshToken = async (req, res) => {
  // Nếu refreshToken gửi bởi cookie
  const refreshTokenFromCookie = req.cookies?.refreshToken

  console.log("refreshTokenFromCookie: ", refreshTokenFromCookie)
  try {
    const refreshTokenDecoded = await JwtProvider.verifyToken(
      refreshTokenFromCookie,
      process.env.REFRESH_TOKEN_SECRET_KEY
    )
    console.log("refreshTokenDecoded: ", refreshTokenDecoded)
    // Có DB thì lấy refreshTokenDecoded.id hoặc refreshTokenDecoded.email tìm trong DB để lấy userInfor
    const userInfor = {
      id: MockDataBase.USER.id,
      email: MockDataBase.USER.email,
    }
    const newAccessToken = await JwtProvider.generateToken(
      userInfor,
      process.env.ACCESS_TOKEN_SECRET_KEY,
      5
      // "1h"
    )
    console.log("newAccessToken: ", newAccessToken)

    // Trả về cookie và set http only, maxAge, secure
    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: ms("14 days"),
    })

    console.log("setCookie: ")
    res.status(StatusCodes.OK).json({ ...userInfor })
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "Pls login again!" })
  }
}

// const refreshToken = async (req, res) => {
//   // Nếu refreshToken gửi bởi localStorage
//   const refreshTokenFromBody = req.body?.refreshToken

//   console.log("refreshTokenFromBody: ", refreshTokenFromBody)
//   try {
//     const refreshTokenDecoded = await JwtProvider.verifyToken(
//       refreshTokenFromBody,
//       process.env.REFRESH_TOKEN_SECRET_KEY
//     )
//     console.log("refreshTokenDecoded: ", refreshTokenDecoded)
//     // Có DB thì lấy refreshTokenDecoded.id hoặc refreshTokenDecoded.email tìm trong DB để lấy userInfor
//     const userInfor = {
//       id: MockDataBase.USER.id,
//       email: MockDataBase.USER.email,
//     }
//     const newAccessToken = await JwtProvider.generateToken(
//       userInfor,
//       process.env.ACCESS_TOKEN_SECRET_KEY,
//       15
//       // "1h"
//     )
//     console.log("newAccessToken: ", newAccessToken)

//     // Trả về cookie và set http only, maxAge, secure
//     res.cookie("accessToken", newAccessToken, {
//       httpOnly: true,
//       secure: true,
//       sameSite: "none",
//       maxAge: ms("14 days"),
//     })

//     res.status(StatusCodes.OK).json({ ...userInfor, newAccessToken })
//   } catch (error) {
//     res.status(StatusCodes.NOT_ACCEPTABLE).json({ message: "Pls login again!" })
//   }
// }

export const userController = {
  login,
  logout,
  refreshToken,
}

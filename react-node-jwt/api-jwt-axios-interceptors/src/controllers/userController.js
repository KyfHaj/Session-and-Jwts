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
  console.log(process.env.REFRESH_TOKEN_SECRET_KEY)
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
      "1h"
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
    res.status(StatusCodes.OK).json({ ...userInfor, accessToken, refreshToken })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}
export const userController = {
  login,
  // logout,
  // refreshToken
}

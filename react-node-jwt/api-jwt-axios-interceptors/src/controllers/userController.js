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
  console.log("request email: ", req.body.email)
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
    console.log("ok")
    res.status(StatusCodes.OK).json({ message: "Login API success!" })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}
export const userController = {
  login,
  // logout,
  // refreshToken
}

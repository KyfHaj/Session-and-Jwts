import { StatusCodes } from "http-status-codes"

const access = async (req, res) => {
  try {
    const user = { id: "admin123" }

    res.status(StatusCodes.OK).json(user)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}

export const dashboardController = { access }

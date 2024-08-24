import express from "express"
import { StatusCodes } from "http-status-codes"
import { userRoute } from "./users/usersRoute.js"
import { dashboardRouter } from "./dashboard/dashboardRoute"

const Router = express.Router()

Router.get("/status", (req, res, next) => {
  res.status(StatusCodes.OK).json({ message: "APIs V1 are ready to use" })
})

Router.use("/users", userRoute)
Router.use("/dashboard", dashboardRouter)

export const APIs_V1 = Router

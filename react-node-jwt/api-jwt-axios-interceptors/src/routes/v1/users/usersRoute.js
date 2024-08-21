import express from "express"
import { userController } from "../../../controllers/userController.js"

const Router = express.Router()

Router.route("/login").post(userController.login)
// Router.route("/logout").delete(userController.logout)
// Router.route("/refresh_token").get(userController.refreshtoken)

export const userRoute = Router

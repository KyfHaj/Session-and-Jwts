import express from "express"
import cors from "cors"
// const express = require('express')
import cookieParser from "cookie-parser"
// import { corsOptions } from "./config/corsOptions.js"
import { corsOptions } from "@/config/corsOptions.js"
import { APIs_V1 } from "@/routes/v1/index.js"

const app = express()

const hostName = "localhost"
const port = 2611

app.get("/", function (req, res) {
  res.send("<h1>Ready !</h1>")
})

// Fix Cache from disk from ExpressJS
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store")
  next()
})

// Use Cookie
app.use(cookieParser())

app.use(cors(corsOptions))

// Enable req.body json data
app.use(express.json())

// Use Route APIs V1
app.use("/v1", APIs_V1)

app.listen(port, hostName, () => {
  console.log(`Kyf running on http://${hostName}:${port}`)
})

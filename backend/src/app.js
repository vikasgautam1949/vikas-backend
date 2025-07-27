import express from 'express'
import cors from "cors"
import cookieParser from "cookie-parser"

 const app = express()
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*', // Allow all origins by default
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}))
app.use(express.json({
  limit: '50mb' // Set a higher limit for JSON payloads
}))
app.use(express.urlencoded({
  limit: '16kb', // Set a higher limit for URL-encoded payloads
  extended: true // Allow rich objects and arrays to be encoded
})) 
app.use(express.static('public'))

app.use(cookieParser())


 export { app }
require('dotenv').config()
const cors = require('cors')
const express = require('express')
const router = require('./routers')
const errorHandler = require('./middlewares/errorhandler')
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(router)
app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
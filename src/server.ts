const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.json());

app.use('/route', () => {console.log('/route hit successfully')})

module.exports = app
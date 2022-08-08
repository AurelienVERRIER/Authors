const express = require('express')
const app = express()
const port = 5000
const authorsRoutes = require('./routes/authors')

app.use('/authors', authorsRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
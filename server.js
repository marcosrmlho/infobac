const express = require('express')
const app = express()
const port = 4000

app.use(express.static('static', {index:['infobac.html']}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
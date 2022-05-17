const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const cors = require('cors')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.json({ limit: '50mb' }))
  server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  server.use(cors())

  server.use(express.static(__dirname, +'public'))

  server.get('*', (req, res) => handle(req, res))

  const PORT = process.env.PORT || 3000

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Read on http://localhost:${PORT}`)
  })
})

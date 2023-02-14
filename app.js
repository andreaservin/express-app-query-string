const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`<h1>Hola ${req.query.nombre ?? 'desconocido'}!</h1>`)
})

app.get('/makers/:nombre', (req, res) => {
    const { nombre } = req.params
    res.send(`<h1>Hola ${nombre.charAt(0).toUpperCase() + nombre.slice(1) ?? 'Desconocido'}!</h1>`)
  })

app.listen(3000, () => console.log('Listening on port 3000!'))

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`Server on port ${3000}`);


const express = require('express')

const app = express()

app.get('/products', (req, res)=>{
    res.send('lista de productos')
})

app.post('/products', (req, res)=>{
    res.send('Creando productos...')
})

app.put('/products', (req, res)=>{
    res.send('Actualizando productos...')
})

app.delete('/products', (req, res)=>{
    res.send('Eliminando un producto...')
})

app.patch('/products', (req, res)=>{
    res.send('Actualizando productos...')
})

app.listen(3000)
console.log(`Server on port ${3000}`);

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/custom', (req, res) => {
    res.status(418).set('x-alexfromsofia', 'Yes').send('Hello World!')
    
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

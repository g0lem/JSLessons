const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html")
})

app.get('/gib', (req, res) => {
    setTimeout(()=>{
        res.send({
            text: 'here you go'
        });
    }, 2000);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
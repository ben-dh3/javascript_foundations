const express = require('express');
const app = express();
const port = 3000;

let counter = 1
app.get('/', (req, res) => {
    res.send('Hello, express!')
});

app.get('/counter', (req, res) => {
    res.send(`${counter}`)
});

app.post('/counter', (req, res) => {
    counter+=1
    res.send(`${counter}`)
});

app.delete('/counter', (req, res) => {
    counter = 1
    res.send(`${counter}`)
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);
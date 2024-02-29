const Thermostat = require('./thermostat');
const express = require('express');
const app = express();
const port = 3000;
const thermostat = new Thermostat()

app.get('/temperature', (req, res) => {
    res.send(`${thermostat.getTemperature()}`)
});

app.post('/up', (req, res) => {
    res.send(thermostat.up())
});

app.post('/down', (req, res) => {
    res.send(thermostat.down())
});

app.delete('/counter', (req, res) => {
    counter = 1
    res.send(`${counter}`)
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);
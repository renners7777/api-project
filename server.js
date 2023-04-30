const express = require('express');
const app = express();
PORT = 8000;

const rappers = {
    '21 savage': {
        "age": 29,
        "birthName": 'Shéyaa Bin Abraham-Joseph',
        "birthLocation": 'London, England'
    },
    'Chance the Rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(rappers)

})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})

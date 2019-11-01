require('dotenv').config();
const express = require('express');
const massive = require('massive')
const app = express();
const { SERVER_PORT, CONNECTION_STRING} = process.env
app.use(express.json());
const ctrl = require('./controller');

app.get('/api/inventory', ctrl.getAll)

app.post('/api/inventory', ctrl.addProduct)

app.delete('/api/inventory/:id', ctrl.deleteProduct)


massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('database connected')
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} bottles of beer on the wall.`))
})
.catch(err => {
    console.log((err))
})
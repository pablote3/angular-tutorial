const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Hello from Express!')
});

app.listen(port, (error) => {
    console.log(`server is listening on $(port)`)
});

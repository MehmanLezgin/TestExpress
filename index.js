const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This is me');
})

app.listen(process.env.PORT, () => {
    console.log('App is running!');
})
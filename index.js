const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Yes yes yes RESPONSE!!!');
})

app.listen(5000, () => {
    console.log('App is running!');
})
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Yes yes yes RESPONSE!!! aaa');
})

app.listen(process.env.PORT, () => {
    console.log('App is running!');
})
const express = require('express');

const apps = express();

apps.get('/', (req, res) => {
    
    res.send('This is me');
})
console.log('hi');

apps.listen(process.env.PORT, () => {
    console.log('App is running!');
})
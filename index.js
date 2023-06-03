const express = require('express');

const apps = express();

apps.get('/', (req, resu) => {
    const a = 123+567;
    resu.send('This is me '+a);
    console.log(111);
    // res.send('This is me');
})
console.log('hi');

apps.listen(process.env.PORT, () => {
    console.log('App is running!');
})
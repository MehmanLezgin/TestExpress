const express = require('express');

const apps = express();

apps.get('/', (req, resu) => {
    const a = 123+567*23.32;
    resu.send('This is me '+a+' and '+(a/10));
    console.log(111);
    // res.send('This is me');
})
console.log('hi');

apps.listen(process.env.PORT, () => {
    console.log('App is running!');
})
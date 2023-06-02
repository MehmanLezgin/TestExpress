import { express } from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Yes yes yes RESPONSE!!!');
})

app.listen(3000, () => {
    console.log('App is running!');
})
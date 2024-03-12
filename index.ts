import express from 'express';
import dotenv from 'dotenv';
import fibonacci from './fibonacci';

dotenv.config()

//Server Stuff
const server = express();
const port = process.env.PORT
server.use(express.json());
server.listen(port, () => {
    console.log(`listening to port ${port}`);
})

server.get('/fibonacci/:upto', (req,res) => {
    const upto = req.params.upto;
    res.send(`Fibonacci for ${upto} is ${fibonacci(parseInt(upto))}`);
})
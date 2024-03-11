import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

//Server Stuff
const server = express();
const port = process.env.PORT
server.use(express.json());
server.listen(port, () => {
    console.log(`listening to port ${port}`);
})
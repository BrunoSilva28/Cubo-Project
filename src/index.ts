import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { participantRouter } from './routes/participantRouter';

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use("/participants", participantRouter);

const server = app.listen(process.env.PORT || 3003, ()=> {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is runnign in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server`);
    };
});
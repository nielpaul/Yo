import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './routes/auth.js';

const env = dotenv.config()

/* CONFIGURATIONS */
const app = express();
app.use(express.json());
app.use(cors());
 
/* ROUTES */
app.use("/users", userRouter);

/* MONGOOSE SETUP */
const PORT = process.env.REACT_APP_PORT || 6001;

mongoose.connect(process.env.REACT_APP_MONGO_URL, {

  useNewUrlParser: true,
  useUnifiedTopology: true,

}).then(() => {
  app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
})
.catch((error) => console.log(`${error} did not connect`));

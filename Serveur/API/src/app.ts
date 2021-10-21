import express from 'express';
import mongoose from "mongoose";
import rooter from './Rootes';


const app = express();
const port = 3001;
const mongoURI: string = process.env.MONGO_URI;


app.use('/',rooter);
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

import express from 'express';
import mongoose from "mongoose";


const app = express();
const port = 3001;
const mongoURI: string = process.env.MONGO_URI;
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

//Conexion mongo


mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

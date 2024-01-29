require('dotenv').config();
const express = require('express');
const port = 4000;
const app = express();
const authRoutes = require('./Routes/AuthRoutes');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const url = process.env.MONGO_URI;
app.get('/',(req,res)=>{
    res.send('Hiii');
})
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started Successfully at port 4000");
  }
});
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);






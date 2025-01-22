const express = require("express");
const app=express();
const cors = require("cors");
const dotenv = require("dotenv");
const mainRouter=require("./routes/contact.route")
const connectDb=require("./config/ConnectDb")



//dotenv configuartion
dotenv.config();
connectDb();

//rest object
app.use(express.json());

//midlewares
app.use(cors());


//routes
app.use("/api/contact", mainRouter);

app.get('/', (req,res) => {
    res.send('server is running')
})

//port
const PORT = process.env.PORT || 8082;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});

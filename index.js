const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const helmet = require("helmet")
const dotenv = require("dotenv")
const cors = require("cors");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const app = express();


dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("Connected to MONGODB");
})


app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("common"));


app.use("/user",userRoute);
app.use("/auth",authRoute);
app.listen(3000,()=>{
    console.log("Backend is running")
})

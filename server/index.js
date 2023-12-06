require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect("mongodb+srv://aefgh4805:8Y2JplZHJOkQ3AgV@cluster0.6lsbucv.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000, () => console.log('Server running on port 3000'));

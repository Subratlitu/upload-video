const express = require('express');
const mongoose = require('mongoose');
const path=require('path')
const app = express();
const cors=require('cors')
const bodyParser = require('body-parser');
const route = require('./routes/route');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb+srv://subrat1234:litu1234@cluster0.h1cfx.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected..."))
.catch ( err => console.log(err) )


app.use("/api/v1/media", route);
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(4000, () => {
    console.log("App is running on PORT 4000");
  });
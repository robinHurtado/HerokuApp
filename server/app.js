import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// tutorial : https://www.youtube.com/watch?v=L5Nle1VXYnw 
// https://github.com/babel/example-node-server --> to set babel in production

//connect to DB
mongoose.connect("mongodb://localhost:27017/nutrition", (err) => {
	if (err) console.log(err)
	else console.log("connected to Data Base")
})

// start the app with "npm start" and nodemon will execute coz of package.json
var app = express();

// Middlewares
app.use(bodyParser.json()); // It parses every json that comes in

app.use("/api", routes)

export default app;
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/registers");


const port = process.env.PORT || 8000;

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

//console.log(path.join(__dirname))
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);


app.get("/",(req,res)=>{
    res.render("index")

});

//app.listen(3000);
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
}) 
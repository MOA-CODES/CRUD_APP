const express = require('express');//These are like your imports in java
const dotenv = require('dotenv'); 
const morgan = require('morgan');//morgan helps log requests on console
const bodyparser = require('body-parser'); 
const path = require('path'); // we didnt install path module, its already in built in node applications

const app = express();

dotenv.config({path:'config.env'})//specifying path of .env file
const PORT = process.env.PORT || 8080 //PICKING BTW DEFAULT 8080 or value from config.env file

 //log requests
app.use(morgan('tiny'))

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))  //the bodyparser model use

//set view engine
app.set("view engine", "ejs") //you can either specify ejs/HTML/pug, we imported ejs so we are using it.
//informing express of where our default view engine folder is
//app.set("views", path.resolve(__dirname,"views"))


//load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))



app.get('/',(req,res)=>{
   // res.send("Crud Apllication");
   res.render('index');//render renders the ejs html file
})

app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)})
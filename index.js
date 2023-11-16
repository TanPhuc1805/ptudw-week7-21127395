const express = require("express");
const app = express();
const port = 4000;
const expressHBs=require("express-handlebars");

app.use(express.static(__dirname+"/html"));

app.get("/",(req,res)=>res.sendFile(__dirname+"/html"));

app.engine('hbs',expressHBs.engine({
    layoutDirs: __dirname+"/views/layouts",
    partialDirs: __dirname+"/views/partials",
    extname:"hbs",
    defaultLayout: "layout",
}));
app.get("/",(req,res)=>{
    res.render("index");
})
app.use('/task1.htm',require('./routes/task1Route'));
app.use('/task2.htm',require('./routes/task2Route'));
app.use('/task3.htm',require('./routes/task3Route'));
app.use('/task4.htm',require('./routes/task4Route'));

app.set("view engine","hbs");

app.listen(port,()=>console.log(`Example app listening on port ${port}!`));
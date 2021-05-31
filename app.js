const express=require("express");
const bodyparser=require("body-parser");
const list=require("ejs");

const app=express();
var items=["do something","coding","coding again"];
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

app.get("/",function(req,res){

    res.render("list",{newlistitem:items});
})
app.post("/",function(req,res){
   var item= req.body.newitem;
   items.push(item);
   res.redirect("/");
})

app.listen(3000,function(req,res){
    console.log("server is at 3000 port");
});
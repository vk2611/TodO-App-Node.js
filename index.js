const express=require("express");
const router=express.Router();
const app=express();
var arr=[]
arr.push({id:0,name:"Items"});
var completeArr=[]
var cnt=0;
app.use("/static",express.static("public"));

app.use(express.urlencoded({ extended :true}));

//setting view enginer as embedded js 
app.set("view engine","ejs");

app.get('/',(req,res)=> {
    res.render('todo.ejs',{task:{arr:arr,com:completeArr}});
})
//POST method
app.post('/',(req,res)=>{
    name=req.body.name;
    cnt++;
    arr.push({id:cnt,name:name});
    res.redirect("/");
})
app.get("/remove/:id",(req,res)=>{
    arr=arr.filter(item=>item.id!=req.params.id);
    res.redirect('/');
})
app.get("/completed/:id",(req,res)=>{
    var id=req.params.id;
    var vishal=arr[id];
    console.log(vishal.name);
   if(arr.length>0) completeArr.push({id:vishal.id,name:vishal.name});
   if(arr.length>0) arr=arr.filter(item=>item.id!=req.params.id);
    res.redirect('/');
    
})
app.listen(3000,()=>{
    console.log('server listening to port number');
})
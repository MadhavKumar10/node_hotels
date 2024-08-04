/* /* function add(a,b){
  return a+b;
}
 */

/* let add=function add(a,b){
  return a+b;
} */

//let add=(a,b)=>{return a+b;}
/*let add=(a,b)=>a+b;

(function(){
  console.log('madhav');
})();
let result= add(3,4);
console.log(result); */

/* function callBack(){
  console.log('madhav is calling a callback function')
} */

/* let add = function (a,b,callback){
  let result =a+b;
  console.log('result:'+result);
  callback();
} */

/* add(3,4,function(){
 console.log('inline function');
}); */
/* add(2,3,()=>{
  console.log('shortest way to write a function');
}) */



const express = require('express');
const app=express();
const db=require('./db');
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT=process.env.Port || 3000;

app.get('/',(req,res)=>{
  res.send('Hi how are you doing today, welcome to Our Hotel');
}) 
//importing the router files
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');
//use the routers
app.use('/person',personRoutes)
app.use('/menu',menuItemRoutes)



app.listen(PORT,()=>{
  console.log('listening on port 3000');
});
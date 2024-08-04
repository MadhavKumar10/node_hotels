const express= require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');


router.get('/' , async(req,res)=>{
  try{
    const data=await MenuItem.find();
    console.log('data is fetched');
    res.status(200).json(data);
  }catch(err){
    res.status(500).json({error:'internal server error'});
  }
});

router.post('/', async(req,res)=>{
  try{
  const data=req.body;
  const newMenu = new MenuItem(data);
  const response= await newMenu.save();
  console.log('data is saved');
  res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
});

router.get('/:tasteType',async(req,res)=>{
  try{
    const tasteType=req.params.tasteType;
    if(tasteType=='spicy'|| tasteType=='sweet'|| tasteType=='sour'){
      const response= await MenuItem.find({taste:tasteType});
      console.log('response fetched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error:'not valid tasteType'});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});

  }
});

router.put('/:id', async (req,res)=>{
  try{

    const menuId= req.params.id;
    const menuUpdated =req.body;
    const response= await MenuItem.findByIdAndUpdate(menuId,menuUpdated,{
      new:true,
      runValidators:true
    });

    if(!response){
      res.status(404).json({error:'menu not found'});
    }
    console.log('menu updated');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
});

router.delete('/:id',async(req,res)=>{
  try{
    const menuId= req.params.id;
    const response = MenuItem.findByIdAndDelete(menuId);

    if(!response){
      res.status(404).json({error:'menu not found'});
    }
    console.log('Menu deleted');
    res.status(200).json({message:'menu deleted'});
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});   
  }
})

module.exports=router;
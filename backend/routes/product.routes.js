const router = require("express").Router();
const Product = require("../models/Product");
const mongoose = require('mongoose')





router.post("/",async(req,res)=>{
    try{
        const{title,description,category,price,quantity} = req.body

        const createdProduct = await Product.create({
            title,
            description,
            category,
            price,
            quantity
        });

        res.status(201).json(createdProduct);
    }catch(err){

        if(err.name === "ValidationError"){
            return res.status(400).json({
                message: err.message,
            });
        }

        console.log(err);

    }
});



router.get("/",async(req,res)=>{
    try{
        const allProducts = await Product.find();

        res.json(allProducts);
    }catch(err){
        console.log(err);

    }
});



function checkValidObjectId(req,res,next){
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({
        message: "Id not valid",
      })
    }else{
        next()
    }
}



router.get("/:id",checkValidObjectId, async (req, res) => {
  try {
    const foundProduct = await Product.findById(req.params.id)
    if (!foundProduct) {
      return res.status(404).json({
        message: "Product Not Found",
      });
    }
    res.json(foundProduct);
  } catch (err) {
    console.log(err);
  }
});


router.put("/:id",checkValidObjectId, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators:true
    });
   
    res.json(updatedProduct);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        message: err.message,
      });
    }
    console.log(err);
  }
});


router.delete("/:id",checkValidObjectId, async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(deletedProduct);
  } catch (err) {
    console.log(err);
  }
});




module.exports = router;
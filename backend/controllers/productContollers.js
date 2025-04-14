const productModel=require('../models/productModel');
//GET Product APi

exports.getProducts= async (req,res,next)=>{
 const products=await productModel.find({});

  
 
 res.json({
    sucess:true,
    products 
  })

}
//GET Single Product API
exports.getSingleProducts=async(req,res,next)=>{
  try {
    console.log(req.params.id,'ID');
    const singleProducts=await productModel.findById(req.params.id);
     res.json({
       sucess:true,
       singleProducts
     })
  } catch (error) {
    res.status(404).json({
      sucess:false,
      message:'Not get the correct id'
    })
  }


}
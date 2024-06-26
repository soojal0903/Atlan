const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");


//Create Model--Admin
exports.createProduct = catchAsyncError(async(req,res,next)=>{
   const product = await Product.create(req.body);
   
   res.status(201).json({
      success:true,
      product
   })
})

//Get all products
exports.getAllProducts = catchAsyncError(async (req,res,next)=>{
   const productsCount = await Product.countDocuments();

   const apiFeature = new ApiFeatures(Product.find(),req.query);
   const products = await apiFeature.query;


   res.status(200).json({
      success:true,
      products,
      productsCount,
   });
})

//update product

exports.updateProduct = catchAsyncError(async (req,res,next)=>{
   let product = await Product.findById(req.params.id);

   if(!product)
   {
      return next(new ErrorHandler("Model not found",404));
   }

   product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false});

   res.status(200).json({
      success:true,
      product
   })
})

//Delete Product

exports.deleteProduct = catchAsyncError(async (req,res,next)=>{
   const product = await Product.findById(req.params.id);

   if(!product)
   {
      return next(new ErrorHandler("Model not found",404));
   }

   await product.deleteOne();

   res.status(200).json({
      success:true,
      message:"Model deleted successfully"
   })
})

//Get product details
exports.getProductDetails = catchAsyncError(async(req,res,next)=>{
   const product = await Product.findById(req.params.id);

   if(!product)
   {
      return next(new ErrorHandler("Model not found",404));
   }

   res.status(200).json({
      success:true,
      product,
   })
})
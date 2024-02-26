const router = require('express').Router();
const Product = require('../models/Product');

//create
router.post('/create/new',async (req,res)=>{
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }

})

//get alll the products with search

router.get('/',async (req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;
        if(qNew){
            products = await Product.find().sort({createAt: -1}).limit(1);

        }else if(qCategory){
            products = await Product.find({
                categories:{
                    $in:[qCategory]
    
            },
        });
        }
        else{
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
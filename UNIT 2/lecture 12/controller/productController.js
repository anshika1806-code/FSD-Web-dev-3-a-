
// const products=require("../data/data.js")



// const getProducts=(req,res)=>{  //Read
//     res.json(products);
// }
// const getProductById=(req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     const result = products.find((product) => product.id === id);
//     if (result == undefined) {
//         res.status(404).json({ success: false, message: "Product Not Found" });
//     }
//     res.json({ success: true, result });
// }
// const createProduct=(req,res)=>{
//     const product=req.body;
//     products.push({id:products.length+1,...product});
//     res.json({success:true,product});
// }

// const updateProduct=(req,res)=>{
//     const id=req.params.id;
//     const product=req.body;
//     const result=products.find((product)=>product.id==id);
//     if(result==undefined){
//         res.status(404).json({success:false,message:"Product Not Found"});
//     }
//     result.name=product.name;
//     result.category=product.category;
//     result.price=product.price;
//     res.json({success:true,result});
// }

// const deleteProduct=(req,res)=>{
//     const id=req.params.id;
//     const result=products.find((product)=>product.id==id);
//     if(result==undefined){
//         res.status(404).json({success:false,message:"Product Not Found"});
//     }
//     const index=products.indexOf(result);
//     products.splice(index,1);
//     res.json({success:true,result});
// }
// module.exports={getProducts,getProductById,createProduct,updateProduct,deleteProduct}

const products = require("../data/data.js");

const getProducts = (req,res)=>{  // read operation
    res.json(products);
}

const getProductById = (req,res)=>{  // read operation
    const id = req.params.id;
    console.log(id);
    const result = products.find((product)=>product.id==id);
    res.json(result)
    if (result==undefined){
        res.status(404).json({success:false,message:"Product not found"});
    }
    res.json({success:true,message:"Product found"});
}

const addProduct = (req,res)=>{  // create operation
    const product = req.body;
    products.push(product);
    res.json({success:true,product});
}

const updateProduct = (req,res)=>{  // update operation
    const id = req.params.id;
    const product = req.body;
    const result = products.find((product)=>product.id==id);
    if (result==undefined){
        res.status(404).json({success:false,message:"Product not found"});
    }
    result.name = product.name;
    result.price = product.price;
    res.json({success:true,result});
}

const deleteProduct= (req,res)=>{  // delete operation
    const id = req.params.id;
    const result = products.find((product)=>product.id==id);
    if (result==undefined){
        res.status(404).json({success:false,message:"Product not found"});
    } 
    const index = products.indexOf(result);
    products.splice(index,1);
    res.json({success:true, result});
}

module.exports = {getProducts,getProductById,addProduct,updateProduct,deleteProduct};
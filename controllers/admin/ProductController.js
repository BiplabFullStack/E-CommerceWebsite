const {saveProduct} =require('../../models/Products')

exports.getAddProductPage =(req, res)=>{
    const viewsData ={
        pageTitle: "Add Products"
    }
    res.render('AddProduct.ejs', viewsData)
}

exports.postAddProductPage =(req, res)=>{
    const product ={
        title:req.body.title,
        image:req.body.image,
        price:req.body.price,
        describtion:req.body.describtion
    };
    saveProduct(product)
     res.redirect('/')
}
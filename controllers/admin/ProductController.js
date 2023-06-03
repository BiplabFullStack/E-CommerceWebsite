const {saveProduct} =require('../../models/Products')

exports.getAddProductPage =(req, res)=>{
    const viewsData ={
        pageTitle: "Add Products"
    }
    res.render('AddProduct.ejs', viewsData)
}

exports.postAddProductPage =(req, res)=>{
    const product ={
        title:req.body.title
    };
    saveProduct(product)
     res.redirect('/')
}
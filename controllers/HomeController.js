const {fetchAllProducts} = require('../models/Products')

exports.getHomePage =(req, res)=>{
    fetchAllProducts((products)=>{
        const viewsData ={
            products, // and we can use due to key and value are the same thing  --> product,
            pageTitle:'HomePage - ProductList'
        }
        //res.sendFile(path.join(rootDir,'views','homepage.html'))
        res.render('homepage.ejs', viewsData)
    })
    
}
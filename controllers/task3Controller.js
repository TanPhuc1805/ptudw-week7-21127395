const controller={};

controller.show=(req,res)=>{
   let {categories,products} = require("../data");
    let productList = req.query.category ? products.filter((item)=> item.category ==req.query.category):products;

    res.render("task3",{categories,products:productList});
};

module.exports=controller;
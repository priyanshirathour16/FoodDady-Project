const mongoose = require("mongoose");


const food_cat_Schemaa = new mongoose.Schema({
    category_name:String,
});

const  food_cat_model  = new mongoose.model("food_catergory" , food_cat_Schemaa);
module.exports = food_cat_model;
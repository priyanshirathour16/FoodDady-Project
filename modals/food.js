const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    category_name:String,
    name:String,
    img:String,
    option:Object,
    description:String
})
const foodModel = new mongoose.model("samplefood" , foodSchema);

module.exports = foodModel;
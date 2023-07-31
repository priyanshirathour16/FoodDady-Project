const foodModel = require("./modals/food");
const food_item = require("./foods/food_item");
const food_category_model = require("./modals/food_cate");
const food_varity = require("./foods/food_category");

const  foodSend = async () =>{
    try{
        await food_category_model.deleteMany({});
        await foodModel.deleteMany({});
        const data = await foodModel.insertMany(food_item);
        const category = await food_category_model.insertMany(food_varity);
        global.food__items = data;
        global.food__category = category;
        // console.log(food__category);

        
        // console.log(category);
        // console.log(data);
    }
    catch(err){
        console.log(err);
    }
    
}
module.exports = foodSend;
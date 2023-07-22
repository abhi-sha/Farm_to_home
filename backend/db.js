const mongoose = require('mongoose');


const mongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://20103087:foodsite@cluster0.p5vwdnd.mongodb.net/foodsite?retryWrites=true&w=majority');
    console.log('Connected to the database !! ');
    let fetched_data = mongoose.connection.db.collection("food_items");
    let data=await fetched_data.find({}).toArray() 
    global.food_items=data;
    let fetched_data2=mongoose.connection.db.collection("food_category");
    global.food_category=await fetched_data2.find({}).toArray()
  
  } catch (error) {
    console.log('err: ', error);
    process.exit();
  }
};

module.exports=mongoDB;


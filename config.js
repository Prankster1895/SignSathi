const mongoose=require("mongoose")

const connect=mongoose.connect(process.env.MONGO_URL)
connect.then(()=>{

    console.log("Database connected successfully")
})
.catch(() => {
    console.log("Database cannot be connected successfully");
})
.catch(()=>{
    console.log("Database cannot be connected successfully")
})
const LoginSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    Mob:{
        type:String,
        required: true 
    },
    Org:{
        type:String,
        required: true
    },
    Pos:{
        type:String,
        required: true
    }
    
});
const collection= new mongoose.model("users",LoginSchema);
module.exports=collection;

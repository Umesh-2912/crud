import Mongoose  from "mongoose";

const userSchema= new Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     img: {
        type: String,
        required: true,
  },
    summary:{
        type:String,
        required:true
    }
})

export default Mongoose.model("users",userSchema)
import User from "../model/userModel.js"

export const create=async(req,res)=>{
    try {
        const userData = new User( req.body);
        const {img} = userData;
    
        const userExist = await User.findOne({img})
        if(userExist){
            return res.status(400).json({message :"User already exists."})
        }
        const saveUser=await userData.save();
        res.status(200).json(saveUser); 
        
    } catch (error) {
        res.status(500).json({error:"Internal Server error."});
    }
}

export const fetch=async (req,res)=>{
    try{
       const users=await User.find();
       if(users.lenght===0){
        return res.status(404).json({message: "User not Found."});
       }
       res.status(200).json(users);
    }catch(error){
        res.status(500).json({error:"Internal Server Error"});
    }
};

export const update= async (req,res)=>{
  try {
        const id=req.params.id;
        const  userExist= await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({ message:"User Not found."});
        }
        const updateUser=await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json({error:"Internal Server Error"})
  }  
};

export const deleteUser=async(req,res)=>{
    try {
        const id=req.params.id;
        const  userExist= await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({ message:"User Not found."});
        }

        await User.findByIdAndDelete(id);
        res.status(201).json({message :"User Deleted Successfully"})
        
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
        
    }
}
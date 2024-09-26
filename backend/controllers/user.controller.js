import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try{
        const loggedInUserId = req.user.id;

        const filteredUsers = await User.find({_id:{ $ne:loggedInUserId }}).select("-password");
        res.status(200).json(filteredUsers);
    }catch(error){
        console.error("Error in getUsersForSidebar",error);
        res.status(500).json({error:"internal server error"});
    }
}
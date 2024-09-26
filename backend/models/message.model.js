import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
   senderId: {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'User'
   },
    receiverId:{
       type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    message:{
       type: String,
        required: true,
    }
    //createdAt, updatedAt
}, { timestamps: true });
const message = mongoose.model('Message', messageSchema);
export default message;
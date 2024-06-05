import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
    content: String,
    client_offset: {
        type: String,
        unique: true,
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }, // Add reference to User model
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

export default Message;

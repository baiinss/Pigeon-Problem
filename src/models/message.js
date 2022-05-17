const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({ 
    org_id: { type: String, required: true, immutable: true },
    channel_id: { type: String, required: true, immutable: true },
    user_id: { type: String, required: true, immutable: true },
    message_id: { type: String, required: true, immutable: true },
    created_at: { type: Date, required: true, immutable: true },
    content: { type: String, required: false },
    edited: { type: Boolean, required: true, default: false },
    file_id: { type: String, required: false },
    file: { type: Boolean, required: true, default: false },
    hide: { type: Boolean, required: true, default: false },
})

module.exports = model('Message', MessageSchema);
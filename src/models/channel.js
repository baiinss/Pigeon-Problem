const { Schema, model } = require('mongoose');

const ChannelSchema = new Schema({ 
    name: { type: String, required: true },
    description: { type: String, required: false },
    picture: { type: String, required: false },
    org_id: { type: String, required: true, immutable: true },
    created_at: { type: Date, required: true, immutable: true },
    channel_id: { type: String, required: true, immutable: true },
    users: [{ 
        user_id: String, 
        banned: { type: Boolean, default: false }, 
        admin: { type: Boolean, default: false },
        joined: { type: Boolean, default: false },
    }],
    public: { type: Boolean, required: true},
    banned: { type: Boolean, required: true, default: false },
});

module.exports = model('Channel', ChannelSchema);
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({ 
    name: { type: String, required: true },
    pfp: { type: String, required: false },
    email: { type: String, required: true },
    key: { type: String, required: true },
    created_at: { type: Date, required: true, immutable: true },
    user_id: { type: String, required: true, immutable: true },
    org_id: { type: String, required: true, immutable: true },
    blocked: [{ user_id: String}],
    banned: { type: Boolean, required: true, default: false },
    org_moderator: { type: Boolean, required: true, default: false },
});

module.exports = model('User', UserSchema);
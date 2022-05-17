const { Schema, model } = require('mongoose');

const FileSchema = new Schema({ 
    org_id: { type: String, required: true, immutable: true },
    user_id: { type: String, required: true, immutable: true },
    file_id: { type: String, required: true, immutable: true },
    created_at: { type: Date, required: true, immutable: true },
    file: { data: Buffer, contentType: String },
    file_name: { type: String, required: true },
    hide: { type: Boolean, required: true, default: false },
});

module.exports = model('File', FileSchema);
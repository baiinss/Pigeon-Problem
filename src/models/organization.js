const { Schema, model } = require('mongoose');

const OrganizationSchema = new Schema({ 
    name: { type: String, required: true },
    location: { type: String, required: false },
    key: { type: String, required: true },
    org_id: { type: String, required: true, immutable: true },
    created_at: { type: Date, required: true, immutable: true },
    banned: { type: Boolean, required: true, default: false },
});

module.exports = model('Organization', OrganizationSchema);
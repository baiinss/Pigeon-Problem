const mongoose = require('mongoose');
const { v4 } = require("uuid")
const { User, Organization, Channel, Message, File } = require('./models');

function generateId(model, key, generationFunction) {
    return new Promise((resolve, reject) => {
        var generatedId = generationFunction()

        model.findOne({[key]: generatedId}, (err, result) => {
            if (err) {
                reject(err)
            } else if (result) {
                resolve(generateId(model, key, generationFunction))
            } else {
                resolve(generatedId)
            }
        })
    })
}

function generateUserId() {
    return generateId(User, 'user_id', v4)
}

function generateChannelId() {
    return generateId(Channel, 'channel_id', v4)
}

function generateOrgId() {
    return generateId(Organization, 'org_id', v4)
}

function generateFileId() {
    return generateId(File, 'file_id', v4)
}

function generateMessageId() {
    return generateId(Message, 'message_id', v4)
}

function generateOrgKey() {
    return crypto.randomBytes(100).toString('base64')
}

module.exports = {
    generateUserId,
    generateChannelId,
    generateOrgId,
    generateFileId,
    generateMessageId,
    generateOrgKey
}
const { generateOrganizationId, generateOrgKey } = require('../unique.js');
const express = require('express');
const { missing_key, invalid_key, saltRounds } = require('../static.json');
const { Organization } = require('../models');
const { admin_key } = require('../../server-config.json');
const bcrypt = require('bcrypt');

const router = express.Router();

router.use((req, res, next) => {
    let { key } = req.body;

    if (!key) {
        res.status(401).send(missing_key);
    } else if (key !== admin_key) {
        res.status(401).send(invalid_key);
    } else {
        next();
    }
});

router.post('/organization/create', async (req, res) => {
    let { name, location } = req.body;
    let org_id = generateOrganizationId();
    let created_at = new Date();
    let key = bcrypt.hash(generateOrgKey(), saltRounds);
    
    let newOrganization = new Organization({
        name,
        location,
        key,
        org_id,
        created_at
    });

    newOrganization.save(function(err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({org_id, key});
        }
    });
});

router.post('/organization/ban', async (req, res) => {
    let { org_id } = req.body;

    Organization.findOneAndUpdate({org_id}, { banned: true }, { new: true } , (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

router.get("/organization/:org_id", async (req, res) => {
    let { org_id } = req.params;

    Organization.findOne({org_id}, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
})
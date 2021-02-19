const express = require("express");

const Resources = require("./model.js");

const router = express.Router();

// GET all resources
router.get("/", (req, res) => {
    Resources.find()
        .then((resources) => {
            res.json(resources);
        })
        .catch(() => {
            res.status(500).json({
                message: "Failed to get resources"
            });
        });
});

// POST new resource
router.post("/", (req, res) => {
    const resourceData = req.body;

    Resources.create(resourceData)
        .then((resource) => {
            res.status(201).json(resource);
        })
        .catch(() => {
            res.status(500).json({
                message: "Failed to create new resource"
            });
        });
});


module.exports = router;
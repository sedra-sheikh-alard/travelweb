const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { name, email, message } = req.body;


    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required!",
        });
    }

    console.log("New message:");
    console.log(name, email, message);

    res.json({
        success: true,
        message: "Message received successfully!",
    });
});

module.exports = router;
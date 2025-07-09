// const express = require('express');
// const aiController = require("../controller/ai.controller")

// const router = express.Router();


// router.get("/get-response", aiController.getResponse)//Aquiring getResponse from controller.

// module.exports = router;


const express = require('express');
const aiController = require("../controllers/ai.controller")

const router = express.Router();


router.post("/get-review", aiController.getReview)


module.exports = router;    
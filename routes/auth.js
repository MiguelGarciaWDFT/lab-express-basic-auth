const express = require("express")
const router = express.Router()

const authController = require("../Controllers/authController")

router.get("/signup", authController.viewRegister)
router.post("/signup", authController.register)

module.exports = router
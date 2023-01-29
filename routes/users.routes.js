const express = require('express');
const { getAllUsers, getRandomUser, saveUser, updateUser, updateUsers, deleteUser } = require('../controllers/users.controller');

const router = express.Router();

router.get("/random", getRandomUser)
router.get("/all", getAllUsers)
router.post("/save", saveUser)
router.patch("/bulk-update", updateUsers)
router.delete("/delete", deleteUser)

module.exports = router;
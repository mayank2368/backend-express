const express = require("express");
const router = express.Router();
const {
  getContact,
  getAContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contact-controllers");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

router.route("/").get(getContact).post(createContact);

router.route("/:id").get(getAContact).put(updateContact).delete(deleteContact);

module.exports = router;

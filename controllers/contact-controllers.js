const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

//@desc Get a particular contact
//@route GET /api/contacts/:id
//@access public

const getAContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get contact of ${req.params.id}` });
});

//@desc Create a contact
//@route POST /api/contacts/:id
//@access public

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(200).json({ message: "Create contacts" });
});

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
});

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
});

module.exports = {
  getContact,
  getAContact,
  createContact,
  updateContact,
  deleteContact,
};

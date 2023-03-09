//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Get a particular contact
//@route GET /api/contacts/:id
//@access public

const getAContact = (req, res) => {
  res.status(200).json({ message: `get contact of ${req.params.id}` });
};

//@desc Create a contact
//@route POST /api/contacts/:id
//@access public

const createContact = (req, res) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  } else {
    res.status(200);
  }
  res.status(200).json({ message: "Create contacts" });
};

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
};

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
};

module.exports = {
  getContact,
  getAContact,
  createContact,
  updateContact,
  deleteContact,
};

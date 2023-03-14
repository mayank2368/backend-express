const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true],
    },

    email: {
      type: String,
      required: [true],
      unique: [true, "Email already taken"],
    },

    password: {
      type: String,
      required: [true],
      unique: [true, "Please enter the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema({
  name: {
    type: String,
    retuired: true,
  },
  email: {
    type: String,
    retuired: true,
  },
  password: {
    type: String,
    retuired: true,
  },
});

const FormDataModel = mongoose.model("log_reg_form", FormDataSchema);

module.exports = FormDataModel;

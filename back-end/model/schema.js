const { model, Schema } = require("mongoose");

const UserScheme = new Schema({
  text: String,

  isDone: Boolean, default:false ,

  createdDate: Date,
});

const UserModel = model("User", UserScheme);

module.exports = UserModel;

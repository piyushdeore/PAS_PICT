import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = mongoose.Schema({
  email: {
    type: String,
    value: "pas.gid14@gmail.com",
  },
  password: {
    type: String,
    value: "$2a$10$s8Tt.yfkyu8nZ/AhtG/yUO8x0lbjV7OWslSuD32azkY29nlxY7fgC",
  },
});

// Methods which leave on the instance i.e Instance methods
// i.e. user.<method_name>
adminSchema.methods.matchPassword = function (enteredPassword) {
  const user = this;
  return bcrypt.compareSync(enteredPassword, user.password);
};

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;

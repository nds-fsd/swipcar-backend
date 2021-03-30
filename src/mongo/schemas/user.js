const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    direccion: { type: String, required: true },
    phone: { type: String, required: true },
    url: { type: String, required: true },
    cars: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CarProfile', required: true }]
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

schema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

schema.methods.comparePassword = (password) => {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", schema);

module.exports = User;

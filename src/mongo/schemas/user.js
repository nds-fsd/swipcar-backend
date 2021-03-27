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
    // cars: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CarProfile', required: true }]
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);
/* Secure password:
// esta funcion se ejecuta "antes" de guardar cualquier usuario en Mongo
schema.pre("save", (next) => {
  const user = this;

  // si no se ha cambiado la contraseña, seguimos
  if (!user.isModified("password")) return next();

  // brcypt es una libreria que genera "hashes", encriptamos la contraseña
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      // si no ha habido error en el encryptado, guardamos
      user.password = hash;
      next();
    });
  });
});

schema.methods.comparePassword = (password) => {
  return bcrypt.compareSync(password, this.password);
};
*/

const User = mongoose.model("User", schema);

module.exports = User;

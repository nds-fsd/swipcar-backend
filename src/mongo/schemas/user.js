const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

// const tecnologia = [
//   "Climatizador",
//   "Asistente de arranque en pendiente (Evita que el vehículo retroceda en pendiente)",
//   "Navegación en pantalla (vía teléfono móvil)",
//   "Sensor de aparcamiento trasero",
//   "Bluetooth",
//   "Apple Car Play / Android Auto",
//   "Conexión USB",
//   "Control de crucero",
//   "Equipo de audio digital",
//   "Pantalla táctil de 7",
//   "Tablero de instrumentos digital y analógico",
// ];

//esta funcion se ejecuta "antes" de guardar cualquier usuario en Mongo
schema.pre("save", function (next) {
  const user = this;

  //si no se ha cambiado la contraseña, seguimos
  if (!user.isModified("password")) return next();

  //brcypt es una libreria que genera "hashes", encriptamos la contraseña
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      //si no ha habido error en el encryptado, guardamos
      user.password = hash;
      next();
    });
  });
});

schema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", schema);

module.exports = User;

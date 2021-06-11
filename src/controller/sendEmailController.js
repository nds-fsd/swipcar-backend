const { User } = require('../mongo');
const { Provider } = require('../mongo');
const { RentingOffer } = require('../mongo');
const mailer = require('../mailer');


exports.signup = (req, res) => {
  // const data = req.body;
  
  const data = {
    email: 'agugoka@gmail.com', //! Destinatario EMAIL
    fullName: 'Agustín Gómez' //! Destinatario NAME
  };
  const html = '<div>{{email, fullName}}</div>';
  mailer.sendSignUpEmail(data, data.email).then((response) => {
    // usual response
    res.status(200).json();
  });
  
};

// exports.findOne = (req, res) => {
//   const { id } = req.params;
//   Brand.findById(id)
//     .then((brand) => {
//       res.status(200).json(brand);
//     })
//     .catch((error) => {
//       res.status(500).json(error);
//     });
// };

// exports.create = (req, res) => {
//   const data = req.body;
//   const newBrand = new Brand(data);
//   newBrand
//     .save()
//     .then((brand) => {
//       res.status(200).json(brand);
//     })
//     .catch((error) => {
//       res.status(500).json(error);
//     });
// };

// exports.update = (req, res) => {
//   const { id } = req.params;
//   const data = req.body;
//   Brand.findByIdAndUpdate(id, data)
//     .then((brand) => {
//       res.status(200).json(brand);
//     })
//     .catch((error) => {
//       res.status(500).json(error);
//     });
// };

// exports.delete = (req, res) => {
//   const { id } = req.params;
//   Brand.findByIdAndRemove(id)
//     .then((brand) => {
//       res.status(200).json(brand);
//     })
//     .catch((error) => {
//       res.status(500).json(error);
//     });
// };

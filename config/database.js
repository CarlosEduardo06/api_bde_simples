const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = process.env.URL_DB;

mongoose
  .connect(url, {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
  })
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((err) => {
    console.log(`Erro ao conectar ao mongoDB:
    ${err.message}`);
  });

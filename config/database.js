const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://calixtoreis06:123@cluster0.4lvbo.mongodb.net/bde?retryWrites=true&w=majority&appName=Cluster0",
    // "mongodb+srv://calixtoreis06:123@cluster0.4lvbo.mongodb.net/bde",
    {
      serverApi: { version: "1", strict: true, deprecationErrors: true },
    }
  )
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((err) => {
    console.log(`Erro ao conectar ao mongoDB:
    ${err.message}`);
  });

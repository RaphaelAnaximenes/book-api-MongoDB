import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Erro de conexão:", error);
});

db.once("open", () => {
  console.log("Conexão concluída com sucesso");
});

export default db;

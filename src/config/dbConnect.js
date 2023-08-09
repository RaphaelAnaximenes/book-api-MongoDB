import mongoose from "mongoose";

mongoose.connect("<string connect>");

const db = mongoose.connection;


db.once("open", () => {
    console.log("Conexão concluída com sucesso");
});

db.on("error", (error) => {
    console.error("Erro de conexão:", error);
});
export default db;
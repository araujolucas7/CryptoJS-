const express = require("express");
const CryptoJS = require("crypto-js");

const app = express();
app.use(express.json());

// Rota para criptografar uma mensagem
app.post("/encrypt", (req, res) => {
  const { message, key } = req.body;

  if (!message || !key) {
    return res.status(400).send({ error: "Message and key are required" });
  }

  const encrypted = CryptoJS.AES.encrypt(message, key).toString();
  res.send({ encrypted });
});

// Rota para descriptografar uma mensagem
app.post("/decrypt", (req, res) => {
  const { encrypted, key } = req.body;

  if (!encrypted || !key) {
    return res.status(400).send({ error: "Encrypted text and key are required" });
  }

  const decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
  res.send({ decrypted });
});

// Porta padrão do Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

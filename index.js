const express = require("express");
const apoo = express();

apoo.get("/teste", (req, res) => {
  return res.json({ helo: "Mundos como vai" });
});

apoo.listen(3333);

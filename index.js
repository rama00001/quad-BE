const express = require("express");
const router = require("./routes/router");
const cors = require("cors");

const PORT = 8000;
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
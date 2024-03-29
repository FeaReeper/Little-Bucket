const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

require("dotenv").config();
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    methods: ["POST", "GET"],
    origin: ["https://little-bucket.vercel.app"],
    credentials: true,
  })
);


app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json("Hello");
});
const AllUserRoutes = require("./routes/user.routes");
AllUserRoutes(app);

const AllBucketRoutes = require("./routes/bucket.routes");
AllBucketRoutes(app);

const AllKidRoutes = require("./routes/kid.routes");
AllKidRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));

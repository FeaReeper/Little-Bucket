const express = require("express");
const app = express();
const cors = require("cors")
const cookieParser = require('cookie-parser')

require("dotenv").config()
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({credentials:true, origin:'http://localhost:5173'}))

const AllUserRoutes = require("./routes/user.routes");
AllUserRoutes(app);

const AllMovieRoutes = require("./routes/movie.routes")
AllMovieRoutes(app)
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));

const express = require("express");
const methodOverride = require("method-override");
require("dotenv").config();

const breadRoutes = require("./controllers/bread");

const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use("/breads", breadRoutes);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`listening to the ${PORT}...`));

const express = require("express");
const methodOverride = require("method-override");
require("dotenv").config();
const mongoose = require("mongoose");

const breadRoutes = require("./controllers/bread");

const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Routes
app.use("/breads", breadRoutes);

// db connection
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT;

app.listen(PORT, console.log(`listening to the ${PORT}...`));

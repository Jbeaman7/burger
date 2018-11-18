const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./controllers/burgers_controller");
const app = express();

const PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log("Server running on PORT: " + PORT);
})
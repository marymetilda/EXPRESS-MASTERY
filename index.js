import express from "express";
import path, { join } from "path";
import route from "./routes/route.js";
// import userCredentials from "./middlewares/logs.js";
// import products from "./product.js";
// import students from "./routes/student.js";
const app = express();

// Route Params
// ecom/products/iphone/:iphoneId

// app.get("/product/order/:day/:month/:year", (req, res) => {
//   const { day, month, year } = req.params;
//   res.send(`Product was ordered on: ${day}/ ${month}/ ${year}`);
// });

// app.param(name, callback)

// app.param("id", (req, res, next, id) => {
//   console.log(`id: ${id}`);
//   next();
// });

// app.get("/user/:id", (req, res) => {
//   console.log("This is User ID Path");
//   res.send("Response ok");
// });

// controllors
// app.use("/sudents", students);

// Query String ? &
// app.get("/product", (req, res) => {
//   const { category, id } = req.query;

//   res.send(`Product Category: ${category} & Product ID: ${id}`);
// });

// console.clear();

// app.use(userCredentials);

// app.get("/", (req, res) => {
//   res.send("<h1>Hello Adming</h1>");
// });
// app.get("/about", (req, res) => {
//   res.send("<h1>About section</h1>");
// });
// app.get("/contact", (req, res) => {
//   res.send("<h1>contact page</h1>");
// });

// app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(process.cwd(), "./public/index.html"));
// });

app.set("view engine", "ejs");
// app.use(express.static(join(process.cwd(), "public")));

app.use("/", route);

app.listen(8000, () => console.log("Server Up!"));

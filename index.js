// Create Folder
// npm init -y
// npm install express
// Create instance express
// provided port :8000
// Basic Route /

import express from "express";
import students from "./routes/student.js";
import teachers from "./routes/teachers.js";

const app = express();

// Basic Routing
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to home</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>ABOUR 😶‍🌫️</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Page</h1>");
// });

// HTTP METHODS
// GET 👉 Retrive Data
// POST 👉 Create/Insert Data
// PUT 👉 Completely Update Data
// PATCH 👉 Partially Update Data
// DELETE 👉 Delete Data
// ALL 👉 Any HTTP Request Method

// String Pattern Path
// app.get("/ab?cd", (req, res) => {
//   res.send("If the user hit (acd) or (abcd) then this will run.");
// });

// Regex
// app.get(/x/, (req, res) => {
//   res.send("If the path includes (X) this code will work");
// });

// Regex (strict)
// users/12345
// app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
//   res.send("Working");
// });

// app.get("/products/iphone", (req, res) => {
//   res.send("This code will only run if you provide /products/iphone");
// });

// app.get("/single-cb", (req, res) => {
//   res.send("Single callback");
// });

console.clear();

// double callback function

// app.get(
//   "/double-cb",
//   (req, res, next) => {
//     console.log("First Callback");
//     next();
//   },
//   (req, res) => {
//     res.send("Second Callback");
//   }
// );

//array of callback functions

// const cb1 = (req, res, next) => {
//   console.log("First Callback");
//   next();
// };
// const cb2 = (req, res, next) => {
//   console.log("Second Callback");
//   next();
// };
// const cb3 = (req, res) => {
//   console.log("Third Callback");
//   res.send("Array of Callbacks");
// };

// app.get("/array-cb", [cb1, cb2, cb3]);

// const cb1 = (req, res, next) => {
//   console.log("First Callback");
//   next();
// };

// const cb2 = (req, res, next) => {
//   console.log("Second Callback");
//   next();
// };

// app.get(
//   "/crazy",
//   [cb1, cb2],
//   (req, res, next) => {
//     console.log("Third callback");
//     next();
//   },
//   (req, res) => {
//     console.log("Fourth callback");
//     res.send("Carzyness");
//   }
// );

//Ugly Code
// app.get("/student", (req, res) => {
//   res.send("All Students");
// });
// app.post("/student", (req, res) => {
//   res.send("Add New Student");
// });
// app.put("/student", (req, res) => {
//   res.send("Update Student");
// });
// app.delete("/student", (req, res) => {
//   res.send("Delete Student");
// });

// Refactor
// app
//   .route("/student")
//   .get((req, res) => res.send("All students"))
//   .post((req, res) => res.send("Add New Student"))
//   .put((req, res) => res.send("Update Student"))
//   .delete((req, res) => res.send("Delete Student"));

// Express Router
// 1. Create routes folder and put your routes in a separate file
// 2. Create instance of express.Router()
// 3. Instead fo app.method change that to "router.method"
// 4. Export router
// 5 Import router
// 6. use the (app.use) built-in middleware & provide your routes.

app.use("/students", students);
app.use("/teachers", teachers);

app.listen(8000, () => console.log("Server Up!"));

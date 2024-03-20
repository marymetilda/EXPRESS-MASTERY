import express from "express";
import {
  allStudents,
  deleteStudent,
  newStudent,
  updateStudent,
} from "../controllers/student.js";
const router = express.Router();

// router.get("/all", (req, res) => {
//   res.send("All Students");
// });
// router.post("/create", (req, res) => {
//   res.send("Sign in New Student");
// });
// router.put("/update", (req, res) => {
//   res.send("Update Student ID");
// });
// router.delete("/delete", (req, res) => {
//   res.send("Remove Student from the db");
// });

router.get("/all", allStudents);
router.post("/create", newStudent);
router.put("/update", updateStudent);
router.delete("/delete", deleteStudent);

export default router;

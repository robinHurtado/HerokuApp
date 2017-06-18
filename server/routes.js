import express from "express";
// Controllers Imports
import basicController from "../controller/basicController"; // UNUSED just test
import userController from "../controller/userController";

var routes = express();

// GET
routes.get("/", userController.get); // "get" is a method inside of userController object

// POST
routes.post("/signup", userController.post);

export default routes;
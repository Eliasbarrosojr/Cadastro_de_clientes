import { Router } from "express";
import {} from "../controllers/users.controllers";
import { createContactController } from "../controllers/contact.controllers";

const contactRoutes: Router = Router();

contactRoutes.post("/contact", createContactController);
contactRoutes.get("/contact");
contactRoutes.patch("/contact/:id");
contactRoutes.delete("/contact/:id");

export default contactRoutes;

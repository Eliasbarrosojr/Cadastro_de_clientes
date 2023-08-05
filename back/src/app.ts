import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRoutes from "./routes/users.routes";
import { HandleErrors } from "./middlewares/HandleAppErrors.middlewares";
import contactRoutes from "./routes/contact.routes";

const app = express();

app.use(express.json());
app.use("", userRoutes);
app.use("", contactRoutes);
app.use(HandleErrors);
export default app;
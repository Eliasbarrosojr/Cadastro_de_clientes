import { Request, Response } from "express";
import { createContactService } from "../services/contact/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const newUser = await createContactService(req.body);
  return res.status(201).json(newUser);
};

const getContactController = async (req: Request, res: Response) => {};

const updateContactController = async (req: Request, res: Response) => {};

const deletContactController = async (req: Request, res: Response) => {};

export {
  createContactController,
  getContactController,
  updateContactController,
  deletContactController,
};

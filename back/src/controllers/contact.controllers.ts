import { Request, Response } from "express";
import { createContactService } from "../services/contact/createContact.service";
import { listContactService } from "../services/contact/getContact.service";
import { updateContactService } from "../services/contact/updateContact.service";
import { deleteContactService } from "../services/contact/deleteContact.service";

const createContactController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const newTask = await createContactService(req.body, userId);

  return res.status(201).json(newTask);
};

const getContactController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const contacts = await listContactService(userId);

  return res.json(contacts);
};

const updateContactController = async (req: Request, res: Response) => {
  const updateTask = await updateContactService(req.body, req.params.id);
  return res.json(updateTask);
};

const deletContactController = async (req: Request, res: Response) => {
  await deleteContactService(req.params.id);
  res.status(204).send();
};

export {
  createContactController,
  getContactController,
  updateContactController,
  deletContactController,
};

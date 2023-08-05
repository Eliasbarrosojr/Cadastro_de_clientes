import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactsSchemaRes,
} from "../schemas/contact.schema";

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchemaResponse>;
type TContactsResponse = z.infer<typeof contactsSchemaRes>;

export { TContact, TContactRequest, TContactResponse, TContactsResponse };

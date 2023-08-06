import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { TContactsResponse } from "../../interfaces/contact.interfaces";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppErrors";
import { contactsSchemaRes } from "../../schemas/contact.schema";

const listContactService = async (
  userId: string
): Promise<TContactsResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userContact: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (!userContact) {
    throw new AppError("user not found", 404);
  }

  const contacts = await contactRepository.find({
    where: {
      user: userContact,
    },
  });

  return contactsSchemaRes.parse(contacts);
};

export { listContactService };

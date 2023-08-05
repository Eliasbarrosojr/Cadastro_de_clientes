import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { TContactRequest } from "../../interfaces/contact.interfaces";
import { User } from "../../entities/user.entities";

const createContactService = async (data: TContactRequest): Promise<object> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userByEmail: User | null = await userRepository.findOneBy({
    email: data.email,
  });

  const newContact: Contact = contactRepository.create({
    ...data,
    user: userByEmail!,
  });

  await contactRepository.save(newContact);

  return {
    message: "Contact created",
  };
};

export { createContactService };

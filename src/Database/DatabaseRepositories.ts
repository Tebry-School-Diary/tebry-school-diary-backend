import {databaseConnection} from "./DatabaseConnection";
import {User} from "./Entities";

export const UserRepo = databaseConnection.getRepository<User>(User)
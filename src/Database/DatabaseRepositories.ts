import {databaseConnection} from "./DatabaseConnection";
import {City, User} from "./Entities";

export const UserRepo = databaseConnection.getRepository<User>(User)
export const CityRepo = databaseConnection.getRepository<City>(City)
import {databaseConnection} from "./DatabaseConnection";
import {City, Department, User} from "./Entities";

export const UserRepo = databaseConnection.getRepository<User>(User);
export const CityRepo = databaseConnection.getRepository<City>(City);
export const DepartmentRepo = databaseConnection.getRepository<Department>(Department);
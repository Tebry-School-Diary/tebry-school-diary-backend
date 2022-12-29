import {databaseConnection} from "./DatabaseConnection";
import {Building, City, Department, DepartmentName, User} from "./Entities";

export const UserRepo = databaseConnection.getRepository<User>(User);
export const CityRepo = databaseConnection.getRepository<City>(City);
export const DepartmentRepo = databaseConnection.getRepository<Department>(Department);
export const DepartmentNamesRepo = databaseConnection.getRepository<DepartmentName>(DepartmentName);
export const BuildingsRepo = databaseConnection.getRepository<Building>(Building);
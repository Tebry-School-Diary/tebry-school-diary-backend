import {databaseConnection} from "./DatabaseConnection";
import {Building, City, Department, DepartmentName, Hall, HallType, Profession, User, UserRole} from "./Entities";

export const UserRepo = databaseConnection.getRepository<User>(User);
export const CityRepo = databaseConnection.getRepository<City>(City);
export const DepartmentRepo = databaseConnection.getRepository<Department>(Department);
export const DepartmentNamesRepo = databaseConnection.getRepository<DepartmentName>(DepartmentName);
export const BuildingsRepo = databaseConnection.getRepository<Building>(Building);
export const HallTypesRepo = databaseConnection.getRepository<HallType>(HallType);
export const HallsRepo = databaseConnection.getRepository<Hall>(Hall);
export const ProfessionsRepo = databaseConnection.getRepository<Profession>(Profession);
export const UserRolesRepo = databaseConnection.getRepository<UserRole>(UserRole);
import {DataSource} from "typeorm";
import {
    Announcement, Attendance, AttendanceType, Building, City,
    Class, ClassName, Department, DepartmentName, Event, EventType,
    Grade, GradeColor, GradeType, Hall, HallType, Homework,
    Lesson, LessonName, LessonTime, Message,
    Profession, User, UserRole
} from "./Entities";
require("dotenv").config()

export const databaseConnection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: process.env.DATABASENAME?.toString() || "",
    entities: [Class, Profession, Grade, Lesson, GradeType,
               GradeColor, Attendance, AttendanceType,
               LessonTime, Announcement, User, UserRole,
               Message, LessonName, Homework, Event, EventType,
               ClassName, Hall, HallType, City,
               Department, DepartmentName, Building],
    synchronize: true
})
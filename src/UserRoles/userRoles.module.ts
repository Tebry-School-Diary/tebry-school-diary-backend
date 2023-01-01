import {Module} from "@nestjs/common";
import {UserRolesController} from "./userRoles.controller";
import {UserRolesService} from "./userRoles.service";

@Module({
    controllers: [UserRolesController],
    providers: [UserRolesService]
})
export class UserRolesModule { }
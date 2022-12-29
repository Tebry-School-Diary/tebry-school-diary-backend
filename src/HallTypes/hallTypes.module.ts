import {Module} from "@nestjs/common";
import {HallTypesService} from "./hallTypes.service";
import {HallTypesController} from "./hallTypes.controller";

@Module({
    providers: [HallTypesService],
    controllers: [HallTypesController]
})
export class HallTypesModule { }
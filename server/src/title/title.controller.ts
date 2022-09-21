import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TitleService } from "./title.service";
import { TitleControllerBase } from "./base/title.controller.base";

@swagger.ApiTags("titles")
@common.Controller("titles")
export class TitleController extends TitleControllerBase {
  constructor(
    protected readonly service: TitleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

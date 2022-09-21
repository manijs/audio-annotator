import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnnotationService } from "./annotation.service";
import { AnnotationControllerBase } from "./base/annotation.controller.base";

@swagger.ApiTags("annotations")
@common.Controller("annotations")
export class AnnotationController extends AnnotationControllerBase {
  constructor(
    protected readonly service: AnnotationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

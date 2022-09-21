import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AnnotationResolverBase } from "./base/annotation.resolver.base";
import { Annotation } from "./base/Annotation";
import { AnnotationService } from "./annotation.service";

@graphql.Resolver(() => Annotation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AnnotationResolver extends AnnotationResolverBase {
  constructor(
    protected readonly service: AnnotationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

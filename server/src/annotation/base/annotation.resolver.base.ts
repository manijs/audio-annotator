/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateAnnotationArgs } from "./CreateAnnotationArgs";
import { UpdateAnnotationArgs } from "./UpdateAnnotationArgs";
import { DeleteAnnotationArgs } from "./DeleteAnnotationArgs";
import { AnnotationFindManyArgs } from "./AnnotationFindManyArgs";
import { AnnotationFindUniqueArgs } from "./AnnotationFindUniqueArgs";
import { Annotation } from "./Annotation";
import { Segment } from "../../segment/base/Segment";
import { AnnotationService } from "../annotation.service";

@graphql.Resolver(() => Annotation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AnnotationResolverBase {
  constructor(
    protected readonly service: AnnotationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Annotation",
    action: "read",
    possession: "any",
  })
  async _annotationsMeta(
    @graphql.Args() args: AnnotationFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Annotation])
  @nestAccessControl.UseRoles({
    resource: "Annotation",
    action: "read",
    possession: "any",
  })
  async annotations(
    @graphql.Args() args: AnnotationFindManyArgs
  ): Promise<Annotation[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Annotation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Annotation",
    action: "read",
    possession: "own",
  })
  async annotation(
    @graphql.Args() args: AnnotationFindUniqueArgs
  ): Promise<Annotation | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Annotation)
  @nestAccessControl.UseRoles({
    resource: "Annotation",
    action: "create",
    possession: "any",
  })
  async createAnnotation(
    @graphql.Args() args: CreateAnnotationArgs
  ): Promise<Annotation> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        segment: args.data.segment
          ? {
              connect: args.data.segment,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Annotation)
  @nestAccessControl.UseRoles({
    resource: "Annotation",
    action: "update",
    possession: "any",
  })
  async updateAnnotation(
    @graphql.Args() args: UpdateAnnotationArgs
  ): Promise<Annotation | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          segment: args.data.segment
            ? {
                connect: args.data.segment,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Annotation)
  @nestAccessControl.UseRoles({
    resource: "Annotation",
    action: "delete",
    possession: "any",
  })
  async deleteAnnotation(
    @graphql.Args() args: DeleteAnnotationArgs
  ): Promise<Annotation | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Segment, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Segment",
    action: "read",
    possession: "any",
  })
  async segment(@graphql.Parent() parent: Annotation): Promise<Segment | null> {
    const result = await this.service.getSegment(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

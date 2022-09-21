import { Module } from "@nestjs/common";
import { AnnotationModuleBase } from "./base/annotation.module.base";
import { AnnotationService } from "./annotation.service";
import { AnnotationController } from "./annotation.controller";
import { AnnotationResolver } from "./annotation.resolver";

@Module({
  imports: [AnnotationModuleBase],
  controllers: [AnnotationController],
  providers: [AnnotationService, AnnotationResolver],
  exports: [AnnotationService],
})
export class AnnotationModule {}

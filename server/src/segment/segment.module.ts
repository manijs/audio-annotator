import { Module } from "@nestjs/common";
import { SegmentModuleBase } from "./base/segment.module.base";
import { SegmentService } from "./segment.service";
import { SegmentController } from "./segment.controller";
import { SegmentResolver } from "./segment.resolver";

@Module({
  imports: [SegmentModuleBase],
  controllers: [SegmentController],
  providers: [SegmentService, SegmentResolver],
  exports: [SegmentService],
})
export class SegmentModule {}

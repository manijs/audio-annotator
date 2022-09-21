import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SegmentServiceBase } from "./base/segment.service.base";

@Injectable()
export class SegmentService extends SegmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

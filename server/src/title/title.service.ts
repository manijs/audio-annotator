import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TitleServiceBase } from "./base/title.service.base";

@Injectable()
export class TitleService extends TitleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

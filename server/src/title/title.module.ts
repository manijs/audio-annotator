import { Module } from "@nestjs/common";
import { TitleModuleBase } from "./base/title.module.base";
import { TitleService } from "./title.service";
import { TitleController } from "./title.controller";
import { TitleResolver } from "./title.resolver";

@Module({
  imports: [TitleModuleBase],
  controllers: [TitleController],
  providers: [TitleService, TitleResolver],
  exports: [TitleService],
})
export class TitleModule {}

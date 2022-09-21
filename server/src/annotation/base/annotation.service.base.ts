/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Annotation, Segment } from "@prisma/client";

export class AnnotationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AnnotationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnnotationFindManyArgs>
  ): Promise<number> {
    return this.prisma.annotation.count(args);
  }

  async findMany<T extends Prisma.AnnotationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnnotationFindManyArgs>
  ): Promise<Annotation[]> {
    return this.prisma.annotation.findMany(args);
  }
  async findOne<T extends Prisma.AnnotationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnnotationFindUniqueArgs>
  ): Promise<Annotation | null> {
    return this.prisma.annotation.findUnique(args);
  }
  async create<T extends Prisma.AnnotationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnnotationCreateArgs>
  ): Promise<Annotation> {
    return this.prisma.annotation.create<T>(args);
  }
  async update<T extends Prisma.AnnotationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnnotationUpdateArgs>
  ): Promise<Annotation> {
    return this.prisma.annotation.update<T>(args);
  }
  async delete<T extends Prisma.AnnotationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnnotationDeleteArgs>
  ): Promise<Annotation> {
    return this.prisma.annotation.delete(args);
  }

  async getSegment(parentId: string): Promise<Segment | null> {
    return this.prisma.annotation
      .findUnique({
        where: { id: parentId },
      })
      .segment();
  }
}
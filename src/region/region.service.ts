import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";

@Injectable()
export class RegionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateRegionDto) {
    const exists = await this.prisma.regions.findUnique({
      where: { name: dto.name },
    });

    if (exists) {
      throw new BadRequestException(`Region '${dto.name}' already exists`);
    }

    return this.prisma.regions.create({ data: dto });
  }

  findAll() {
    return this.prisma.regions.findMany();
  }

  findOne(id: number) {
    return this.prisma.regions.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateRegionDto) {
    return this.prisma.regions.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.regions.delete({ where: { id } });
  }
}

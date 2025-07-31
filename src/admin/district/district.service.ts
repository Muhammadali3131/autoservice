import { Injectable, ConflictException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";

@Injectable()
export class DistrictService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateDistrictDto) {
    const exists = await this.prisma.district.findFirst({
      where: {
        name: dto.name,
        regionId: dto.regionId,
      },
    });

    if (exists) {
      throw new ConflictException("Bu district allaqachon mavjud");
    }

    return this.prisma.district.create({ data: dto });
  }

  findAll() {
    return this.prisma.district.findMany({ include: { Regions: true } });
  }

  findOne(id: number) {
    return this.prisma.district.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateDistrictDto) {
    return this.prisma.district.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.district.delete({ where: { id } });
  }
}

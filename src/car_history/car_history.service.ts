import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCarHistoryDto } from "./dto/create-car_history.dto";
import { UpdateCarHistoryDto } from "./dto/update-car_history.dto";

@Injectable()
export class CarHistoryService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCarHistoryDto) {
    return this.prisma.car_History.create({
      data: {
        car_id: dto.car_id,
        owner_id: dto.owner_id,
        buyed_at: new Date(dto.buyed_at),
        sold_at: dto.sold_at ? new Date(dto.sold_at) : null,
      },
    });
  }

  findAll() {
    return this.prisma.car_History.findMany({
      include: {
        car: true,
        owner: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.car_History.findUnique({
      where: { id },
      include: {
        car: true,
        owner: true,
      },
    });
  }

  update(id: number, dto: UpdateCarHistoryDto) {
    return this.prisma.car_History.update({
      where: { id },
      data: {
        car_id: dto.car_id,
        owner_id: dto.owner_id,
        buyed_at: dto.buyed_at ? new Date(dto.buyed_at) : undefined,
        sold_at: dto.sold_at ? new Date(dto.sold_at) : null,
      },
    });
  }

  remove(id: number) {
    return this.prisma.car_History.delete({
      where: { id },
    });
  }
}
  
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";

@Injectable()
export class CarService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCarDto: CreateCarDto) {
    const car = await this.prisma.car.create({
      data: createCarDto,
    });
    return car;
  }

  async findAll() {
    return this.prisma.car.findMany({
      include: {
        current_owner: true,
      },
    });
  }

  async findOne(id: number) {
    const car = await this.prisma.car.findUnique({
      where: { id },
      include: {
        current_owner: true,
      },
    });

    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }

    return car;
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    const existing = await this.prisma.car.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }

    return this.prisma.car.update({
      where: { id },
      data: updateCarDto,
    });
  }

  async remove(id: number) {
    const existing = await this.prisma.car.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }

    return this.prisma.car.delete({
      where: { id },
    });
  }
}

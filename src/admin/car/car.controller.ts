import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CarService } from "./car.service";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Cars") // Swagger tag (kategoriya)
@Controller("car")
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  @ApiOperation({ summary: "Yangi mashina qo‘shish" })
  @ApiResponse({ status: 201, description: "Mashina muvaffaqiyatli qo‘shildi" })
  @ApiResponse({ status: 400, description: "Yaroqsiz ma’lumot" })
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha mashinalarni olish" })
  @ApiResponse({ status: 200, description: "Mashinalar ro‘yxati" })
  findAll() {
    return this.carService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Bitta mashinani olish (ID orqali)" })
  @ApiResponse({ status: 200, description: "Mashina topildi" })
  @ApiResponse({ status: 404, description: "Mashina topilmadi" })
  findOne(@Param("id") id: string) {
    return this.carService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Mashinani yangilash" })
  @ApiResponse({ status: 200, description: "Mashina yangilandi" })
  @ApiResponse({ status: 404, description: "Mashina topilmadi" })
  update(@Param("id") id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(+id, updateCarDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Mashina o‘chirish" })
  @ApiResponse({ status: 200, description: "Mashina o‘chirildi" })
  @ApiResponse({ status: 404, description: "Mashina topilmadi" })
  remove(@Param("id") id: string) {
    return this.carService.remove(+id);
  }
}

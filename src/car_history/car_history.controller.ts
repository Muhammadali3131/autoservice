import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CarHistoryService } from "./car_history.service";
import { CreateCarHistoryDto } from "./dto/create-car_history.dto";
import { UpdateCarHistoryDto } from "./dto/update-car_history.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags("Car History")
@Controller("car-history")
export class CarHistoryController {
  constructor(private readonly carHistoryService: CarHistoryService) {}

  @Post()
  @ApiOperation({ summary: "Create a car history record" })
  @ApiResponse({ status: 201, description: "Successfully created car history" })
  create(@Body() createCarHistoryDto: CreateCarHistoryDto) {
    return this.carHistoryService.create(createCarHistoryDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all car history records" })
  findAll() {
    return this.carHistoryService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a specific car history record by ID" })
  findOne(@Param("id") id: string) {
    return this.carHistoryService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a car history record by ID" })
  update(
    @Param("id") id: string,
    @Body() updateCarHistoryDto: UpdateCarHistoryDto
  ) {
    return this.carHistoryService.update(+id, updateCarHistoryDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a car history record by ID" })
  remove(@Param("id") id: string) {
    return this.carHistoryService.remove(+id);
  }
}

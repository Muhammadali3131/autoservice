import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { DistrictService } from "./district.service";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags("District")
@Controller("district")
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @Post()
  @ApiOperation({ summary: "District yaratish" })
  @ApiResponse({ status: 201, description: "District yaratildi" })
  @ApiResponse({ status: 409, description: "District allaqachon mavjud" })
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha districtlar ro‘yxati" })
  @ApiResponse({ status: 200, description: "Districtlar listi" })
  findAll() {
    return this.districtService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Bitta districtni olish" })
  @ApiResponse({ status: 200, description: "District topildi" })
  @ApiResponse({ status: 404, description: "District topilmadi" })
  findOne(@Param("id") id: string) {
    return this.districtService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Districtni yangilash" })
  @ApiResponse({ status: 200, description: "District yangilandi" })
  update(
    @Param("id") id: string,
    @Body() updateDistrictDto: UpdateDistrictDto
  ) {
    return this.districtService.update(+id, updateDistrictDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Districtni o‘chirish" })
  @ApiResponse({ status: 200, description: "District o‘chirildi" })
  remove(@Param("id") id: string) {
    return this.districtService.remove(+id);
  }
}

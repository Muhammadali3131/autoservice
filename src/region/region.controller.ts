import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { RegionService } from "./region.service";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Region")
@Controller("region")
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Post()
  @ApiOperation({ summary: "Create region" })
  @ApiResponse({ status: 201, description: "Region created" })
  @ApiResponse({ status: 400, description: "Region already exists" })
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all regions" })
  findAll() {
    return this.regionService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get region by ID" })
  findOne(@Param("id") id: string) {
    return this.regionService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update region by ID" })
  update(@Param("id") id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete region by ID" })
  remove(@Param("id") id: string) {
    return this.regionService.remove(+id);
  }
}

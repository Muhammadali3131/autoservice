import { ApiProperty } from "@nestjs/swagger";

export class CreateDistrictDto {
  @ApiProperty({ example: "Olmazor", description: "District nomi" })
  name: string;

  @ApiProperty({ example: 1, description: "Region ID" })
  regionId: number;
}

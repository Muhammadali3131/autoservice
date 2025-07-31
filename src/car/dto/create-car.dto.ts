import { ApiProperty } from "@nestjs/swagger";

export class CreateCarDto {
  @ApiProperty({
    example: "01A123BC",
    description: "Mashinaning davlat raqami",
  })
  plate_number: string;

  @ApiProperty({
    example: "1HGCM82633A004352",
    description: "VIN raqam (Vehicle Identification Number)",
  })
  vin_number: string;

  @ApiProperty({ example: "Chevrolet Cobalt", description: "Mashina modeli" })
  model: string;

  @ApiProperty({ example: 2021, description: "Mashina ishlab chiqarilgan yil" })
  year: number;

  @ApiProperty({ example: 3, description: "Foydalanuvchi ID (egasi)" })
  current_owner_id: number;
}

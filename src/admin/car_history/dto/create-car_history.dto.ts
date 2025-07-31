import { ApiProperty } from "@nestjs/swagger";

export class CreateCarHistoryDto {
  @ApiProperty({ example: 1, description: "Car ID foreign key" })
  car_id: number;

  @ApiProperty({ example: 2, description: "Owner ID foreign key (from Users)" })
  owner_id: number;

  @ApiProperty({
    example: "2023-01-01T00:00:00.000Z",
    description: "Date when the car was bought",
  })
  buyed_at: string;

  @ApiProperty({
    example: "2023-12-01T00:00:00.000Z",
    required: false,
    description: "Date when the car was sold (nullable)",
  })
  sold_at?: string;
}

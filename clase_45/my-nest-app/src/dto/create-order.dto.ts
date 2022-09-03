import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty()
    readonly id: Number;
    @ApiProperty()
    readonly total: Number;
    @ApiProperty()
    readonly paymentMethod: String;
}
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class NotaBody {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({example: 1.0, description: 'Nota da AV1 do senai cimatec'})
    av1: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({example: 1.0, description: 'Nota da AV2 do senai cimatec'})
    av2: number;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({example: 1.0, description: 'Nota da AV3 do senai cimatec'})
    av3: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({example: 1.0, description: 'Nota da EDAG do senai cimatec'})
    edag: number;
}
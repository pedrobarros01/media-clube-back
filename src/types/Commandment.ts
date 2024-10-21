import { ApiProperty } from "@nestjs/swagger";

export class Commandment {
    @ApiProperty({example: 'nao_Seja_um_pato', description: 'Titulo do mandamento'})
    titulo: string;
}
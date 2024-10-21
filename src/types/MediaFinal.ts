import { ApiProperty } from "@nestjs/swagger";

export class MediaFinal {
    @ApiProperty({example: 0, description: 'Código para saber se o aluno passou(0 - reprovado; 1- foi pra final; 2 - aprovado)'})
    codPassou: number;
    @ApiProperty({example: 7.0, description: 'Média final calculada'})
    media: number;
    @ApiProperty({example: 10, description: 'Nota que o aluno precisa tirar na final'})
    notaFinal: number | null;

}
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Commandment } from './types/Commandment';
import { MediaFinal } from './types/MediaFinal';
import { NotaBody } from './dtos/NotaBody';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('clube')
@Controller('clube')
export class AppController {
  constructor(private readonly appService: AppService) {}


  
  @Get('mandamentos')
  @ApiOperation({summary: 'Obter lista de mandamentos do clube'})
  @ApiResponse({status: 200, description: 'Lista de mandamentos recebida com sucesso.', type: Commandment, isArray: true})
  getCommandments(): Commandment[] {
    return this.appService.getCommandments()
  }

  @Post('getmedia')
  @ApiOperation({summary: 'Calculo da média para saber se o aluno foi aprovado/pra final/reprovado'})
  @ApiResponse({status: 200, description: 'Retorna a media final junto com a nota minima da final, caso seja necessário', type: MediaFinal})
  postMediaFinal(@Body() body: NotaBody): MediaFinal {
    return this.appService.postMediaFinal(body.av1, body.av2, body.av3, body.edag)
  }



}

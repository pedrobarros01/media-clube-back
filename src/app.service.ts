import { Injectable } from '@nestjs/common';
import { Commandment } from './types/Commandment';
import { MediaFinal } from './types/MediaFinal';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getCommandments(): Commandment[] {
    const mandamentos: Commandment[] = [
      {titulo: 'não_conserto_impressora'},
      {titulo: 'na_minha_maquina_funciona'},
      {titulo: 'calculo_==_alunos/2'},
      {titulo: 'não_eh_bug_eh_feature'},
      {titulo: 'vai_ficar_abstrato'},
      {titulo: 'invejosos_dirao_q_eh_pog'},
      {titulo: '$sudo_apt_update_café'},
      {titulo: 'se_compilou_commita'},
      {titulo: 'salario_minimo_documentacao_minima'},
      {titulo: 'nao_seja_um_pato'},
    ];
    return mandamentos;
  }
  private round(num: number, decimalPlaces: number): number {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
  }
  postMediaFinal(av1: number, av2: number, av3: number, edag: number): MediaFinal {
      let media: number = av1*0.25 + av2*0.25 + av3*0.3 + edag*0.2;
      media = this.round(media, 2);
      let codPassou: number = 0;
      let notaFinal: number | null;
      if (media >= 7){
        codPassou = 2;
      }else if(media >= 1.7 && media < 7){
        codPassou = 1;
        notaFinal = parseFloat(((50 - (6*media)) / 4).toFixed(1));
      }else {
        codPassou = 0;
      }
      return {codPassou, notaFinal, media}

  } 
}

import EntityMapper from '../../../../application/core/mappers/base/EntityMapper';
import ObjectMapper from '../../../../application/core/mappers/base/ObjectMapper';
import Nota from '../models/Nota';
import NotaEntity from '../../../../application/core/data/entities/NotaEntity';

export default class NotaMapper
  extends EntityMapper<NotaEntity, Nota> implements ObjectMapper<NotaEntity, Nota> {

  map(from: NotaEntity): Nota {
    if (from && from.id) {
      const nota: Nota = new Nota();
      nota.id = from.id;
      nota.idAluno = from.idAluno;
      nota.n1 = from.n1;
      nota.n2 = from.n2;
      nota.n3 = from.n3;
      nota.n4 = from.n4;

      return nota;
    }
  }

  reverseMap(to: Nota): NotaEntity {
    if (to) {
      const nota: NotaEntity = new NotaEntity();

      nota.id = to.id;
      nota.idAluno = to.idAluno;
      nota.n1 = to.n1;
      nota.n2 = to.n2;
      nota.n3 = to.n3;
      nota.n4 = to.n4;

      return nota;
    }
  }

}

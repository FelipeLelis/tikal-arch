import EntityMapper from '../../../../application/core/mappers/base/EntityMapper';
import ObjectMapper from '../../../../application/core/mappers/base/ObjectMapper';
import Aluno from '../models/Aluno';
import AlunoEntity from '../../../../application/core/data/entities/AlunoEntity';

export default class AlunoMapper
  extends EntityMapper<AlunoEntity, Aluno> implements ObjectMapper<AlunoEntity, Aluno> {

  map(from: AlunoEntity): Aluno {
    if (from && from.id) {
      const aluno: Aluno = new Aluno();
      aluno.id = from.id;
      aluno.name = from.name;
      return aluno;
    }
  }

  reverseMap(to: Aluno): AlunoEntity {
    if (to) {
      const aluno: AlunoEntity = new AlunoEntity();
      aluno.id = to.id;
      aluno.name = to.name;
      return aluno;
    }
  }

}

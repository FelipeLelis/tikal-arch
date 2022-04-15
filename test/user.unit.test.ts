import assert from 'ceylon';
import AlunoMapper from '../src/contexts/professores-aluno/domain/mappers/alunoMapper';
import Aluno from '../src/contexts/professores-aluno/domain/models/Aluno';

describe('User mapper', () => {

  it('should return User entity email', () => {
    const alunoMapper: AlunoMapper = new AlunoMapper();
    const user: Aluno = new Aluno();
    user.id = 10;
    user.name = 'felipin';

  });

  it('should return null due to missing ID', () => {
    const userMapper: AlunoMapper = new AlunoMapper();
    const user: Aluno = new Aluno();
    // no ID
    user.name = 'felipin';

  });
});

import { Request as ParentRequest } from 'express';

export default interface Request extends ParentRequest {
  Aluno: any;
  Nota: any;
}

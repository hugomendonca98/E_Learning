/* eslint-disable @typescript-eslint/naming-convention */
declare namespace Express {
  // Criando uma tipagem para o express para definir a propriedade user dentro do request.
  export interface Request {
    user: {
      id: string;
    };
  }
}

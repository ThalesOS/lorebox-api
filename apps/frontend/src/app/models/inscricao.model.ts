export interface Inscricao {
  id?: string;
  corredorId: string;
  corridaId: string;
  distanciaEscolhida: number;
  status: 'PENDENTE' | 'PAGO' | 'CANCELADO';
}

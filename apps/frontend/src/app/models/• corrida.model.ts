export interface Corrida {
  id?: string;
  nome: string;
  data: string; // Ou Date, mas string lida bem com inputs de data do HTML
  local: string;
  distancias: number[]; // Lembra que no Java era uma List<Double>? No TS usamos number[]
}

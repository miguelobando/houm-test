/*
Todos los métodos de la api de space X
*/

import { Launch } from "../../types/launches";
const API_URL = "https://api.spacexdata.com/v3/launches";

export async function getLaunches(currentPage: number = 0): Promise<Launch[]> {
  const resp = await fetch(`${API_URL}?offset=${currentPage}&limit=10`);
  return await resp.json();
}

export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

/*
Todos los métodos de la api de space X
*/

import { Launch } from "../types/launches";
import LocationFetch from "../types/locations";
import RocketsFetch from "../types/rockets";
import Options from "../types/options";
const LAUNCH_API = "https://api.spacexdata.com/v3/launches";
const LOCATION_API = "https://api.spacexdata.com/v3/launchpads";
const ROCKET_API = "https://api.spacexdata.com/v3/rockets";
export async function getLaunches(
  params: string,
  currentPage: number = 0
): Promise<Launch[]> {
  let src: string = `${LAUNCH_API}/past?offset=${currentPage}&limit=10${params}`;
  const resp = await fetch(src);
  return await resp.json();
}

export async function getOptions(key: string): Promise<Options[]> {
  switch (key) {
    case "launch_year":
      let currentYear = new Date().getFullYear();
      let a: Options[] = [];
      for (let i = 2010; i !== currentYear + 1; i++) {
        a.push({
          label: String(i),
          value: String(i),
        });
      }
      return a;
    case "launch_success":
      return [
        {
          label: "Fallido",
          value: "false",
        },
        {
          label: "Exitoso",
          value: "true",
        },
      ];
    case "site_name":
      const resLocation: LocationFetch[] = await (
        await fetch(LOCATION_API)
      ).json();
      const dataLocation: Options[] = resLocation.map((e) => {
        return {
          label: e.name,
          value: e.site_id,
        };
      });
      return dataLocation;
    case "rocket_name":
      const resRocket: RocketsFetch[] = await (await fetch(ROCKET_API)).json();
      const dataRocket: Options[] = resRocket.map((e) => {
        return {
          label: e.rocket_name,
          value: e.rocket_name,
        };
      });
      return dataRocket;
  }
}

export async function getSingleLaunch(id: string): Promise<Launch> {
  const src: string = `${LAUNCH_API}/${id}`;
  const resp = await fetch(src);
  return await resp.json();
}

export default interface RocketsFetch {
  id: number;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  height: Height;
  diameter: Height;
  mass: Mass;
  payload_weights: Payloadweight[];
  first_stage: Firststage;
  second_stage: Secondstage;
  engines: Engines;
  landing_legs: Landinglegs;
  flickr_images: string[];
  wikipedia: string;
  description: string;
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

interface Landinglegs {
  number: number;
  material?: string;
}

interface Engines {
  number: number;
  type: string;
  version: string;
  layout?: string;
  isp: Isp;
  engine_loss_max?: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: Thrustsealevel;
  thrust_vacuum: Thrustsealevel;
  thrust_to_weight: number;
}

interface Isp {
  sea_level: number;
  vacuum: number;
}

interface Secondstage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec?: number;
  thrust: Thrustsealevel;
  payloads: Payloads;
}

interface Payloads {
  option_1: string;
  composite_fairing: Compositefairing;
  option_2?: string;
}

interface Compositefairing {
  height: Height2;
  diameter: Height2;
}

interface Height2 {
  meters?: number;
  feet?: number;
}

interface Firststage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec?: number;
  thrust_sea_level: Thrustsealevel;
  thrust_vacuum: Thrustsealevel;
  cores?: number;
}

interface Thrustsealevel {
  kN: number;
  lbf: number;
}

interface Payloadweight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

interface Mass {
  kg: number;
  lb: number;
}

interface Height {
  meters: number;
  feet: number;
}

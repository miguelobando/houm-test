export interface Launch {
  flight_number: number;
  mission_name: string;
  mission_id: any[];
  upcoming: boolean;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: Rocket;
  ships: any[];
  telemetry: Telemetry;
  launch_site: Launchsite;
  launch_success: boolean;
  launch_failure_details?: Launchfailuredetails;
  links: Links;
  details?: string;
  static_fire_date_utc?: string;
  static_fire_date_unix?: number;
  timeline: Timeline;
  crew?: any;
}

export interface Timeline {
  webcast_liftoff: number;
}

export interface Links {
  mission_patch: string;
  mission_patch_small: string;
  reddit_campaign?: any;
  reddit_launch?: any;
  reddit_recovery?: any;
  reddit_media?: any;
  presskit?: string;
  article_link: string;
  wikipedia: string;
  video_link: string;
  youtube_id: string;
  flickr_images: any[];
}

export interface Launchfailuredetails {
  time: number;
  altitude?: number;
  reason: string;
}

export interface Launchsite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface Telemetry {
  flight_club?: any;
}

export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: Firststage;
  second_stage: Secondstage;
  fairings: Fairings;
}

export interface Fairings {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ship?: any;
}

export interface Secondstage {
  block: number;
  payloads: Payload[];
}

export interface Payload {
  payload_id: string;
  norad_id: number[];
  reused: boolean;
  customers: string[];
  nationality: string;
  manufacturer?: string | string;
  payload_type: string;
  payload_mass_kg?: number;
  payload_mass_lbs?: number;
  orbit: string;
  orbit_params: Orbitparams;
}

export interface Orbitparams {
  reference_system: string;
  regime: string;
  longitude?: any;
  semi_major_axis_km?: number;
  eccentricity?: number;
  periapsis_km?: number;
  apoapsis_km?: number;
  inclination_deg?: number;
  period_min?: number;
  lifespan_years?: any;
  epoch?: string;
  mean_motion?: number;
  raan?: number;
  arg_of_pericenter?: number;
  mean_anomaly?: number;
}

export interface Firststage {
  cores: Core[];
}

export interface Core {
  core_serial: string;
  flight: number;
  block?: any;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  land_success?: any;
  landing_intent: boolean;
  landing_type?: any;
  landing_vehicle?: any;
}

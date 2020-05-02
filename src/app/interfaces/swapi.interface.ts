export interface Films {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}
export interface People {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}

export interface Planets {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}

export interface Species {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}

export interface Result {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
  image?: string;

  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];

  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate:  string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;

  classification: string;
  designation: string;v
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan:string;
  language: string;

}



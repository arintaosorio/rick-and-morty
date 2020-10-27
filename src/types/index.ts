export interface ResponeType {
  info: InfoType;
  results: ResultType[];
}

export interface InfoType {
  count: number;
  pages: number;
  next: null | string;
  prev: null | string;
}

export interface ResultType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: "Male" | "Female";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Data {
   name: string;
   location: string;
   image: string;
   episodes: string[];
}

export interface AppState {
    error?: Error;
    data?: Data[];
    totalPages: number;
    activePage: number;
    searchText: string;
}

export interface PersonalApiResponse {
  data: Personal[];
}

export interface Personal {
  name: string;
  skills: Skills[];
  image: string;
  nationality: string;
  jobTitle: string;
  favouriteFood: string;
}

export interface Skills {
  name: string;
  id: number;
  value: boolean;
}

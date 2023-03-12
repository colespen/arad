export interface Article {
  _id: string;
  index: number;
  title: string;
  content: string;
  rating: number;
  // an index signature does not insure type safety...
  [key: string]: string | number | undefined;
}

export interface MockUser {
  id: string;
  email: string;
  roles: string[];
}

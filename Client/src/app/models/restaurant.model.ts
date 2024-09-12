export interface Restaurant {
  id: number;
  name: string;
  description: string;
  image: string;
  details: Array<{
    label: any;
    value: any;
  }>;
};

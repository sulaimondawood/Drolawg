export interface Watch {
  id: string;
  name: string;
  collection: string;
  price: string;
  description: string;
  specs: {
    movement: string;
    case: string;
    glass: string;
    waterResistance: string;
    diameter: string;
  };
  image: string;
  lifestyleImage: string;
  color: string;
}

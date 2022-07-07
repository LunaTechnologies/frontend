interface Service {
  title: string;
  price: number;
  identificationString: string;
  username: string;
  servType: string;
  thumbnailPath: {
    path: string;
  }[];
}

export type { Service };

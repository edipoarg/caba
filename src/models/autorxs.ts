type Autor = {
  Id: number;
  nombre: string;
  imagen: string;
  info: string;
  twitter: string | null;
  enlaceVer: string;

  notas: number;
  "ilustraciones en notas": number;

  CreatedAt: string;
  UpdatedAt: string;
};

export type { Autor };

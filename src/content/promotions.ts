export type Promotion = {
  id: string;
  title: string;
  summary: string;
  image?: string;
  points?: string[];
};

export const promotions: Promotion[] = [
  {
    id: "monedero",
    title: "Monedero TACUBA",
    summary:
      "Acumule puntos con cada servicio y redímalos en sus sucursales. TACUBA le consiente con beneficios pensados para usted.",
    image: "/images/monedero.jpg",
    points: [
      "Presente su Monedero TACUBA al solicitar el servicio.",
      "Cada punto equivale a $1.00 M.N.",
      "La bonificación se calcula por prenda.",
      "Cada sucursal genera su propia cuenta de beneficios.",
      "La vigencia y acumulación se renuevan el 30 de octubre de cada año.",
    ],
  },
  {
    id: "cumpleanos",
    title: "En tu cumpleaños",
    summary:
      "En su día especial, TACUBA le consiente con beneficios exclusivos. Pregunte en sucursal por la promoción de cumpleaños vigente.",
    image: "/images/cumple.png",
  },
  {
    id: "promociones",
    title: "Promociones vigentes",
    summary:
      "Tenemos las mejores promociones para usted. Si aún no las conoce, le invitamos a conocerlas en cualquiera de nuestras sucursales.",
    image: "/images/mosaic-monedero.png",
  },
];

export const monederoTerms = [
  "Es necesario presentar el MONEDERO TACUBA al momento de solicitar el servicio, para obtener los beneficios.",
  "Las promociones son temporales y pueden cambiar sin previo aviso. La vigencia del monedero y acumulación de puntos se renovará el 30 de octubre de cada año.",
  "El cálculo de bonificación es por prenda y aplica el redondeo correspondiente.",
  "A fin de determinar el monto de los beneficios, cada punto será igual a $1.00 M.N.",
  "Cada punto de venta (sucursal) es independiente y genera su propia cuenta de beneficios individual.",
  "Tintorería Tacuba se reserva el derecho de modificar las condiciones de uso, acumulación y/o redención del programa MONEDERO TACUBA sin previo aviso.",
  "Tintorería Tacuba no se hace responsable en caso de robo o extravío, ni por mal uso de la misma.",
];

export type Service = {
  id: string;
  title: string;
  summary: string;
  details?: string[];
};

export const services: Service[] = [
  {
    id: "tintoreria",
    title: "Tintorería de calidad",
    summary:
      "No solo lavamos y planchamos su ropa: sobre todo cuidamos de ella. Lavado en seco y planchado profesional de ropa de vestir, casual y de fiesta.",
    details: [
      "El lavado en seco conserva en sus prendas el color y textura originales, pudiéndolas lucir como nuevas por más tiempo.",
      "Combinamos el uso de equipo profesional y el terminado a mano para ofrecerle un planchado de calidad.",
    ],
  },
  {
    id: "piel-gamuza",
    title: "Piel y gamuza",
    summary:
      "Lavado en seco especializado de prendas de piel y gamuza para conservar su apariencia y suavidad.",
  },
  {
    id: "blancos",
    title: "Blancos",
    summary:
      "Cuidado profesional de blancos del hogar y de uso diario, con procesos pensados para conservar blancura y frescura.",
  },
  {
    id: "cortinas",
    title: "Cortinas",
    summary:
      "Servicio de limpieza y tableado de cortinas regionales y ahuladas, para que sus espacios luzcan impecables.",
    details: ["Cortinas regionales", "Cortinas ahuladas", "Tableado de cortinas"],
  },
  {
    id: "peluches",
    title: "Peluches sanitizados",
    summary:
      "Limpieza y sanitizado de peluches, con procesos cuidadosos para devolverles higiene y suavidad.",
  },
  {
    id: "planchado",
    title: "Sólo planchado",
    summary:
      "Planchado profesional con terminado a mano, ideal cuando solo necesita recuperar la presentación de sus prendas.",
  },
  {
    id: "tenido",
    title: "Teñido profesional",
    summary:
      "Servicio de teñido profesional para renovar el color de sus prendas con acabados uniformes y cuidadosos.",
  },
  {
    id: "composturas",
    title: "Composturas",
    summary:
      "Si necesita cualquier arreglo en sus prendas, acuda a Tacuba. Desde una corrección de dobladillo hasta composturas en todo tipo de prendas.",
  },
  {
    id: "urgentes",
    title: "Servicios urgentes",
    summary:
      "Cuando el tiempo apremia, ofrecemos servicio urgente el mismo día y, en plantas seleccionadas, servicio express en 3 horas.",
  },
  {
    id: "domicilio",
    title: "Servicio a domicilio",
    summary:
      "Recogemos y entregamos sus prendas para que no tenga que batallar. Nosotros lo hacemos por usted.",
  },
];

export const featuredServices = services.slice(0, 6);

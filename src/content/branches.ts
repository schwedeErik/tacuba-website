export type Branch = {
  id: string;
  name: string;
  address: string;
  phones: string[];
  hours: string;
  amenities: string[];
};

export const branches: Branch[] = [
  {
    id: "santa-rosa",
    name: "Planta Santa Rosa",
    address: "Carr. Internacional 406 (junto a Banamex), Col. Cuauhtémoc",
    phones: ["(951) 549 01 74", "Cel. 951 121 5951"],
    hours: "Horario por contingencia de 10:00 a.m. a 6:00 p.m.",
    amenities: [
      "Estacionamiento disponible",
      "Pago con tarjeta de crédito o débito",
      "Servicio Express 3 hrs.",
      "Planchado mientras espera",
      "Servicio urgente el mismo día",
    ],
  },
  {
    id: "centro",
    name: "Sucursal Centro",
    address: "Mier y Terán #216, Col. Centro",
    phones: ["(951) 516 52 25"],
    hours: "Horario por contingencia de 10:00 a.m. a 6:00 p.m.",
    amenities: [
      "Pago con tarjeta de crédito o débito",
      "Servicio urgente el mismo día",
    ],
  },
  {
    id: "san-sebastian",
    name: "Sucursal San Sebastián",
    address: "Carretera Internacional #5, Col. San Sebastián Tutla",
    phones: ["044 (951) 155 4198"],
    hours: "Horario de 10:00 a.m. a 6:00 p.m.",
    amenities: [
      "Pago con tarjeta de crédito o débito",
      "Servicio urgente el mismo día",
    ],
  },
  {
    id: "violetas",
    name: "Planta Violetas",
    address: "Violetas #121, Col. Reforma",
    phones: ["(951) 512 7592", "Cel. 044 (951) 155 4226"],
    hours: "Horario de 8:00 a.m. a 8:00 p.m.",
    amenities: [
      "Estacionamiento disponible",
      "Pago con tarjeta de crédito o débito",
      "Servicio Express 3 hrs.",
      "Planchado mientras espera",
      "Servicio urgente el mismo día",
    ],
  },
  {
    id: "universidad",
    name: "Sucursal Universidad",
    address:
      "Av. Universidad #206, frente a la UABJO, Fracc. Trinidad de las Huertas",
    phones: ["(951) 514 8356"],
    hours: "Horario 08:00 a.m. a 7:00 p.m.",
    amenities: [
      "Estacionamiento disponible",
      "Pago con tarjeta de crédito o débito",
      "Servicio urgente el mismo día",
    ],
  },
  {
    id: "xoxo",
    name: "Sucursal Xoxo",
    address: "Blvd. Guadalupe Hinojosa #105, Col. Palestina",
    phones: ["044 (951) 155 4007"],
    hours: "Horario por contingencia de 10:00 a.m. a 6:00 p.m.",
    amenities: [
      "Pago con tarjeta de crédito o débito",
      "Servicio urgente el mismo día",
    ],
  },
];

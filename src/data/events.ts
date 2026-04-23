import type { Event, Seat, TicketCategory } from "../types/domain";

const defaultCategories: TicketCategory[] = [
  {
    benefits: ["Acesso ao evento", "Visao ampla do palco"],
    description: "Acesso geral ao evento com boa visibilidade.",
    id: "pista",
    name: "Pista",
    price: 90,
    status: "available",
  },
  {
    benefits: ["Area mais proxima", "Entrada dedicada", "Melhor visibilidade"],
    description: "Area intermediaria para quem quer ficar mais perto da experiencia.",
    id: "premium",
    name: "Premium",
    price: 160,
    status: "limited",
  },
  {
    benefits: ["Setor reservado", "Lounge", "Fila rapida", "Beneficios exclusivos"],
    description: "Experiencia completa com setor reservado e beneficios extras.",
    id: "vip",
    name: "VIP",
    price: 260,
    status: "available",
  },
];

function createSeats(eventPrefix: string): Seat[] {
  const occupiedSeats = new Set(["A1", "A8", "B7", "C6", "D7"]);
  const selectedCategoryByRow: Record<string, string> = {
    A: "vip",
    B: "premium",
    C: "premium",
    D: "pista",
    E: "pista",
  };

  return ["A", "B", "C", "D", "E"].flatMap((row) =>
    Array.from({ length: 8 }, (_, index) => {
      const number = index + 1;
      const seatCode = `${row}${number}`;

      return {
        categoryId: selectedCategoryByRow[row],
        id: `${eventPrefix}-${seatCode.toLowerCase()}`,
        number,
        row,
        status: occupiedSeats.has(seatCode) ? "occupied" : "available",
      };
    }),
  );
}

export const events: Event[] = [
  {
    categories: defaultCategories,
    category: "Festival",
    city: "Sao Paulo",
    description:
      "Festival noturno com artistas independentes, experiencias visuais e setores para diferentes perfis de publico.",
    id: "festival-luzes",
    imageLabel: "Festival",
    seats: createSeats("festival-luzes"),
    startsAt: "2026-05-18T20:00:00-03:00",
    state: "SP",
    title: "Festival das Luzes",
    venue: "Arena Villa-Lobos",
  },
  {
    categories: [
      { ...defaultCategories[0], price: 140 },
      { ...defaultCategories[1], price: 220 },
      { ...defaultCategories[2], price: 360 },
    ],
    category: "Congresso",
    city: "Curitiba",
    description:
      "Conferencia sobre tecnologia, produto digital e inovacao, com palestras, paineis e networking.",
    id: "tech-summit",
    imageLabel: "Tech",
    seats: createSeats("tech-summit"),
    startsAt: "2026-06-02T09:00:00-03:00",
    state: "PR",
    title: "Tech Summit Brasil",
    venue: "Centro de Eventos Positivo",
  },
  {
    categories: [
      { ...defaultCategories[0], price: 70 },
      { ...defaultCategories[1], price: 120 },
      { ...defaultCategories[2], price: 210, status: "limited" },
    ],
    category: "Show",
    city: "Belo Horizonte",
    description:
      "Noite musical com trio de jazz, convidados especiais e areas reservadas para grupos.",
    id: "noite-jazz",
    imageLabel: "Jazz",
    seats: createSeats("noite-jazz"),
    startsAt: "2026-06-15T21:00:00-03:00",
    state: "MG",
    title: "Noite de Jazz",
    venue: "Teatro Minas",
  },
  {
    categories: [
      { ...defaultCategories[0], price: 55 },
      { ...defaultCategories[1], price: 110 },
      { ...defaultCategories[2], price: 190 },
    ],
    category: "Teatro",
    city: "Rio de Janeiro",
    description:
      "Espetaculo teatral com sessao unica, assentos numerados e categorias por proximidade do palco.",
    id: "olhos-de-nara",
    imageLabel: "Teatro",
    seats: createSeats("olhos-de-nara"),
    startsAt: "2026-07-04T19:30:00-03:00",
    state: "RJ",
    title: "Os Olhos de Nara",
    venue: "Teatro Leblon",
  },
  {
    categories: [
      { ...defaultCategories[0], price: 75 },
      { ...defaultCategories[1], price: 135 },
      { ...defaultCategories[2], price: 230 },
    ],
    category: "Show",
    city: "Recife",
    description:
      "Apresentacao ao ar livre com repertorio autoral, participacoes especiais e setores para diferentes experiencias.",
    id: "mar-aberto-tour",
    imageLabel: "Show",
    seats: createSeats("mar-aberto-tour"),
    startsAt: "2026-05-25T20:30:00-03:00",
    state: "PE",
    title: "Mar Aberto Tour",
    venue: "Teatro RioMar",
  },
  {
    categories: [
      { ...defaultCategories[0], price: 95 },
      { ...defaultCategories[1], price: 170, status: "limited" },
      { ...defaultCategories[2], price: 290 },
    ],
    category: "Festival",
    city: "Salvador",
    description:
      "Festival gastronomico e musical com experiencias sensoriais, chefs convidados e programacao ao longo do dia.",
    id: "sabores-da-cidade",
    imageLabel: "Food",
    seats: createSeats("sabores-da-cidade"),
    startsAt: "2026-06-20T16:00:00-03:00",
    state: "BA",
    title: "Sabores da Cidade",
    venue: "Centro de Convencoes Salvador",
  },
  {
    categories: [
      { ...defaultCategories[0], price: 110 },
      { ...defaultCategories[1], price: 180 },
      { ...defaultCategories[2], price: 320, status: "limited" },
    ],
    category: "Congresso",
    city: "Brasilia",
    description:
      "Encontro sobre produto, inteligencia artificial e estrategia digital com trilhas paralelas e networking executivo.",
    id: "future-product-forum",
    imageLabel: "Forum",
    seats: createSeats("future-product-forum"),
    startsAt: "2026-07-10T08:30:00-03:00",
    state: "DF",
    title: "Future Product Forum",
    venue: "Ulysses Centro de Convencoes",
  },
  {
    categories: [
      { ...defaultCategories[0], price: 65 },
      { ...defaultCategories[1], price: 115 },
      { ...defaultCategories[2], price: 185 },
    ],
    category: "Teatro",
    city: "Fortaleza",
    description:
      "Montagem contemporanea com cenografia imersiva, sessao noturna e lugares marcados por categoria.",
    id: "vento-leste",
    imageLabel: "Cena",
    seats: createSeats("vento-leste"),
    startsAt: "2026-07-18T20:00:00-03:00",
    state: "CE",
    title: "Vento do Leste",
    venue: "Theatro Jose de Alencar",
  },
  {
    categories: [
      { ...defaultCategories[0], price: 85 },
      { ...defaultCategories[1], price: 145 },
      { ...defaultCategories[2], price: 240 },
    ],
    category: "Experiencia",
    city: "Sao Paulo",
    description:
      "Instalacao audiovisual interativa com horarios por sessao, percurso guiado e lotacao controlada.",
    id: "estudio-imersao",
    imageLabel: "Expo",
    seats: createSeats("estudio-imersao"),
    startsAt: "2026-06-28T18:30:00-03:00",
    state: "SP",
    title: "Estudio Imersao",
    venue: "Pavilhao da Bienal",
  },
  {
    categories: [
      { ...defaultCategories[0], price: 60 },
      { ...defaultCategories[1], price: 95 },
      { ...defaultCategories[2], price: 150, status: "sold-out" },
    ],
    category: "Palestra",
    city: "Florianopolis",
    description:
      "Encontro academico sobre usabilidade, acessibilidade e design de interfaces digitais.",
    id: "ihc-day",
    imageLabel: "IHC",
    seats: createSeats("ihc-day"),
    startsAt: "2026-04-05T14:00:00-03:00",
    state: "SC",
    title: "IHC Day",
    venue: "Auditório Central UFSC",
  },
  {
    categories: [
      { ...defaultCategories[0], price: 80 },
      { ...defaultCategories[1], price: 130 },
      { ...defaultCategories[2], price: 220 },
    ],
    category: "Stand up",
    city: "Porto Alegre",
    description:
      "Apresentacao de comedia com assentos marcados e setores com diferentes distancias do palco.",
    id: "standup-centro",
    imageLabel: "Comedy",
    seats: createSeats("standup-centro"),
    startsAt: "2026-03-12T20:30:00-03:00",
    state: "RS",
    title: "Stand Up no Centro",
    venue: "Casa de Cultura Mario Quintana",
  },
];

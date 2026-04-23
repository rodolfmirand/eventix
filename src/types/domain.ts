export type User = {
  email: string;
  id: string;
  name: string;
};

export type TicketCategoryStatus = "available" | "limited" | "sold-out";

export type TicketCategory = {
  benefits: string[];
  description: string;
  id: string;
  name: string;
  price: number;
  status: TicketCategoryStatus;
};

export type SeatStatus = "available" | "occupied";

export type Seat = {
  categoryId: string;
  id: string;
  number: number;
  row: string;
  status: SeatStatus;
};

export type Event = {
  categories: TicketCategory[];
  category: string;
  city: string;
  description: string;
  id: string;
  imageLabel: string;
  seats: Seat[];
  startsAt: string;
  state: string;
  title: string;
  venue: string;
};

export type PurchasedTicket = {
  categoryId: string;
  eventId: string;
  id: string;
  purchasedAt: string;
  qrPayload: string;
  seatId: string;
  userId: string;
};

import { currentUser } from "./users";
import type { PurchasedTicket } from "../types/domain";

export const purchasedTickets: PurchasedTicket[] = [
  {
    categoryId: "premium",
    eventId: "festival-luzes",
    id: "EVX-2026-001",
    purchasedAt: "2026-04-23T09:30:00-03:00",
    qrPayload: "eventix:ticket:EVX-2026-001:event:festival-luzes:seat:festival-luzes-b2",
    seatId: "festival-luzes-b2",
    userId: currentUser.id,
  },
  {
    categoryId: "pista",
    eventId: "ihc-day",
    id: "EVX-2026-000",
    purchasedAt: "2026-03-25T15:10:00-03:00",
    qrPayload: "eventix:ticket:EVX-2026-000:event:ihc-day:seat:ihc-day-d4",
    seatId: "ihc-day-d4",
    userId: currentUser.id,
  },
];

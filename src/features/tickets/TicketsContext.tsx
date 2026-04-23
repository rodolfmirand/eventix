import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { purchasedTickets as initialTickets } from "../../data/tickets";
import { currentUser } from "../../data/users";
import type { PurchasedTicket } from "../../types/domain";

type CreateTicketInput = {
  categoryId: string;
  eventId: string;
  seatId: string;
};

type TicketsContextValue = {
  createTicket: (input: CreateTicketInput) => PurchasedTicket;
  tickets: PurchasedTicket[];
};

const TicketsContext = createContext<TicketsContextValue | undefined>(undefined);

type TicketsProviderProps = {
  children: ReactNode;
};

export function TicketsProvider({ children }: TicketsProviderProps) {
  const [tickets, setTickets] = useState<PurchasedTicket[]>(initialTickets);

  function createTicket({ categoryId, eventId, seatId }: CreateTicketInput) {
    const nextNumber = tickets.length + 1;
    const ticketId = `EVX-2026-${String(nextNumber).padStart(3, "0")}`;
    const newTicket: PurchasedTicket = {
      categoryId,
      eventId,
      id: ticketId,
      purchasedAt: new Date().toISOString(),
      qrPayload: `eventix:ticket:${ticketId}:event:${eventId}:seat:${seatId}`,
      seatId,
      userId: currentUser.id,
    };

    setTickets((currentTickets) => [...currentTickets, newTicket]);
    return newTicket;
  }

  const value = useMemo<TicketsContextValue>(
    () => ({
      createTicket,
      tickets,
    }),
    [tickets],
  );

  return <TicketsContext.Provider value={value}>{children}</TicketsContext.Provider>;
}

export function useTickets() {
  const context = useContext(TicketsContext);

  if (!context) {
    throw new Error("useTickets deve ser usado dentro de TicketsProvider.");
  }

  return context;
}

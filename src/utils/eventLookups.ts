import { events } from "../data/events";
import { purchasedTickets } from "../data/tickets";
import type { Event, PurchasedTicket } from "../types/domain";
import { isEventPast, sortEventsChronologically } from "./date";

export function getEventById(eventId: string) {
  return events.find((event) => event.id === eventId);
}

export function getCategoryById(event: Event, categoryId: string) {
  return event.categories.find((category) => category.id === categoryId);
}

export function getSeatById(event: Event, seatId: string) {
  return event.seats.find((seat) => seat.id === seatId);
}

export function getMinimumTicketPrice(event: Event) {
  return Math.min(...event.categories.map((category) => category.price));
}

export function getUpcomingEvents() {
  return sortEventsChronologically(events.filter((event) => !isEventPast(event)));
}

export function getPastEvents() {
  return sortEventsChronologically(events.filter(isEventPast));
}

export function getTicketDetails(ticket: PurchasedTicket) {
  const event = getEventById(ticket.eventId);

  if (!event) {
    return undefined;
  }

  const category = getCategoryById(event, ticket.categoryId);
  const seat = getSeatById(event, ticket.seatId);

  if (!category || !seat) {
    return undefined;
  }

  return {
    category,
    event,
    seat,
    ticket,
  };
}

export function getPurchasedTicketById(ticketId: string) {
  return purchasedTickets.find((ticket) => ticket.id === ticketId);
}

export function getPurchasedTicketDetails() {
  return purchasedTickets
    .map(getTicketDetails)
    .filter((ticketDetails): ticketDetails is NonNullable<typeof ticketDetails> =>
      Boolean(ticketDetails),
    )
    .sort(
      (first, second) =>
        new Date(first.event.startsAt).getTime() - new Date(second.event.startsAt).getTime(),
    );
}

export function splitPurchasedTicketsByEventDate() {
  const ticketDetails = getPurchasedTicketDetails();

  return {
    past: ticketDetails.filter(({ event }) => isEventPast(event)),
    upcoming: ticketDetails.filter(({ event }) => !isEventPast(event)),
  };
}

import type { Event } from "../types/domain";

export const now = new Date("2026-04-23T12:00:00-03:00");

const longDateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "long",
  timeStyle: "short",
});

const shortDateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
});

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
});

export function formatEventDate(date: string) {
  return longDateFormatter.format(new Date(date));
}

export function formatShortEventDate(date: string) {
  return shortDateFormatter.format(new Date(date)).replace(".", "").toUpperCase();
}

export function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}

export function isEventPast(event: Event) {
  return new Date(event.startsAt).getTime() < now.getTime();
}

export function sortEventsChronologically<T extends { startsAt: string }>(items: T[]) {
  return [...items].sort(
    (first, second) => new Date(first.startsAt).getTime() - new Date(second.startsAt).getTime(),
  );
}

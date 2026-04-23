import { purchasedTickets as defaultTickets } from "../data/tickets";
import { currentUser } from "../data/users";
import type { PurchasedTicket, User } from "../types/domain";

const STORAGE_KEYS = {
  authUser: "eventix.auth.user",
  tickets: "eventix.tickets",
} as const;

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function readJson<T>(key: string): T | null {
  if (!canUseStorage()) {
    return null;
  }

  try {
    const rawValue = window.localStorage.getItem(key);

    if (!rawValue) {
      return null;
    }

    return JSON.parse(rawValue) as T;
  } catch {
    return null;
  }
}

function writeJson(key: string, value: unknown) {
  if (!canUseStorage()) {
    return;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignora erros de quota ou indisponibilidade, mantendo o app funcional em memoria.
  }
}

function removeItem(key: string) {
  if (!canUseStorage()) {
    return;
  }

  try {
    window.localStorage.removeItem(key);
  } catch {
    // Sem efeito colateral para o fluxo principal.
  }
}

export function readPersistedUser(): User | null {
  const persistedUser = readJson<Partial<User>>(STORAGE_KEYS.authUser);

  if (
    persistedUser?.id === currentUser.id &&
    persistedUser.email === currentUser.email &&
    persistedUser.name === currentUser.name
  ) {
    return currentUser;
  }

  return null;
}

export function persistUser(user: User | null) {
  if (!user) {
    removeItem(STORAGE_KEYS.authUser);
    return;
  }

  writeJson(STORAGE_KEYS.authUser, user);
}

function isValidTicket(value: unknown): value is PurchasedTicket {
  if (!value || typeof value !== "object") {
    return false;
  }

  const ticket = value as Record<string, unknown>;

  return (
    typeof ticket.id === "string" &&
    typeof ticket.eventId === "string" &&
    typeof ticket.categoryId === "string" &&
    typeof ticket.seatId === "string" &&
    typeof ticket.userId === "string" &&
    typeof ticket.purchasedAt === "string" &&
    typeof ticket.qrPayload === "string"
  );
}

export function readPersistedTickets() {
  const persistedTickets = readJson<unknown[]>(STORAGE_KEYS.tickets);

  if (!persistedTickets) {
    return defaultTickets;
  }

  const validTickets = persistedTickets.filter(isValidTicket);
  return validTickets.length > 0 ? validTickets : defaultTickets;
}

export function persistTickets(tickets: PurchasedTicket[]) {
  writeJson(STORAGE_KEYS.tickets, tickets);
}

export function resetPersistedTickets() {
  removeItem(STORAGE_KEYS.tickets);
}

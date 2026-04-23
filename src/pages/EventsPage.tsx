import { useMemo, useState } from "react";
import { EmptyState } from "../components/ui/EmptyState";
import { PageHeader } from "../components/ui/PageHeader";
import { EventCard } from "../features/events/EventCard";
import { EventFilters } from "../features/events/EventFilters";
import { getUpcomingEvents } from "../utils/eventLookups";

export function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const cityOptions = useMemo(
    () => [...new Set(upcomingEvents.map((event) => event.city))].sort(),
    [upcomingEvents],
  );
  const filteredEvents = useMemo(
    () =>
      upcomingEvents.filter((event) => {
        const matchesSearch =
          search.trim().length === 0 ||
          `${event.title} ${event.description} ${event.category}`
            .toLowerCase()
            .includes(search.trim().toLowerCase());
        const matchesCity = selectedCity === "all" || event.city === selectedCity;
        const matchesDate =
          dateFilter === "all" || new Date(event.startsAt).getMonth() + 1 === Number(dateFilter);

        return matchesSearch && matchesCity && matchesDate;
      }),
    [dateFilter, search, selectedCity, upcomingEvents],
  );

  function resetFilters() {
    setSearch("");
    setSelectedCity("all");
    setDateFilter("all");
  }

  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Catalogo"
        title="Eventos em destaque"
        subtitle="Base inicial para listagem, filtros e selecao de eventos da plataforma."
      />

      <EventFilters
        cityOptions={cityOptions}
        dateFilter={dateFilter}
        onCityChange={setSelectedCity}
        onDateFilterChange={setDateFilter}
        onReset={resetFilters}
        onSearchChange={setSearch}
        search={search}
        selectedCity={selectedCity}
      />

      {filteredEvents.length > 0 ? (
        <div className="event-grid">
          {filteredEvents.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      ) : (
        <EmptyState actionLabel="Limpar filtros" onAction={resetFilters} title="Nenhum evento encontrado">
          Ajuste a busca ou remova os filtros para ver outros eventos disponiveis.
        </EmptyState>
      )}
    </section>
  );
}

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
        eyebrow="Eventos"
        title="Encontre seu proximo evento"
        subtitle="Shows, festivais, experiencias e conferencias em uma navegacao simples e direta."
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
        <>
          <div className="catalog-status">
            <span>{filteredEvents.length} resultados</span>
            <span>
              {selectedCity === "all" ? "Todas as cidades" : selectedCity}
              {dateFilter === "all" ? "" : ` · ${new Date(`2026-${dateFilter}-01`).toLocaleString("pt-BR", { month: "long" })}`}
            </span>
          </div>

          <div className="event-grid">
            {filteredEvents.map((event) => (
              <EventCard event={event} key={event.id} />
            ))}
          </div>
        </>
      ) : (
        <EmptyState
          actionLabel="Limpar filtros"
          onAction={resetFilters}
          title="Nenhum evento encontrado"
        >
          Ajuste a busca ou remova os filtros para ver outros eventos disponiveis.
        </EmptyState>
      )}
    </section>
  );
}

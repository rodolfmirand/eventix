type EventFiltersProps = {
  cityOptions: string[];
  dateFilter: string;
  onCityChange: (value: string) => void;
  onDateFilterChange: (value: string) => void;
  onReset: () => void;
  onSearchChange: (value: string) => void;
  search: string;
  selectedCity: string;
};

const dateOptions = [
  { label: "Todas as datas", value: "all" },
  { label: "Maio", value: "05" },
  { label: "Junho", value: "06" },
  { label: "Julho", value: "07" },
];

export function EventFilters({
  cityOptions,
  dateFilter,
  onCityChange,
  onDateFilterChange,
  onReset,
  onSearchChange,
  search,
  selectedCity,
}: EventFiltersProps) {
  return (
    <section className="discovery-toolbar" aria-label="Ferramentas de descoberta">
      <label className="discovery-toolbar__search">
        <span className="sr-only">Buscar evento</span>
        <input
          name="search"
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Buscar por nome, categoria ou experiencia"
          type="search"
          value={search}
        />
      </label>

      <label className="toolbar-field">
        <span className="sr-only">Filtrar por cidade</span>
        <select
          className="toolbar-select"
          name="city"
          onChange={(event) => onCityChange(event.target.value)}
          value={selectedCity}
        >
          <option value="all">Todas as cidades</option>
          {cityOptions.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>

      <label className="toolbar-field">
        <span className="sr-only">Filtrar por periodo</span>
        <select
          className="toolbar-select"
          name="date"
          onChange={(event) => onDateFilterChange(event.target.value)}
          value={dateFilter}
        >
          {dateOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <button className="toolbar-reset" onClick={onReset} type="button">
        Limpar
      </button>
    </section>
  );
}

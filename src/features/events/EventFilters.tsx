import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";

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
    <Card className="search-panel">
      <Input
        helperText="Pesquise por nome do evento, artista, palestra ou festival."
        label="Buscar evento"
        name="search"
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Ex.: festival, jazz, tecnologia"
        type="search"
        value={search}
      />

      <div className="filter-section">
        <span className="filter-section__label">Cidade</span>
        <div className="filter-row" aria-label="Filtro por cidade">
          <Button
            onClick={() => onCityChange("all")}
            variant={selectedCity === "all" ? "secondary" : "ghost"}
          >
            Todas
          </Button>
          {cityOptions.map((city) => (
            <Button
              key={city}
              onClick={() => onCityChange(city)}
              variant={selectedCity === city ? "secondary" : "ghost"}
            >
              {city}
            </Button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <span className="filter-section__label">Periodo</span>
        <div className="filter-row" aria-label="Filtro por periodo">
          {dateOptions.map((option) => (
            <Button
              key={option.value}
              onClick={() => onDateFilterChange(option.value)}
              variant={dateFilter === option.value ? "secondary" : "ghost"}
            >
              {option.label}
            </Button>
          ))}
          <Button onClick={onReset} variant="ghost">
            Limpar filtros
          </Button>
        </div>
      </div>
    </Card>
  );
}

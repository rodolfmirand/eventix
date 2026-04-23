import { Link, useParams, useSearchParams } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { formatCurrency, formatEventDate } from "../utils/date";
import { getEventById } from "../utils/eventLookups";

export function SeatSelectionPage() {
  const { id = "evento" } = useParams();
  const [searchParams] = useSearchParams();
  const event = getEventById(id);
  const categoryId = searchParams.get("categoria") ?? "premium";
  const selectedCategory = event?.categories.find((category) => category.id === categoryId);
  const selectedSeat = event?.seats.find(
    (seat) => seat.categoryId === selectedCategory?.id && seat.status === "available",
  );

  if (!event || !selectedCategory || !selectedSeat) {
    return (
      <section className="page-stack">
        <PageHeader
          eyebrow="Assentos"
          title="Assentos indisponiveis"
          subtitle="Volte para o catalogo e escolha outro evento ou categoria."
        />
        <Link className="button button--secondary" to="/eventos">
          Ver eventos
        </Link>
      </section>
    );
  }

  return (
    <section className="page-stack">
      <PageHeader
        eyebrow="Assentos"
        title="Escolha seu lugar"
        subtitle="O mapa de assentos mostrara lugares livres, ocupados e selecionados."
      />

      <div className="purchase-layout">
        <Card className="seat-placeholder">
          <div className="seat-stage">Palco</div>
          <div className="seat-placeholder__grid" aria-label="Previa visual do mapa de assentos">
            {event.seats.map((seat) => {
              const isSelected = seat.id === selectedSeat.id;
              const isOccupied = seat.status === "occupied";
              const seatLabel = `${seat.row}${seat.number}`;

              return (
                <button
                  aria-label={
                    isSelected
                      ? `Assento ${seatLabel} selecionado`
                      : isOccupied
                        ? `Assento ${seatLabel} ocupado`
                        : `Assento ${seatLabel} livre`
                  }
                  className={[
                    "seat-preview",
                    isOccupied ? "seat-preview--occupied" : "",
                    isSelected ? "seat-preview--selected" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  disabled={isOccupied}
                  key={seat.id}
                  type="button"
                >
                  {isSelected ? seatLabel : ""}
                </button>
              );
            })}
          </div>

          <div className="seat-legend" aria-label="Legenda de assentos">
            <span>
              <i className="seat-preview" /> Livre
            </span>
            <span>
              <i className="seat-preview seat-preview--selected" /> Selecionado
            </span>
            <span>
              <i className="seat-preview seat-preview--occupied" /> Ocupado
            </span>
          </div>
        </Card>

        <Card className="purchase-summary">
          <div className="section-heading">
            <h2>Resumo da compra</h2>
            <p>Mantenha suas escolhas visiveis antes de avancar.</p>
          </div>
          <dl className="summary-list">
            <div>
              <dt>Evento</dt>
              <dd>{event.title}</dd>
            </div>
            <div>
              <dt>Data</dt>
              <dd>{formatEventDate(event.startsAt)}</dd>
            </div>
            <div>
              <dt>Categoria</dt>
              <dd>
                <Badge variant="primary">{selectedCategory.name}</Badge>
              </dd>
            </div>
            <div>
              <dt>Assento</dt>
              <dd>
                {selectedSeat.row}
                {selectedSeat.number}
              </dd>
            </div>
            <div>
              <dt>Total</dt>
              <dd className="summary-total">{formatCurrency(selectedCategory.price)}</dd>
            </div>
          </dl>
          <Link className="button button--primary" to="/checkout">
            Continuar para pagamento
          </Link>
          <Link className="button button--ghost" to={`/eventos/${id}`}>
            Voltar para detalhes
          </Link>
        </Card>
      </div>
    </section>
  );
}

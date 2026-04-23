import { useMemo, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { PurchaseSummary } from "../features/checkout/PurchaseSummary";
import { SeatLegend } from "../features/seats/SeatLegend";
import { SeatMap } from "../features/seats/SeatMap";
import { formatCurrency, formatEventDate } from "../utils/date";
import { getEventById, getSeatsByCategory } from "../utils/eventLookups";

export function SeatSelectionPage() {
  const navigate = useNavigate();
  const { id = "evento" } = useParams();
  const [searchParams] = useSearchParams();
  const event = getEventById(id);
  const categoryId = searchParams.get("categoria") ?? "premium";
  const selectedCategory = event?.categories.find((category) => category.id === categoryId);
  const categorySeats = useMemo(
    () => (event && selectedCategory ? getSeatsByCategory(event, selectedCategory.id) : []),
    [event, selectedCategory],
  );
  const seatStats = useMemo(
    () => ({
      available: categorySeats.filter((seat) => seat.status === "available").length,
      occupied: categorySeats.filter((seat) => seat.status === "occupied").length,
    }),
    [categorySeats],
  );
  const [selectedSeatId, setSelectedSeatId] = useState<string | null>(null);
  const selectedSeat = categorySeats.find((seat) => seat.id === selectedSeatId) ?? null;

  if (!event || !selectedCategory || categorySeats.length === 0) {
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
        subtitle="Selecione um assento disponivel e confirme os detalhes da compra ao lado."
      />

      <div className="purchase-layout">
        <Card className="seat-placeholder">
          <div className="seat-stage">Palco</div>
          <p className="seat-map__status" role="status">
            {seatStats.available} disponiveis · {seatStats.occupied} ocupados
            {selectedSeat ? ` · Assento ${selectedSeat.row}${selectedSeat.number} selecionado` : ""}
          </p>
          <SeatMap onSelectSeat={setSelectedSeatId} seats={categorySeats} selectedSeatId={selectedSeatId} />
          <SeatLegend />
        </Card>

        <Card>
          <PurchaseSummary
            actions={
              <>
                <Button
                  disabled={!selectedSeat}
                  onClick={() =>
                    navigate(
                      `/checkout?evento=${event.id}&categoria=${selectedCategory.id}&assento=${selectedSeat?.id ?? ""}`,
                    )
                  }
                >
                  Continuar para pagamento
                </Button>
                <Link className="button button--ghost" to={`/eventos/${id}`}>
                  Voltar para detalhes
                </Link>
              </>
            }
            categoryName={selectedCategory.name}
            dateLabel={formatEventDate(event.startsAt)}
            eventTitle={event.title}
            locationLabel={`${event.venue} - ${event.city}, ${event.state}`}
            seatLabel={selectedSeat ? `${selectedSeat.row}${selectedSeat.number}` : null}
            totalLabel={formatCurrency(selectedCategory.price)}
          />
        </Card>
      </div>
    </section>
  );
}

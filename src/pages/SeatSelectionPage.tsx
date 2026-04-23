import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/ui/PageHeader";
import { previewPurchase } from "../data/previewCatalog";

export function SeatSelectionPage() {
  const { id = "evento" } = useParams();

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
            {Array.from({ length: 40 }, (_, index) => {
              const isSelected = index === 9;
              const isOccupied = [0, 7, 14, 22, 31].includes(index);

              return (
                <button
                  aria-label={
                    isSelected
                      ? "Assento B12 selecionado"
                      : isOccupied
                        ? "Assento ocupado"
                        : "Assento livre"
                  }
                  className={[
                    "seat-preview",
                    isOccupied ? "seat-preview--occupied" : "",
                    isSelected ? "seat-preview--selected" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  disabled={isOccupied}
                  key={index}
                  type="button"
                >
                  {isSelected ? "B12" : ""}
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
              <dd>{previewPurchase.event}</dd>
            </div>
            <div>
              <dt>Data</dt>
              <dd>{previewPurchase.date}</dd>
            </div>
            <div>
              <dt>Categoria</dt>
              <dd>
                <Badge variant="primary">{previewPurchase.category}</Badge>
              </dd>
            </div>
            <div>
              <dt>Assento</dt>
              <dd>{previewPurchase.seat}</dd>
            </div>
            <div>
              <dt>Total</dt>
              <dd className="summary-total">{previewPurchase.total}</dd>
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

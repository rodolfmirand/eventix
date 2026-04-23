import type { ReactNode } from "react";
import { Badge } from "../../components/ui/Badge";

type PurchaseSummaryProps = {
  actions?: ReactNode;
  categoryName: string;
  dateLabel: string;
  eventTitle: string;
  locationLabel?: string;
  seatLabel?: string | null;
  totalLabel: string;
};

export function PurchaseSummary({
  actions,
  categoryName,
  dateLabel,
  eventTitle,
  locationLabel,
  seatLabel,
  totalLabel,
}: PurchaseSummaryProps) {
  return (
    <div className="purchase-summary" aria-live="polite">
      <div className="section-heading">
        <h2>Resumo da compra</h2>
        <p>Confira os detalhes do pedido antes de seguir.</p>
      </div>
      <dl className="summary-list">
        <div>
          <dt>Evento</dt>
          <dd>{eventTitle}</dd>
        </div>
        <div>
          <dt>Data</dt>
          <dd>{dateLabel}</dd>
        </div>
        {locationLabel ? (
          <div>
            <dt>Local</dt>
            <dd>{locationLabel}</dd>
          </div>
        ) : null}
        <div>
          <dt>Categoria</dt>
          <dd>
            <Badge variant="primary">{categoryName}</Badge>
          </dd>
        </div>
        <div>
          <dt>Assento</dt>
          <dd>{seatLabel ?? "Selecione um assento para continuar"}</dd>
        </div>
        <div>
          <dt>Total</dt>
          <dd className="summary-total">{totalLabel}</dd>
        </div>
      </dl>
      {actions ? <div className="purchase-summary__actions">{actions}</div> : null}
    </div>
  );
}

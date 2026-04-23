import { QRCodeSVG } from "qrcode.react";
import { Badge } from "../../components/ui/Badge";

type DigitalTicketProps = {
  categoryName: string;
  dateLabel: string;
  eventTitle: string;
  locationLabel: string;
  seatLabel: string;
  ticketId: string;
  ticketOwner: string;
  qrPayload: string;
};

export function DigitalTicket({
  categoryName,
  dateLabel,
  eventTitle,
  locationLabel,
  qrPayload,
  seatLabel,
  ticketId,
  ticketOwner,
}: DigitalTicketProps) {
  return (
    <div className="digital-ticket">
      <Badge variant="primary">#{ticketId}</Badge>
      <div className="qr-code-frame" aria-label="QR Code do ingresso">
        <QRCodeSVG
          bgColor="#ffffff"
          fgColor="#07111f"
          includeMargin={true}
          size={192}
          value={qrPayload}
        />
      </div>
      <div>
        <h2>{eventTitle}</h2>
        <p>Apresente este QR Code na entrada do evento.</p>
      </div>
      <dl className="ticket-details">
        <div>
          <dt>Titular</dt>
          <dd>{ticketOwner}</dd>
        </div>
        <div>
          <dt>Data</dt>
          <dd>{dateLabel}</dd>
        </div>
        <div>
          <dt>Local</dt>
          <dd>{locationLabel}</dd>
        </div>
        <div>
          <dt>Categoria</dt>
          <dd>{categoryName}</dd>
        </div>
        <div>
          <dt>Assento</dt>
          <dd>{seatLabel}</dd>
        </div>
      </dl>
    </div>
  );
}

export function SeatLegend() {
  return (
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
  );
}
